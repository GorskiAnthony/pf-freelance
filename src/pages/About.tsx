import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons, IconsSkills } from "../helpers/Icon";

const experience = [
	{
		period: "2015 - Aujourd'hui",
		location: "Marseille",
		role: "Développeur Full-Stack",
		org: "Indépendant",
		items: [
			"Conception et livraison de CoproSync, un SaaS multi-tenant pour syndics de copropriété (Angular 17 / Spring Boot 3 / Java 21), de l'architecture à la mise en production.",
			"Audit de sécurité complet : blacklisting & rotation des JWT, protections IDOR sur l'isolation des données multi-tenant, rate limiting (Bucket4j), journalisation d'audit complète, validation MIME des fichiers uploadés.",
			"Mission d'audit et de conseil IT (MS Consulting) - évaluation technique et recommandations.",
			"Gestion complète du cycle de vie infra : VPS, Docker/Traefik, CI/CD GitHub Actions, durcissement SSH, supervision.",
		],
	},
	{
		period: "2025 - 2026",
		location: "Remote",
		role: "Technical Lead",
		org: "Izypeo",
		items: [
			"Seul lead technique sur une application SaaS en production (stack MAMP - MySQL, Apache, PHP), responsable des décisions techniques de bout en bout.",
			"Mise en place d'un processus Agile avec Jira : planification de sprints, gestion du backlog, coordination avec les parties prenantes.",
		],
	},
	{
		period: "2025 - 2026",
		location: "Remote",
		role: "Développeur Full-Stack",
		org: "Yabara",
		items: [
			"Développement des fonctionnalités cœur d'une plateforme SaaS de recherche d'emploi pour le marché africain (React TS / Node.js / MySQL).",
			"Mise en place d'un registre de conteneurs GHCR et de CI/CD GitHub Actions sur plusieurs environnements (dev/staging/prod).",
		],
	},
	{
		period: "2022 - 2025",
		location: "Remote",
		role: "Formateur JS / TS",
		org: "Wild Code School",
		items: [
			"Animation de bootcamps fullstack intensifs de 5 mois (HTML, CSS, JS, React, Node, Express, MySQL) pour des promotions en reconversion.",
			"Conception de projets pédagogiques pratiques : API REST, authentification par cookie avec Argon2, plateforme d'exercices façon CodinGame.",
			"Accompagnement individuel des apprenants jusqu'au placement en emploi, incluant relecture de CV/portfolio et préparation aux entretiens techniques.",
		],
	},
];

const projects = [
	{
		name: "CoproSync",
		description: "SaaS multi-tenant pour la gestion de copropriétés.",
		stack: "Angular 17 · Spring Boot 3 · Java 21 · Docker",
		url: "https://coprosync.app/",
	},
	{
		name: "Yabara",
		description:
			"SaaS de recherche d'emploi pour l'Afrique - mission client.",
		stack: "React TS · Node.js · MySQL",
		url: "https://yabara.co/",
	},
];

const trainingProjects = [
	{
		name: "Device34",
		stack: "Angular 20 · Spring Boot 3.2 · PostgreSQL · Docker",
		url: "https://github.com/anthony-openclassroom/projet-6-device34",
	},
	{
		name: "Your Car Your Way",
		stack: "Angular SSR · Spring Boot · WebSocket/STOMP",
		url: "https://github.com/anthony-openclassroom/p10-yourcaryourway",
	},
	{
		name: "LiVrai",
		stack: "Audit technique · Architecture logicielle",
		url: "https://github.com/anthony-openclassroom/projet-9-livrai",
	},
	{
		name: "Catasterre",
		stack: "Audit technique · Accessibilité RGAA · Docker/CI-CD",
		url: "https://github.com/anthony-openclassroom/projet_8_catasterre",
	},
	{
		name: "MicroCRM",
		stack: "Angular · CI/CD",
		url: "https://github.com/anthony-openclassroom/projet-7_microcrm",
	},
	{
		name: "ChaTop",
		stack: "Angular · Spring Boot · JWT",
		url: "https://github.com/anthony-openclassroom/projet_3_chatop",
	},
	{
		name: "Yoga App",
		stack: "Angular 19 · Spring Boot 3 · MySQL",
		url: "https://github.com/anthony-openclassroom/projet4_yoga",
	},
	{
		name: "Olympic Games Dashboard",
		stack: "Angular",
		url: "https://github.com/anthony-openclassroom/projet_2_telesport",
	},
	{
		name: "ELK Stack Demo",
		stack: "Angular · Spring Boot · ELK",
		url: "https://github.com/anthony-openclassroom/learn-elk",
	},
];

