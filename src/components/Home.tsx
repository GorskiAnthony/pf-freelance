import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons } from "../helpers/Icon";
import { posts } from "../content/posts";

const getExp = (since: number) => new Date().getFullYear() - since;

const formatDate = (iso: string) =>
	new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(iso));

const process = [
	{
		step: "01",
		title: "Prise de contact",
		description:
			"Un échange rapide (visio ou téléphone) pour comprendre votre projet, vos objectifs et vos contraintes.",
	},
	{
		step: "02",
		title: "Analyse des besoins",
		description:
			"Je cadre précisément le périmètre - fonctionnalités, budget, délais. Vous recevez un devis clair sous 48h.",
	},
	{
		step: "03",
		title: "Conception & maquettes",
		description:
			"Wireframes et choix visuels validés avec vous avant que la moindre ligne de code ne soit écrite.",
	},
	{
		step: "04",
		title: "Développement",
		description:
			"Je construis votre projet par étapes, avec des points réguliers pour ajuster le tir en cours de route.",
	},
	{
		step: "05",
		title: "Tests & mise en ligne",
		description:
			"Vérifications complètes puis mise en production - votre site est en ligne, fonctionnel et sécurisé.",
	},
	{
		step: "06",
		title: "Suivi & évolutions",
		description:
			"Je reste disponible après la livraison pour le support, les évolutions et les questions du quotidien.",
	},
];

const services = [
	{
		icon: Icons.Rocket,
		title: "Développement & Déploiement",
		description:
			"De l'idée à la mise en production. Je conçois des applications robustes, rapides et prêtes à scaler dès le premier jour.",
		price: "À partir de 450€",
	},
	{
		icon: Icons.Search,
		title: "SEO & Visibilité",
		description:
			"Vos clients vous cherchent sur Google - soyez là où ils regardent. J'optimise votre site pour attirer un trafic qualifié.",
		price: "Audit à partir de 390€",
	},
	{
		icon: Icons.WrenchIcon,
		title: "Maintenance & Support",
		description:
			"Votre site tourne, ça ne suffit pas. Je veille, je corrige, je mets à jour - pour que vous n'ayez jamais à vous en préoccuper.",
		price: "À partir de 35€/mois",
	},
	{
		icon: Icons.Brain,
		title: "Conseil & Accompagnement",
		description:
			"Pas sûr de la bonne techno ? Besoin d'un œil externe ? Je vous aide à prendre les bonnes décisions, sans jargon inutile.",
		price: "110€/heure",
	},
];

