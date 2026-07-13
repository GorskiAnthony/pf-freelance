// Post-build step: generates a static HTML shell per blog article with
// article-specific <title> / meta description / Open Graph / Twitter Card
// tags. This site is a client-only SPA (no SSR), and social/chat crawlers
// (Slack, X, LinkedIn, WhatsApp...) don't execute JS when fetching link
// previews - they only read the raw HTML returned by the server. Without
// this step every shared /blog/<slug> URL falls back to the generic
// index.html tags. nginx already serves <dir>/index.html for a matching
// path via `try_files $uri $uri/ /index.html`, so dropping a prerendered
// file at dist/blog/<slug>/index.html is enough - no server config change
// needed. The React app still mounts normally for real visitors.

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const postsDir = path.join(rootDir, "src/content/posts");
const distDir = path.join(rootDir, "dist");
const siteUrl = "https://www.agorski.dev";

const frontmatterPattern = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;

function parseFrontmatter(raw) {
	const match = frontmatterPattern.exec(raw);
	if (!match) return null;
	const [, frontmatter] = match;
	const data = {};
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
	return data;
}

const escapeHtml = (str) =>
	str
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

const shell = readFileSync(path.join(distDir, "index.html"), "utf-8");

const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));

for (const file of files) {
	const slug = file.replace(/\.md$/, "");
	const raw = readFileSync(path.join(postsDir, file), "utf-8");
	const data = parseFrontmatter(raw);
	if (!data) continue;

	const title = `${data.title} — Anthony Gorski`;
	const description = data.excerpt;
	const url = `${siteUrl}/blog/${slug}`;
	const image = `${siteUrl}/assets/PixArt.png`;

	let html = shell;
	html = html.replace(
		/<title>[\s\S]*?<\/title>/,
		`<title>${escapeHtml(title)}</title>`,
	);
	html = html.replace(
		/<meta\s+name="description"[\s\S]*?\/>/,
		`<meta name="description" content="${escapeHtml(description)}" />`,
	);
	html = html.replace(
		/<link\s+rel="canonical"[\s\S]*?\/>/,
		`<link rel="canonical" href="${url}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:type"[\s\S]*?\/>/,
		`<meta property="og:type" content="article" />`,
	);
	html = html.replace(
		/<meta\s+property="og:url"[\s\S]*?\/>/,
		`<meta property="og:url" content="${url}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:title"[\s\S]*?\/>/,
		`<meta property="og:title" content="${escapeHtml(title)}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:description"[\s\S]*?\/>/,
		`<meta property="og:description" content="${escapeHtml(description)}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:image"[\s\S]*?\/>/,
		`<meta property="og:image" content="${image}" />`,
	);
	html = html.replace(
		/<meta\s+name="twitter:title"[\s\S]*?\/>/,
		`<meta name="twitter:title" content="${escapeHtml(title)}" />`,
	);
	html = html.replace(
		/<meta\s+name="twitter:description"[\s\S]*?\/>/,
		`<meta name="twitter:description" content="${escapeHtml(description)}" />`,
	);
	html = html.replace(
		/<meta\s+name="twitter:image"[\s\S]*?\/>/,
		`<meta name="twitter:image" content="${image}" />`,
	);

	const outDir = path.join(distDir, "blog", slug);
	mkdirSync(outDir, { recursive: true });
	writeFileSync(path.join(outDir, "index.html"), html);
}

console.log(`Generated meta shells for ${files.length} blog post(s).`);
