import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "react-toastify";
import { getPostBySlug, getRelatedPosts } from "../content/posts";
import { Icons } from "../helpers/Icon";

const formatDate = (iso: string) =>
	new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(iso));

const markdownComponents = {
	h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
		<h2
			className="font-display text-2xl text-ink mt-12 mb-4 pt-8 border-t border-mist first:mt-0 first:pt-0 first:border-t-0"
			{...props}
		>
			{children}
		</h2>
	),
	h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
		<h3 className="font-display text-xl text-ink mt-8 mb-3" {...props}>
			{children}
		</h3>
	),
	p: (props: React.ComponentProps<"p">) => (
		<p className="text-slate leading-relaxed mb-5 text-[17px]" {...props} />
	),
	strong: (props: React.ComponentProps<"strong">) => (
		<strong className="text-ink font-semibold" {...props} />
	),
	a: (props: React.ComponentProps<"a">) => (
		<a
			className="text-petrol underline hover:text-petrol-deep transition-colors"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		/>
	),
	ul: (props: React.ComponentProps<"ul">) => (
		<ul
			className="list-disc list-outside pl-5 space-y-2 text-slate leading-relaxed mb-5 text-[17px]"
			{...props}
		/>
	),
	li: (props: React.ComponentProps<"li">) => <li {...props} />,
	em: (props: React.ComponentProps<"em">) => (
		<em className="text-ink" {...props} />
	),
};

export default function BlogPost() {
	const { slug } = useParams<{ slug: string }>();
	const post = slug ? getPostBySlug(slug) : undefined;

	if (!post) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center text-center bg-paper px-4">
				<span className="font-mono text-xs uppercase tracking-wider text-slate mb-4">
					Erreur 404
				</span>
				<h1 className="font-display text-4xl text-ink mb-6">
					Article introuvable.
				</h1>
				<Link
					to="/blog"
					className="bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
				>
					Retour au blog
				</Link>
			</div>
		);
	}

	const related = getRelatedPosts(post);

	const copyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		toast.success("Lien copié dans le presse-papiers");
	};

	return (
		<div className="bg-paper pt-32 pb-24">
			<div className="max-w-2xl mx-auto px-5 sm:px-8">
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<Link
						to="/blog"
						className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate hover:text-ink transition-colors mb-10"
					>
						<Icons.ArrowLeft className="w-3.5 h-3.5" />
						Blog
					</Link>

					<div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider mb-6">
						<span className="text-petrol">{post.category}</span>
						<span className="flex items-center gap-1.5 text-slate">
							<Icons.Calendar className="w-3.5 h-3.5" />
							{formatDate(post.date)}
						</span>
						<span className="flex items-center gap-1.5 text-slate">
							<Icons.Clock className="w-3.5 h-3.5" />
							{post.readTime} min
						</span>
					</div>

					<h1
						className="font-display text-3xl sm:text-4xl text-ink mb-6 leading-[1.15]"
						style={{ textWrap: "balance" }}
					>
						{post.title}
					</h1>

					<p className="text-slate text-lg leading-relaxed mb-6 pb-10 border-b border-mist">
						{post.excerpt}
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={markdownComponents}
					>
						{post.content}
					</ReactMarkdown>
				</motion.div>

				<div className="flex items-center justify-between mt-4 pt-8 border-t border-mist">
					<span className="font-mono text-xs uppercase tracking-wider text-slate">
						Anthony Gorski
					</span>
					<button
						onClick={copyLink}
						className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate hover:text-ink transition-colors"
					>
						<Icons.Link2 className="w-3.5 h-3.5" />
						Copier le lien
					</button>
				</div>

				{/* CTA */}
				<div className="mt-16 bg-ink px-8 py-10 sm:px-10 sm:py-12 text-center">
					<h3 className="font-display text-2xl text-paper mb-3">
						Un projet en tête ?
					</h3>
					<p className="text-paper/60 mb-7 max-w-md mx-auto">
						Discutons de votre besoin - sans engagement, réponse
						sous 24h.
					</p>
					<Link
						to="/contact"
						className="inline-block bg-petrol text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
					>
						Démarrons votre projet →
					</Link>
				</div>

				{/* Related */}
				{related.length > 0 && (
					<div className="mt-16">
						<h3 className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
							À lire aussi
						</h3>
						<div className="border-t border-mist">
							{related.map((r) => (
								<Link
									key={r.slug}
									to={`/blog/${r.slug}`}
									className="group block py-6 border-b border-mist"
								>
									<span className="font-mono text-xs uppercase tracking-wider text-petrol">
										{r.category}
									</span>
									<h4 className="font-display text-xl text-ink mt-2 group-hover:text-petrol transition-colors duration-200">
										{r.title}
									</h4>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