const education = [
	{
		school: "OpenClassrooms",
		title: "Lead Developer Java Angular",
		date: "Juillet 2026",
	},
	{
		school: "O'clock",
		title: "Concepteur Développeur d'Applications",
		date: "2019",
	},
];

const skillGroups = [
	{
		label: "Frontend",
		items: [
			{ name: "React", icon: IconsSkills.React },
			{ name: "Angular", icon: IconsSkills.Angular },
			{ name: "TypeScript", icon: IconsSkills.Typescript },
			{ name: "JavaScript", icon: IconsSkills.Javascript },
			{ name: "Tailwind", icon: IconsSkills.Tailwind },
		],
	},
	{
		label: "Backend",
		items: [
			{ name: "Node.js", icon: IconsSkills.Node },
			{ name: "Express", icon: IconsSkills.Express },
			{ name: "PHP", icon: IconsSkills.Php },
			{ name: "Java", icon: IconsSkills.Java },
			{ name: "Spring Boot", icon: IconsSkills.SpringBoot },
		],
	},
	{
		label: "Données",
		items: [
			{ name: "MySQL", icon: IconsSkills.MySQL },
			{ name: "MongoDB", icon: IconsSkills.MongoDB },
			{ name: "Supabase", icon: IconsSkills.Supabase },
		],
	},
	{
		label: "DevOps & Méthodes",
		items: [
			{ name: "Docker", icon: IconsSkills.Docker },
			{ name: "GitHub Actions", icon: IconsSkills.GithubActions },
			{ name: "VPS", icon: null },
			{ name: "Traefik", icon: null },
			{ name: "ELK", icon: null },
			{ name: "Agile / Scrum", icon: null },
		],
	},
];

const tools = [
	{ name: "Figma", description: "Design UI, prototypage" },
	{ name: "VS Code", description: "Éditeur de code" },
	{ name: "iTerm2", description: "Terminal" },
	{ name: "DBeaver", description: "Client base de données" },
	{ name: "Postman", description: "Développement d'API" },
	{ name: "Jira", description: "Gestion de projet" },
	{ name: "ServerCat", description: "Supervision serveurs" },
	{ name: "Raycast", description: "Productivité" },
	{ name: "Notion", description: "Gestion de projet" },
];

const socials = [
	{
		icon: Icons.Github,
		label: "GitHub",
		handle: "@GorskiAnthony",
		url: "https://github.com/GorskiAnthony",
	},
	{
		icon: Icons.Linkedin,
		label: "LinkedIn",
		handle: "@anthony-gorski",
		url: "https://www.linkedin.com/in/anthony-gorski/",
	},
	{
		icon: Icons.Twitter,
		label: "Twitter",
		handle: "@Gorski_anthony",
		url: "https://twitter.com/Gorski_anthony",
	},
	{
		icon: Icons.Instagram,
		label: "Instagram",
		handle: "@antho.developpeur",
		url: "https://instagram.com/antho.developpeur",
	},
];

