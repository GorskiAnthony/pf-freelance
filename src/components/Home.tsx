import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons, IconsSkills } from "../helpers/Icon";
import { payer } from "../utils/payer";
import clsx from "clsx";

const WaveDown = ({ fill }: { fill: string }) => (
	<div className="leading-none -mb-1">
		<svg
			viewBox="0 0 1440 72"
			className="w-full block"
			preserveAspectRatio="none"
			style={{ fill }}
		>
			<path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
		</svg>
	</div>
);

const WaveUp = ({ fill }: { fill: string }) => (
	<div className="leading-none -mt-1">
		<svg
			viewBox="0 0 1440 72"
			className="w-full block"
			preserveAspectRatio="none"
			style={{ fill }}
		>
			<path d="M0,36 C360,0 1080,72 1440,36 L1440,0 L0,0 Z" />
		</svg>
	</div>
);

const getExp = (since: number) => `${new Date().getFullYear() - since}+ ans`;

export default function Home() {
	const technologies = [
		{
			name: "JavaScript",
			icon: (
				<IconsSkills.Javascript className="w-11 h-11 text-yellow-500" />
			),
			description: "Développement frontend dynamique",
			since: 2016,
			color: "yellow",
		},
		{
			name: "TypeScript",
			icon: (
				<IconsSkills.Typescript className="w-11 h-11 text-blue-600" />
			),
			description: "Typage statique pour JavaScript moderne",
			since: 2020,
			color: "blue",
		},
		{
			name: "React",
			icon: <IconsSkills.React className="w-11 h-11 text-cyan-500" />,
			description: "Applications web interactives",
			since: 2018,
			color: "cyan",
		},
		{
			name: "NodeJS",
			icon: <IconsSkills.Node className="w-11 h-11 text-green-600" />,
			description: "Backend JavaScript performant",
			since: 2018,
			color: "green",
		},
		{
			name: "ExpressJS",
			icon: <IconsSkills.Express className="w-11 h-11 text-zinc-600" />,
			description: "APIs REST et serveurs web",
			since: 2018,
			color: "gray",
		},
		{
			name: "Tailwind",
			icon: <IconsSkills.Tailwind className="w-11 h-11 text-teal-500" />,
			description: "Styles utilitaires modernes",
			since: 2020,
			color: "teal",
		},
		{
			name: "Docker",
			icon: <IconsSkills.Docker className="w-11 h-11 text-blue-700" />,
			description: "Conteneurisation et déploiement",
			since: 2020,
			color: "blue",
		},
		{
			name: "Symfony",
			icon: <IconsSkills.Symfony className="w-11 h-11 text-zinc-800" />,
			description: "Framework PHP robuste et flexible",
			since: 2017,
			color: "black",
		},
		{
			name: "Java",
			icon: <IconsSkills.Java className="w-11 h-11 text-red-600" />,
			description: "Applications robustes et performantes",
			since: 2021,
			color: "red",
		},
		{
			name: "Spring Boot",
			icon: (
				<IconsSkills.SpringBoot className="w-11 h-11 text-green-600" />
			),
			description: "Framework Java pour applications backend",
			since: 2021,
			color: "green",
		},
		{
			name: "Angular",
			icon: <IconsSkills.Angular className="w-11 h-11 text-red-500" />,
			description: "Applications web structurées et scalables",
			since: 2021,
			color: "rose",
		},
		{
			name: "PostgreSQL",
			icon: <IconsSkills.PostgreSQL className="w-11 h-11 text-sky-700" />,
			description: "Base de données relationnelle robuste",
			since: 2021,
			color: "sky",
		},
		{
			name: "MongoDB",
			icon: <IconsSkills.MongoDB className="w-11 h-11 text-green-500" />,
			description: "Base de données NoSQL flexible",
			since: 2020,
			color: "green",
		},
		{
			name: "Prisma",
			icon: <IconsSkills.Prisma className="w-11 h-11 text-indigo-700" />,
			description: "ORM moderne pour Node.js et TypeScript",
			since: 2021,
			color: "indigo",
		},
		{
			name: "GitHub Actions",
			icon: (
				<IconsSkills.GithubActions className="w-11 h-11 text-zinc-800" />
			),
			description: "CI/CD automatisé et pipelines DevOps",
			since: 2021,
			color: "black",
		},
		{
			name: "Vercel",
			icon: <IconsSkills.Vercel className="w-11 h-11 text-zinc-900" />,
			description: "Déploiement et hosting moderne",
			since: 2021,
			color: "black",
		},
	];

	const badgeColor: Record<string, string> = {
		orange: "bg-orange-50 text-orange-700 border-orange-200",
		blue: "bg-blue-50 text-blue-700 border-blue-200",
		yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
		cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
		green: "bg-green-50 text-green-700 border-green-200",
		gray: "bg-zinc-50 text-zinc-600 border-zinc-200",
		teal: "bg-teal-50 text-teal-700 border-teal-200",
		black: "bg-zinc-100 text-zinc-700 border-zinc-300",
		red: "bg-red-50 text-red-700 border-red-200",
		rose: "bg-rose-50 text-rose-600 border-rose-200",
		sky: "bg-sky-50 text-sky-700 border-sky-200",
		indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
	};

	const services = [
		{
			icon: <Icons.Search className="w-5 h-5 text-blue-600" />,
			iconBg: "bg-blue-50",
			title: "SEO & Visibilité",
			description:
				"Vos clients vous cherchent sur Google — soyez là où ils regardent. J'optimise votre site pour attirer un trafic qualifié.",
			img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			imgAlt: "SEO",
			hoverRing: "hover:ring-blue-200",
		},
		{
			icon: <Icons.Rocket className="w-5 h-5 text-purple-600" />,
			iconBg: "bg-purple-50",
			title: "Développement & Déploiement",
			description:
				"De l'idée à la mise en production. Je conçois des applications robustes, rapides et prêtes à scaler dès le premier jour.",
			img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			imgAlt: "Développement",
			hoverRing: "hover:ring-purple-200",
		},
		{
			icon: <Icons.WrenchIcon className="w-5 h-5 text-emerald-600" />,
			iconBg: "bg-emerald-50",
			title: "Maintenance & Support",
			description:
				"Votre site tourne, ça ne suffit pas. Je veille, je corrige, je mets à jour — pour que vous n'ayez jamais à vous en préoccuper.",
			img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			imgAlt: "Maintenance",
			hoverRing: "hover:ring-emerald-200",
		},
		{
			icon: <Icons.Brain className="w-5 h-5 text-rose-600" />,
			iconBg: "bg-rose-50",
			title: "Conseil & Accompagnement",
			description:
				"Pas sûr de la bonne techno ? Besoin d'un œil externe ? Je vous aide à prendre les bonnes décisions, sans jargon inutile.",
			img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			imgAlt: "Consulting",
			hoverRing: "hover:ring-rose-200",
		},
	];

	return (
		<div className="pt-16">
			{/* ─── HERO ─── */}
			<motion.section
				className="relative min-h-[92vh] flex items-center py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				{/* Aurora blobs */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-3xl animate-blob" />
					<div className="absolute top-1/2 right-1/5 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
					<div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
					{/* Dot grid */}
					<div
						className="absolute inset-0 opacity-[0.04]"
						style={{
							backgroundImage:
								"radial-gradient(circle, #ffffff 1px, transparent 1px)",
							backgroundSize: "32px 32px",
						}}
					/>
				</div>

				<div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
					{/* Left */}
					<div className="md:w-1/2 text-center md:text-left">
						<motion.div
							className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-blue-200 text-sm px-4 py-2 rounded-full mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1, duration: 0.6 }}
						>
							<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />{" "}
							Disponible pour vos projets
						</motion.div>

						<motion.h1
							className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.7 }}
						>
							<span className="block text-blue-300/60 text-xl font-medium tracking-widest uppercase mb-3">
								Bonjour 👋
							</span>
							Je suis{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-[length:200%_200%] animate-gradient-x">
								Anthony Gorski
							</span>
							<br />
							<span className="text-white/90">
								Lead Développeur Full-Stack
							</span>
						</motion.h1>

						<motion.p
							className="text-lg text-blue-100/65 mb-10 max-w-md leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						>
							Je transforme vos idées en produits web qui attirent,
							convainquent et convertissent — livrés dans les délais,
							sans mauvaise surprise.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4 justify-center md:justify-start"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.55, duration: 0.6 }}
						>
							<Link
								to="/contact"
								className="relative group overflow-hidden bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-black/30 hover:shadow-blue-400/30 hover:-translate-y-1 transition-all duration-300"
							>
								<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-blue-100/60 to-transparent transition-transform duration-700 ease-in-out" />
								<span className="relative">Démarrons votre projet →</span>
							</Link>
							<Link
								to="/pricing"
								className="border-2 border-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
							>
								Découvrir les offres →
							</Link>
						</motion.div>
					</div>

					{/* Right — avatar */}
					<motion.div
						className="md:w-1/2 flex justify-center"
						initial={{ opacity: 0, scale: 0.75 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 0.3,
							duration: 0.8,
							type: "spring",
							stiffness: 100,
						}}
					>
						<div className="relative">
							{/* Pulse rings */}
							<div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse-ring" />
							<div className="absolute inset-0 rounded-full bg-purple-400/15 animate-pulse-ring animation-delay-2000" />
							{/* Glow */}
							<div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-50" />
							{/* Avatar */}
							<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl ring-8 ring-white/5 animate-float">
								<img
									src="assets/PixArt.png"
									alt="Profile"
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Floating badge */}
							<motion.div
								className="absolute -bottom-3 -right-4 bg-white rounded-2xl shadow-2xl px-4 py-2.5 flex items-center gap-2.5"
								initial={{ opacity: 0, scale: 0.7, y: 10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{
									delay: 0.9,
									duration: 0.5,
									type: "spring",
								}}
							>
								<span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
								<span className="text-zinc-800 font-bold text-sm">
									Disponible
								</span>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Wave to white */}
				<div className="absolute bottom-0 left-0 right-0 leading-none">
					<svg
						viewBox="0 0 1440 72"
						className="w-full block fill-white"
						preserveAspectRatio="none"
					>
						<path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
					</svg>
				</div>
			</motion.section>

			{/* ─── SERVICES ─── */}
			<section className="py-28 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="inline-block text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3">
							Ce que je fais
						</span>
						<h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
							Mes{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Services
							</span>
						</h2>
						<p className="text-zinc-500 text-lg max-w-xl mx-auto">
							Chaque ligne de code sert un objectif : faire grandir votre activité.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{services.map((s, i) => (
							<motion.div
								key={s.title}
								className={clsx(
									"group bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm",
									"hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1.5 hover:border-zinc-200 transition-all duration-300",
									"ring-2 ring-transparent",
									s.hoverRing,
									"hover:ring-2",
								)}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.5 }}
							>
								<div className="p-7">
									<div
										className={clsx(
											"inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300",
											s.iconBg,
										)}
									>
										{s.icon}
									</div>
									<h3 className="text-xl font-bold text-zinc-900 mb-2">
										{s.title}
									</h3>
									<p className="text-zinc-500 leading-relaxed">
										{s.description}
									</p>
								</div>
								<div className="overflow-hidden mx-7 mb-7 rounded-xl">
									<img
										src={s.img}
										alt={s.imgAlt}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Wave white → slate */}
			<WaveDown fill="#f8fafc" />

			{/* ─── TECHNOLOGIES ─── */}
			<section className="py-28 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="inline-block text-purple-600 font-semibold text-xs tracking-widest uppercase mb-3">
							Stack technique
						</span>
						<h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Technologies
							</span>
						</h2>
						<p className="text-zinc-500 text-lg">
							Des technologies maîtrisées en conditions réelles — pas sur des tutoriels YouTube.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
						{technologies.map((tech, index) => (
							<motion.div
								key={tech.name}
								className="group bg-white rounded-2xl p-6 border border-zinc-100 hover:border-blue-200/70 hover:shadow-lg hover:shadow-blue-500/8 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.04,
									duration: 0.4,
								}}
							>
								<div className="flex items-start justify-between mb-4">
									<div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 origin-center">
										{tech.icon}
									</div>
									<span
										className={clsx(
											"text-xs font-semibold px-2.5 py-1 rounded-full border ml-2 shrink-0",
											badgeColor[tech.color] ??
												"bg-zinc-50 text-zinc-600 border-zinc-200",
										)}
									>
										{getExp(tech.since)}
									</span>
								</div>
								<h3 className="text-lg font-bold text-zinc-900 mb-1">
									{tech.name}
								</h3>
								<p className="text-zinc-500 text-sm leading-relaxed">
									{tech.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Wave slate → white */}
			<WaveUp fill="#f8fafc" />

			{/* ─── COURS PARTICULIERS ─── */}
			<section className="py-28 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center gap-14">
						{/* Left card */}
						<motion.div
							className="md:w-1/2 w-full"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className="bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-200/60 p-8 md:p-10">
								<div className="inline-flex p-3 bg-blue-50 rounded-2xl mb-6">
									<Icons.GraduationCap className="w-8 h-8 text-blue-600" />
								</div>

								<span className="block text-blue-600 font-semibold text-xs tracking-widest uppercase mb-2">
									Formation
								</span>
								<h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">
									Cours{" "}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
										Particuliers
									</span>
								</h2>
								<p className="text-zinc-500 leading-relaxed mb-8">
									Que vous débutiez ou cherchiez à progresser,
									je vous aide à passer un cap concret — avec de
									vrais projets, pas des slides PowerPoint.
								</p>

								<div className="space-y-5 mb-8">
									{/* Cours individuel */}
									<div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-colors duration-300">
										<h3 className="text-base font-bold text-zinc-800 mb-2">
											Cours individuel
										</h3>
										<div className="flex items-baseline gap-1 mb-1">
											<span className="text-4xl font-black text-blue-600">
												40€
											</span>
											<span className="text-zinc-500 text-sm">
												/heure
											</span>
										</div>
										<p className="text-zinc-500 text-sm mb-4">
											Concentré sur ce qui vous bloque vraiment,
											à votre rythme
										</p>
										<button
											onClick={() => payer("cours_1h")}
											className="relative group overflow-hidden w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
										>
											<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
											<span className="relative z-10">
												Réserver ma première heure →
											</span>
										</button>
									</div>

									{/* Pack 5 cours */}
									<div className="relative">
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-sm -z-10" />
										<div className="relative bg-white border-2 border-blue-200 rounded-2xl p-6 hover:border-purple-300 transition-colors duration-300">
											<div className="absolute -top-3.5 right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
												⭐ Meilleure offre
											</div>
											<h3 className="text-base font-bold text-zinc-800 mb-2">
												Pack 5 cours
											</h3>
											<div className="flex items-baseline gap-1 mb-1">
												<span className="text-4xl font-black text-purple-600">
													150€
												</span>
												<span className="text-zinc-500 text-sm">
													/5 heures
												</span>
											</div>
											<p className="text-zinc-500 text-sm mb-4">
												5h pour aller de l'idée au projet concret
												— et 50€ économisés
											</p>
											<button
												onClick={() =>
													payer("cours_5h")
												}
												className="relative group overflow-hidden w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
											>
												<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
												<span className="relative z-10">
													Réserver le pack 5h →
												</span>
											</button>
										</div>
									</div>
								</div>

								<ul className="space-y-3">
									{[
										"Sessions 100% dédiées à vos besoins",
										"Programme construit autour de votre projet réel",
										"Vous codez dès la première heure — pas de théorie inutile",
										"Feedback direct et suivi entre les sessions",
									].map((item) => (
										<li
											key={item}
											className="flex items-center gap-3 text-zinc-600 text-sm"
										>
											<span className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
												<svg
													className="w-2.5 h-2.5 text-white"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={3}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						</motion.div>

						{/* Right image */}
						<motion.div
							className="md:w-1/2 w-full"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.7 }}
						>
							<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50">
								<img
									src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Teaching"
									className="w-full h-[520px] object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
