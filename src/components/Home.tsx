import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons, IconsSkills } from "../helpers/Icon";
import { payer } from "../utils/payer";

const getExp = (since: number) => new Date().getFullYear() - since;

const techGroups = [
	{
		label: "Frontend",
		items: [
			{ name: "JavaScript", icon: IconsSkills.Javascript, since: 2016 },
			{ name: "TypeScript", icon: IconsSkills.Typescript, since: 2020 },
			{ name: "React", icon: IconsSkills.React, since: 2018 },
			{ name: "Angular", icon: IconsSkills.Angular, since: 2021 },
			{ name: "Tailwind", icon: IconsSkills.Tailwind, since: 2020 },
		],
	},
	{
		label: "Backend",
		items: [
			{ name: "Node.js", icon: IconsSkills.Node, since: 2018 },
			{ name: "Express", icon: IconsSkills.Express, since: 2018 },
			{ name: "Java", icon: IconsSkills.Java, since: 2021 },
			{ name: "Spring Boot", icon: IconsSkills.SpringBoot, since: 2021 },
			{ name: "Symfony", icon: IconsSkills.Symfony, since: 2020 },
		],
	},
	{
		label: "Données",
		items: [
			{ name: "PostgreSQL", icon: IconsSkills.PostgreSQL, since: 2021 },
			{ name: "MongoDB", icon: IconsSkills.MongoDB, since: 2020 },
			{ name: "Prisma", icon: IconsSkills.Prisma, since: 2021 },
		],
	},
	{
		label: "Infra & Déploiement",
		items: [
			{ name: "Docker", icon: IconsSkills.Docker, since: 2020 },
			{
				name: "GitHub Actions",
				icon: IconsSkills.GithubActions,
				since: 2021,
			},
			{ name: "Vercel", icon: IconsSkills.Vercel, since: 2021 },
		],
	},
];

const services = [
	{
		icon: Icons.Rocket,
		title: "Développement & Déploiement",
		description:
			"De l'idée à la mise en production. Je conçois des applications robustes, rapides et prêtes à scaler dès le premier jour.",
	},
	{
		icon: Icons.Search,
		title: "SEO & Visibilité",
		description:
			"Vos clients vous cherchent sur Google - soyez là où ils regardent. J'optimise votre site pour attirer un trafic qualifié.",
	},
	{
		icon: Icons.WrenchIcon,
		title: "Maintenance & Support",
		description:
			"Votre site tourne, ça ne suffit pas. Je veille, je corrige, je mets à jour - pour que vous n'ayez jamais à vous en préoccuper.",
	},
	{
		icon: Icons.Brain,
		title: "Conseil & Accompagnement",
		description:
			"Pas sûr de la bonne techno ? Besoin d'un œil externe ? Je vous aide à prendre les bonnes décisions, sans jargon inutile.",
	},
];

export default function Home() {
	const totalTech = techGroups.reduce((n, g) => n + g.items.length, 0);
	const yearsExp = getExp(2016);

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
								src="assets/PixArt.png"
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
									{totalTech}
								</div>
								<div className="text-[11px] text-paper/50 uppercase tracking-wider mt-1">
									Technos
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
								<p className="text-slate leading-relaxed text-[15px]">
									{s.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ─── TECHNOLOGIES ─── */}
			<section className="border-t border-mist bg-white">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
					<div className="max-w-xl mb-16">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Stack technique
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
							Des outils maîtrisés en conditions réelles.
						</h2>
						<p className="text-slate leading-relaxed">
							Pas sur des tutoriels YouTube - en production, sur
							de vrais projets clients.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
						{techGroups.map((group, gi) => (
							<motion.div
								key={group.label}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: gi * 0.06, duration: 0.5 }}
							>
								<h3 className="font-mono text-xs uppercase tracking-wider text-slate border-b border-mist pb-3 mb-4">
									{group.label}
								</h3>
								<ul className="space-y-3.5">
									{group.items.map((tech) => (
										<li
											key={tech.name}
											className="flex items-center justify-between gap-3"
										>
											<span className="flex items-center gap-2.5 text-ink text-sm font-medium">
												<tech.icon className="w-4 h-4 text-slate shrink-0" />
												{tech.name}
											</span>
											<span className="font-mono text-xs text-slate/70 tabular-nums shrink-0">
												{getExp(tech.since)}+ ans
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ─── COURS PARTICULIERS ─── */}
			<section className="border-t border-mist">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
					<div className="max-w-xl mb-16">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Formation
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
							Cours particuliers, pour passer un cap concret.
						</h2>
						<p className="text-slate leading-relaxed max-w-2xl">
							Que vous débutiez ou cherchiez à progresser, on
							travaille sur de vrais projets - pas des slides
							PowerPoint.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 border border-mist">
						{/* Individuel */}
						<div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-mist">
							<span className="font-mono text-xs uppercase tracking-wider text-slate">
								À l'heure
							</span>
							<h3 className="font-display text-2xl text-ink mt-2 mb-4">
								Cours individuel
							</h3>
							<div className="flex items-baseline gap-1.5 mb-5">
								<span className="font-display text-4xl text-ink tabular-nums">
									40€
								</span>
								<span className="text-slate text-sm">
									/ heure
								</span>
							</div>
							<p className="text-slate text-sm leading-relaxed mb-8">
								Concentré sur ce qui vous bloque vraiment, à
								votre rythme.
							</p>
							<button
								onClick={() => payer("cours_1h")}
								className="w-full bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
							>
								Réserver ma première heure →
							</button>
						</div>

						{/* Pack 5h */}
						<div className="relative p-8 md:p-10 bg-petrol/5">
							<span className="absolute top-0 right-0 font-mono text-[11px] uppercase tracking-wider bg-petrol text-paper px-3 py-1.5">
								Meilleure offre
							</span>
							<span className="font-mono text-xs uppercase tracking-wider text-petrol">
								Pack 5 heures
							</span>
							<h3 className="font-display text-2xl text-ink mt-2 mb-4">
								Pack 5 cours
							</h3>
							<div className="flex items-baseline gap-1.5 mb-5">
								<span className="font-display text-4xl text-ink tabular-nums">
									150€
								</span>
								<span className="text-slate text-sm">
									/ 5 heures
								</span>
							</div>
							<p className="text-slate text-sm leading-relaxed mb-8">
								5h pour aller de l'idée au projet concret - et
								50€ économisés.
							</p>
							<button
								onClick={() => payer("cours_5h")}
								className="w-full bg-petrol text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
							>
								Réserver le pack 5h →
							</button>
						</div>
					</div>

					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-10">
						{[
							"Sessions 100% dédiées à vos besoins",
							"Programme construit autour de votre projet réel",
							"Vous codez dès la première heure - pas de théorie inutile",
							"Feedback direct et suivi entre les sessions",
						].map((item) => (
							<li
								key={item}
								className="flex items-start gap-2.5 text-slate text-sm"
							>
								<Icons.BadgeCheck className="w-4 h-4 text-petrol shrink-0 mt-0.5" />
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}
