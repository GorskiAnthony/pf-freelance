export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	category: "IA" | "DevOps" | "Web" | "Business";
	readTime: number;
	content: string;
}

const frontmatterPattern = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;

function parseFrontmatter(raw: string) {
	const match = frontmatterPattern.exec(raw);
	if (!match) {
		throw new Error("Article invalide : frontmatter manquant");
	}
	const [, frontmatter, body] = match;
	const data: Record<string, string> = {};
	for (const line of frontmatter.split("\n")) {
		const separatorIndex = line.indexOf(":");
		if (separatorIndex === -1) continue;
		const key = line.slice(0, separatorIndex).trim();
		const value = line
			.slice(separatorIndex + 1)
			.trim()
			.replace(/^"(.*)"$/, "$1");
		data[key] = value;
	}
	return { data, body: body.trim() };
}

const modules = import.meta.glob<string>("./posts/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
});

export const posts: BlogPost[] = Object.entries(modules)
	.map(([path, raw]) => {
		const slug = path.split("/").pop()!.replace(/\.md$/, "");
		const { data, body } = parseFrontmatter(raw);
		return {
			slug,
			title: data.title,
			excerpt: data.excerpt,
			date: data.date,
			category: data.category as BlogPost["category"],
			readTime: Number(data.readTime),
			content: body,
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));

export const getPostBySlug = (slug: string) =>
	posts.find((p) => p.slug === slug);

export const getRelatedPosts = (current: BlogPost, count = 2) =>
	posts
		.filter((p) => p.slug !== current.slug)
		.sort((a, b) =>
			a.category === current.category && b.category !== current.category
				? -1
				: 0,
		)
		.slice(0, count);
