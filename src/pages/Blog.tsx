import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";
import { posts, type BlogPost } from "../content/posts";
import { Icons } from "../helpers/Icon";

const categories: Array<BlogPost["category"] | "Tous"> = [
	"Tous",
	"IA",
	"DevOps",
	"Web",
	"Business",
];

const formatDate = (iso: string) =>
	new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(iso));

export default function Blog() {
	const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");

	const filtered = useMemo(
		() =>
			filter === "Tous"
				? posts
				: posts.filter((p) => p.category === filter),
		[filter],
	);

	return (
		<div className="bg-paper">
			{/* Header */}
			<div className="relative overflow-hidden bg-ink pt-32 pb-20 px-6">
				<div
					className="absolute inset-0 opacity-[0.035] pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(rgba(242,241,236,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,241,236,1) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>
				<div className="relative max-w-3xl mx-auto text-center">
					<motion.span
						className="inline-block font-mono text-xs uppercase tracking-wider text-petrol-light mb-4"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
					>
						Veille & retours d'expérience
					</motion.span>
					<motion.h1
						className="font-display text-4xl md:text-6xl text-paper mb-6 leading-[1.1]"
						style={{ textWrap: "balance" }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						Blog
					</motion.h1>
					<motion.p
						className="text-paper/60 text-lg max-w-xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Ce que je retiens de l'actualité IA, DevOps et web -
						sans reformulation de communiqués de presse, avec ce que
						ça change concrètement pour vos projets.
					</motion.p>
				</div>
			</div>

			{/* List */}
			<div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
				<div className="flex flex-wrap gap-2 mb-14">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={clsx(
								"font-mono text-xs uppercase tracking-wider px-4 py-2 border transition-colors duration-200",
								filter === cat
									? "bg-ink text-paper border-ink"
									: "border-mist text-slate hover:border-ink hover:text-ink",
							)}
						>
							{cat}
						</button>
					))}
				</div>

				<div className="border-t border-mist">
					{filtered.map((post, i) => (
						<motion.div
							key={post.slug}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.06, duration: 0.4 }}
						>
							<Link
								to={`/blog/${post.slug}`}
								className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-10 border-b border-mist"
							>
								<div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 font-mono text-xs text-slate uppercase tracking-wider">
									<span className="text-petrol">
										{post.category}
									</span>
									<span className="text-slate/60">
										{formatDate(post.date)}
									</span>
								</div>
								<div>
									<h2 className="font-display text-2xl sm:text-3xl text-ink mb-3 group-hover:text-petrol transition-colors duration-200">
										{post.title}
									</h2>
									<p className="text-slate leading-relaxed mb-4 max-w-2xl">
										{post.excerpt}
									</p>
									<span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink group-hover:text-petrol transition-colors duration-200">
										Lire l'article
										<Icons.ArrowUpRight className="w-3.5 h-3.5" />
									</span>
								</div>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