export default function Home() {
	const yearsExp = getExp(2016);
	const latestPosts = posts.slice(0, 3);

	return (
		<div className="pt-[72px] bg-paper">
			{/* ─── HERO ─── */}
			<section className="relative bg-ink overflow-hidden">
				<div
					className="absolute inset-0 opacity-[0.035] pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(rgba(242,241,236,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,241,236,1) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>

				<div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
					{/* Left */}
					<div>
						<motion.div
							className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper/60 mb-8"
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
							Développeur full-stack · Disponible pour vos projets
						</motion.div>

						<motion.h1
							className="font-display text-[2.75rem] leading-[1.1] sm:text-6xl sm:leading-[1.08] text-paper mb-7"
							style={{ textWrap: "balance" }}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							Des produits web qui attirent, convainquent et
							convertissent.
						</motion.h1>

						<motion.p
							className="text-paper/65 text-lg leading-relaxed max-w-md mb-10"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Anthony Gorski, développeur full-stack indépendant.
							Je conçois, développe et déploie vos projets -
							livrés dans les délais, sans mauvaise surprise.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-3"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Link
								to="/contact"
								className="bg-petrol text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
							>
								Démarrons votre projet →
							</Link>
							<Link
								to="/pricing"
								className="border border-paper/25 text-paper px-6 py-3.5 font-semibold hover:border-paper/60 transition-colors duration-200"
							>
								Découvrir les offres
							</Link>
						</motion.div>
					</div>

					{/* Right - profile plate */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.25 }}
						className="justify-self-center w-full max-w-[320px]"
					>
						<div className="border border-paper/15">
							<img
								src="/assets/PixArt.png"
								alt="Anthony Gorski"
								className="w-full aspect-[4/5] object-cover grayscale-[15%]"
							/>
							<div className="border-t border-paper/15 px-5 py-4 flex items-center justify-between font-mono text-xs text-paper/60 uppercase tracking-wider">
								<span>Anthony Gorski</span>
								<span className="text-emerald-400">
									● Dispo
								</span>
							</div>
						</div>

						<div className="grid grid-cols-3 border border-t-0 border-paper/15 font-mono">
							<div className="px-4 py-4 border-r border-paper/15">
								<div className="text-2xl text-paper tabular-nums">
									{yearsExp}+
								</div>
								<div className="text-[11px] text-paper/50 uppercase tracking-wider mt-1">
									Ans d'exp.
								</div>
							</div>
							<div className="px-4 py-4 border-r border-paper/15">
								<div className="text-2xl text-paper tabular-nums">
									{posts.length}+
								</div>
								<div className="text-[11px] text-paper/50 uppercase tracking-wider mt-1">
									Articles
								</div>
							</div>
							<div className="px-4 py-4">
								<div className="text-2xl text-paper tabular-nums">
									MRS
								</div>
								<div className="text-[11px] text-paper/50 uppercase tracking-wider mt-1">
									Marseille
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* ─── SERVICES ─── */}
			<section className="border-t border-mist">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
					<div className="max-w-xl mb-16">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Ce que je fais
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
							Quatre façons de faire avancer votre projet.
						</h2>
						<p className="text-slate leading-relaxed">
							Chaque ligne de code sert un objectif : faire
							grandir votre activité.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-mist">
						{services.map((s, i) => (
							<motion.div
								key={s.title}
								className="border-r border-b border-mist p-8 md:p-10"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
							>
								<div className="flex items-start justify-between mb-6">
									<s.icon
										className="w-6 h-6 text-petrol"
										strokeWidth={1.75}
									/>
									<span className="font-mono text-xs text-slate/60 tabular-nums">
										0{i + 1}
									</span>
								</div>
								<h3 className="font-display text-xl text-ink mb-2.5">
									{s.title}
								</h3>
								<p className="text-slate leading-relaxed text-[15px] mb-4">
									{s.description}
								</p>
								<div className="flex items-center justify-between gap-3">
									<span className="font-mono text-xs uppercase tracking-wider text-petrol">
										{s.price}
									</span>
									<Link
										to="/pricing"
										className="font-mono text-xs uppercase tracking-wider text-slate hover:text-petrol transition-colors"
									>
										Voir le détail →
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ─── PROCESS ─── */}
			<section className="border-t border-mist">
				<div className="max-w-4xl mx-auto px-5 sm:px-8 py-24">
					<div className="max-w-xl mb-16">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Comment ça marche
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
							De la prise de contact à la mise en ligne.
						</h2>
						<p className="text-slate leading-relaxed">
							Un déroulé clair, à chaque étape vous savez où vous
							en êtes.
						</p>
					</div>

					<div>
						{process.map((p, i) => (
							<motion.div
								key={p.step}
								className="relative flex gap-6 sm:gap-10"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
							>
								<div className="flex flex-col items-center shrink-0">
									<div className="w-11 h-11 rounded-full border-2 border-petrol bg-paper flex items-center justify-center font-mono text-sm text-petrol">
										{p.step}
									</div>
									{i < process.length - 1 && (
										<div className="w-px flex-1 bg-mist my-2" />
									)}
								</div>
								<div className="pb-12">
									<h3 className="font-display text-xl text-ink mb-2">
										{p.title}
									</h3>
									<p className="text-slate leading-relaxed text-[15px] max-w-lg">
										{p.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ─── BLOG ─── */}
			<section className="border-t border-mist bg-white">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
					<div className="flex flex-wrap items-end justify-between gap-6 mb-16">
						<div className="max-w-xl">
							<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
								Veille & retours d'expérience
							</span>
							<h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
								Ce que je retiens de l'actualité tech.
							</h2>
							<p className="text-slate leading-relaxed">
								IA, DevOps, web - sans reformulation de
								communiqués de presse.
							</p>
						</div>
						<Link
							to="/blog"
							className="font-mono text-xs uppercase tracking-wider text-slate hover:text-petrol transition-colors shrink-0"
						>
							Voir tous les articles →
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-mist">
						{latestPosts.map((post, i) => (
							<motion.div
								key={post.slug}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
							>
								<Link
									to={`/blog/${post.slug}`}
									className="group flex flex-col h-full border-r border-b border-mist p-8"
								>
									<div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider mb-4">
										<span className="text-petrol">
											{post.category}
										</span>
										<span className="text-slate/60">
											{formatDate(post.date)}
										</span>
									</div>
									<h3 className="font-display text-xl text-ink mb-2.5 group-hover:text-petrol transition-colors duration-200">
										{post.title}
									</h3>
									<p className="text-slate leading-relaxed text-[15px] mb-4 flex-1">
										{post.excerpt}
									</p>
									<span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink group-hover:text-petrol transition-colors duration-200">
										Lire l'article
										<Icons.ArrowUpRight className="w-3.5 h-3.5" />
									</span>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