export default function About() {
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

				<div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
					{/* Left */}
					<div>
						<motion.span
							className="block font-mono text-xs uppercase tracking-wider text-petrol-light mb-4"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
						>
							À propos
						</motion.span>
						<motion.h1
							className="font-display text-4xl sm:text-5xl text-paper mb-4 leading-[1.1]"
							style={{ textWrap: "balance" }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
						>
							Anthony Gorski
						</motion.h1>
						<motion.p
							className="text-petrol-light font-mono text-sm uppercase tracking-wider mb-8"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 }}
						>
							Développeur Full-Stack & Formateur Technique
						</motion.p>

						<motion.blockquote
							className="border-l-2 border-petrol pl-5 mb-8"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.25 }}
						>
							<p className="font-display text-xl text-paper/90 italic leading-snug">
								« Code is like humor. When you have to explain
								it, it's bad. »
							</p>
							<cite className="block mt-2 font-mono text-xs text-paper/50 not-italic">
								- Cory House
							</cite>
						</motion.blockquote>

						<motion.p
							className="text-paper/60 leading-relaxed max-w-lg mb-10"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.35 }}
						>
							Développeur full-stack indépendant depuis 2015, j'ai
							conçu et déployé des SaaS multi-tenant de bout en
							bout, mené des audits de sécurité, et formé des
							dizaines de développeurs en reconversion. J'aime
							autant écrire du code propre que l'expliquer
							clairement - les deux font partie du même métier.
						</motion.p>

						<motion.div
							className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-lg"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.45 }}
						>
							<a
								href="mailto:anthony.developpeurweb@gmail.com"
								className="flex items-center gap-2.5 text-sm text-paper/75 hover:text-paper transition-colors"
							>
								<Icons.Mail className="w-4 h-4 text-petrol-light shrink-0" />
								anthony.developpeurweb@gmail.com
							</a>
							<a
								href="tel:+33783395103"
								className="flex items-center gap-2.5 text-sm text-paper/75 hover:text-paper transition-colors"
							>
								<Icons.Phone className="w-4 h-4 text-petrol-light shrink-0" />
								07 83 39 51 03
							</a>
							<span className="flex items-center gap-2.5 text-sm text-paper/75">
								<Icons.MapPin className="w-4 h-4 text-petrol-light shrink-0" />
								Marseille, France
							</span>
							<a
								href="https://www.agorski.dev"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2.5 text-sm text-paper/75 hover:text-paper transition-colors"
							>
								<Icons.ExternalLink className="w-4 h-4 text-petrol-light shrink-0" />
								www.agorski.dev
							</a>
						</motion.div>
					</div>

					{/* Right - photo + socials + languages */}
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
						</div>

						<div className="border border-t-0 border-paper/15 divide-y divide-paper/10">
							{socials.map((s) => (
								<a
									key={s.label}
									href={s.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-between px-5 py-3 text-sm text-paper/70 hover:text-paper hover:bg-paper/5 transition-colors"
								>
									<span className="flex items-center gap-2.5">
										<s.icon className="w-4 h-4 text-petrol-light" />
										{s.label}
									</span>
									<span className="font-mono text-xs text-paper/40">
										{s.handle}
									</span>
								</a>
							))}
						</div>

						<div className="grid grid-cols-2 border border-t-0 border-paper/15 font-mono text-xs">
							<div className="px-5 py-3 border-r border-paper/15">
								<div className="text-paper/70">Français</div>
								<div className="text-paper/40">Natif</div>
							</div>
							<div className="px-5 py-3">
								<div className="text-paper/70">Anglais</div>
								<div className="text-paper/40">
									Professionnel
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Experience */}
			<section className="border-t border-mist">
				<div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
					<div className="max-w-xl mb-14">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Parcours
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink">
							Expérience
						</h2>
					</div>

					<div className="border-t border-mist">
						{experience.map((xp, i) => (
							<motion.div
								key={xp.org + xp.period}
								className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-10 border-b border-mist"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.06, duration: 0.4 }}
							>
								<div className="font-mono text-xs uppercase tracking-wider text-slate">
									<div className="flex items-center gap-2 text-petrol mb-1.5">
										<Icons.Briefcase className="w-3.5 h-3.5" />
										{xp.period}
									</div>
									<div>{xp.location}</div>
								</div>
								<div>
									<h3 className="font-display text-xl text-ink">
										{xp.role}
									</h3>
									<p className="font-mono text-xs uppercase tracking-wider text-slate mb-4">
										{xp.org}
									</p>
									<ul className="space-y-2.5">
										{xp.items.map((item) => (
											<li
												key={item}
												className="flex gap-3 text-slate text-[15px] leading-relaxed"
											>
												<span className="text-petrol shrink-0">
													-
												</span>
												{item}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Projects */}
			<section className="border-t border-mist bg-white">
				<div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
					<div className="max-w-xl mb-14">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Réalisations
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink">
							Projets récents
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-mist">
						{projects.map((p, i) => (
							<motion.a
								key={p.name}
								href={p.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group border-r border-b border-mist p-8"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.4 }}
							>
								<div className="flex items-start justify-between mb-3">
									<h3 className="font-display text-2xl text-ink group-hover:text-petrol transition-colors duration-200">
										{p.name}
									</h3>
									<Icons.ArrowUpRight className="w-4 h-4 text-slate group-hover:text-petrol transition-colors duration-200 shrink-0 mt-1.5" />
								</div>
								<p className="text-slate leading-relaxed mb-4">
									{p.description}
								</p>
								<p className="font-mono text-xs uppercase tracking-wider text-petrol">
									{p.stack}
								</p>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* Education */}
			<section className="border-t border-mist">
				<div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
					<div className="max-w-xl mb-14">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Formation
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink">
							Diplômes & certifications
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-mist">
						{education.map((e, i) => (
							<motion.div
								key={e.school}
								className="border-r border-b border-mist p-8"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.4 }}
							>
								<Icons.GraduationCap className="w-5 h-5 text-petrol mb-4" />
								<h3 className="font-display text-xl text-ink mb-1.5">
									{e.title}
								</h3>
								<p className="text-slate text-sm mb-3">
									{e.school}
								</p>
								<p className="font-mono text-xs uppercase tracking-wider text-slate/70">
									{e.date}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Training projects */}
			<section className="border-t border-mist">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
					<div className="flex flex-wrap items-end justify-between gap-4 mb-14">
						<div className="max-w-xl">
							<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
								Certification OpenClassrooms
							</span>
							<h2 className="font-display text-2xl sm:text-3xl text-ink">
								Projets de formation
							</h2>
						</div>
						<a
							href="https://github.com/anthony-openclassroom"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-sm text-slate hover:text-petrol transition-colors"
						>
							<Icons.Github className="w-4 h-4" />
							Voir tous les repos
						</a>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-mist">
						{trainingProjects.map((p, i) => (
							<motion.a
								key={p.name}
								href={p.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group border-r border-b border-mist p-6"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.04, duration: 0.4 }}
							>
								<div className="flex items-start justify-between gap-2 mb-1.5">
									<h3 className="font-display text-lg text-ink group-hover:text-petrol transition-colors duration-200">
										{p.name}
									</h3>
									<Icons.ArrowUpRight className="w-3.5 h-3.5 text-slate/50 group-hover:text-petrol transition-colors duration-200 shrink-0 mt-1" />
								</div>
								<p className="font-mono text-xs uppercase tracking-wider text-slate/60">
									{p.stack}
								</p>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className="border-t border-mist bg-white">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
					<div className="max-w-xl mb-14">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Stack technique
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink">
							Compétences
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
						{skillGroups.map((group, gi) => (
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
									{group.items.map((skill) => (
										<li
											key={skill.name}
											className="flex items-center gap-2.5 text-ink text-sm font-medium"
										>
											{skill.icon ? (
												<skill.icon className="w-4 h-4 text-slate shrink-0" />
											) : (
												<span className="w-4 h-4 shrink-0" />
											)}
											{skill.name}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Tools */}
			<section className="border-t border-mist">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
					<div className="max-w-xl mb-14">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							Environnement de travail
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink">
							Outils
						</h2>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-mist">
						{tools.map((tool, i) => (
							<motion.div
								key={tool.name}
								className="border-r border-b border-mist p-6"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.04, duration: 0.4 }}
							>
								<h3 className="font-display text-lg text-ink mb-1">
									{tool.name}
								</h3>
								<p className="text-slate text-sm">
									{tool.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="border-t border-mist bg-ink">
				<div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
					<h2 className="font-display text-3xl sm:text-4xl text-paper mb-4">
						Envie de travailler ensemble ?
					</h2>
					<p className="text-paper/60 mb-8 max-w-md mx-auto">
						Discutons de votre projet - sans engagement, réponse
						sous 24h.
					</p>
					<Link
						to="/contact"
						className="inline-block bg-petrol text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
					>
						Démarrons votre projet →
					</Link>
				</div>
			</section>
		</div>
	);
}
