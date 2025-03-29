import { motion } from "framer-motion";
import { Icons } from "../helpers/Icon";
import { IconsSkills } from "../helpers/Icon";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Home() {
	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const bgFromMap: Record<string, string> = {
		orange: "from-orange-50",
		blue: "from-blue-50",
		yellow: "from-yellow-50",
		cyan: "from-cyan-50",
		green: "from-green-50",
		gray: "from-gray-100",
		teal: "from-teal-50",
		black: "from-zinc-100",
	};
	const technologies = [
		{
			name: "HTML",
			icon: (
				<IconsSkills.Html className="w-12 h-12 mb-4 text-orange-600" />
			),
			description: "Structure sémantique et accessible",
			experience: "10+ ans d'expérience",
			color: "orange",
		},
		{
			name: "CSS",
			icon: <IconsSkills.Css className="w-12 h-12 mb-4 text-blue-500" />,
			description: "Styles modernes et responsive design",
			experience: "10+ ans d'expérience",
			color: "blue",
		},
		{
			name: "JavaScript",
			icon: (
				<IconsSkills.Javascript className="w-12 h-12 mb-4 text-yellow-500" />
			),
			description: "Développement frontend dynamique",
			experience: "8+ ans d'expérience",
			color: "yellow",
		},
		{
			name: "TypeScript",
			icon: (
				<IconsSkills.Typescript className="w-12 h-12 mb-4 text-blue-600" />
			),
			description: "Typage statique pour JavaScript moderne",
			experience: "5+ ans d'expérience",
			color: "blue",
		},
		{
			name: "React",
			icon: (
				<IconsSkills.React className="w-12 h-12 mb-4 text-cyan-500" />
			),
			description: "Applications web interactives",
			experience: "8+ ans d'expérience",
			color: "cyan",
		},
		{
			name: "NodeJS",
			icon: (
				<IconsSkills.Node className="w-12 h-12 mb-4 text-green-600" />
			),
			description: "Backend JavaScript performant",
			experience: "8+ ans d'expérience",
			color: "green",
		},
		{
			name: "ExpressJS",
			icon: (
				<IconsSkills.Express className="w-12 h-12 mb-4 text-gray-600" />
			),
			description: "APIs REST et serveurs web",
			experience: "8+ ans d'expérience",
			color: "gray",
		},
		{
			name: "Tailwind",
			icon: (
				<IconsSkills.Tailwind className="w-12 h-12 mb-4 text-teal-500" />
			),
			description: "Styles utilitaires modernes",
			experience: "4+ ans d'expérience",
			color: "teal",
		},
		{
			name: "Docker",
			icon: (
				<IconsSkills.Docker className="w-12 h-12 mb-4 text-blue-700" />
			),
			description: "Conteneurisation et déploiement",
			experience: "2+ ans d'expérience",
			color: "blue",
		},
		{
			name: "Symfony",
			icon: <IconsSkills.Symfony className="w-12 h-12 mb-4 text-black" />,
			description: "Famework PHP robuste et flexible",
			experience: "6+ ans d'expérience",
			color: "black",
		},
	];

	return (
		<div className="pt-16">
			{/* Hero Section with Profile */}
			<motion.section
				className="py-32 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
					<div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
						<motion.h1
							className="text-5xl font-bold text-white mb-6"
							{...fadeIn}
						>
							<p>Bonjour 👋</p>
							Je suis{" "}
							<span
								className="text-transparent bg-clip-text 
             bg-gradient-to-r 
             from-yellow-400 via-pink-500 via-cyan-500 to-green-500 
             bg-[length:200%_200%] 
             animate-gradient-x"
							>
								Anthony Gorski
							</span>{" "}
							<br /> Sofware developpeur
						</motion.h1>
						<motion.p
							className="text-xl text-blue-100"
							{...fadeIn}
							transition={{ delay: 0.2 }}
						>
							Je développe avec vous des solutions web modernes et
							performantes.
						</motion.p>
					</div>
					<motion.div
						className="md:w-1/2 flex justify-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3 }}
					>
						<div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
							<img
								src="assets/PixArt.png"
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</motion.section>

			{/* Services Section */}
			<motion.section
				className="py-20 bg-gradient-to-b from-blue-50 to-purple-50"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
						Mes Services
					</h2>
					<p className="text-center text-zinc-600 mb-12">
						Des solutions adaptées à vos besoins
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div
							className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Icons.Search className="w-12 h-12 mb-4 text-blue-600" />
							<h3 className="text-xl font-semibold mb-4">
								SEO & Visibilité
							</h3>
							<p className="text-zinc-600">
								Optimisation pour les moteurs de recherche et
								amélioration de la visibilité en ligne
							</p>
							<img
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt="SEO"
								className="mt-4 rounded-lg w-full h-48 object-cover"
							/>
						</motion.div>

						<motion.div
							className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Icons.Rocket className="w-12 h-12 mb-4 text-purple-600" />
							<h3 className="text-xl font-semibold mb-4">
								Développement & Déploiement
							</h3>
							<p className="text-zinc-600">
								Création et mise en ligne d'applications web
								performantes
							</p>
							<img
								src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt="Development"
								className="mt-4 rounded-lg w-full h-48 object-cover"
							/>
						</motion.div>

						<motion.div
							className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Icons.WrenchIcon className="w-12 h-12 mb-4 text-green-600" />
							<h3 className="text-xl font-semibold mb-4">
								Maintenance & Support
							</h3>
							<p className="text-zinc-600">
								Support technique et maintenance continue de vos
								applications
							</p>
							<img
								src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt="Maintenance"
								className="mt-4 rounded-lg w-full h-48 object-cover"
							/>
						</motion.div>

						<motion.div
							className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Icons.Brain className="w-12 h-12 mb-4 text-red-600" />
							<h3 className="text-xl font-semibold mb-4">
								Conseil & Accompagnement
							</h3>
							<p className="text-zinc-600">
								Accompagnement stratégique et conseil en
								solutions digitales
							</p>
							<img
								src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt="Consulting"
								className="mt-4 rounded-lg w-full h-48 object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Skills Section */}
			<motion.section
				className="py-20 bg-gradient-to-b from-purple-50 to-blue-50"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
						Technologies
					</h2>
					<p className="text-center text-zinc-600 mb-12">
						Mon expertise technique au service de vos projets
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{technologies.map((tech, index) => {
							const fromClass =
								bgFromMap[tech.color] ?? "from-zinc-100"; // fallback safe

							return (
								<motion.div
									key={tech.name}
									className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -5, scale: 1.02 }}
								>
									<div
										className={clsx(
											"p-6 bg-gradient-to-br to-white",
											fromClass
										)}
									>
										<div className="flex items-center justify-between mb-4">
											{tech.icon}
											<span className="text-sm font-medium text-zinc-500">
												{tech.experience}
											</span>
										</div>
										<h3 className="text-xl font-bold mb-2">
											{tech.name}
										</h3>
										<p className="text-zinc-600">
											{tech.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</motion.section>

			{/* Teaching Section */}
			<motion.section
				className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-purple-50"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1 }}
								className="bg-white p-8 rounded-xl shadow-lg"
							>
								<Icons.GraduationCap className="w-16 h-16 text-blue-600 mb-6" />
								<h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
									Cours Particuliers
								</h2>
								<p className="text-lg text-zinc-600 mb-8">
									Formez-vous aux technologies web modernes
									avec des cours personnalisés adaptés à votre
									niveau et vos objectifs.
								</p>

								<div className="mb-8 space-y-6">
									<div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
										<h3 className="text-xl font-semibold mb-2">
											Cours individuel
										</h3>
										<p className="text-3xl font-bold text-blue-600 mb-2">
											40€{" "}
											<span className="text-lg text-zinc-600">
												/heure
											</span>
										</p>
										<p className="text-zinc-600">
											Formation personnalisée et adaptée à
											votre rythme
										</p>
									</div>

									<div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-blue-200 relative">
										<div className="absolute -top-3 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
											Meilleure offre
										</div>
										<h3 className="text-xl font-semibold mb-2">
											Pack 5 cours
										</h3>
										<p className="text-3xl font-bold text-purple-600 mb-2">
											150€{" "}
											<span className="text-lg text-zinc-600">
												/5 heures
											</span>
										</p>
										<p className="text-zinc-600">
											Économisez 50€ sur votre formation
										</p>
									</div>
								</div>

								<ul className="space-y-4 mb-8">
									<li className="flex items-center text-zinc-700">
										<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
										Formation individuelle ou en petit
										groupe
									</li>
									<li className="flex items-center text-zinc-700">
										<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
										Programmes sur mesure
									</li>
									<li className="flex items-center text-zinc-700">
										<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
										Exercices pratiques et projets concrets
									</li>
									<li className="flex items-center text-zinc-700">
										<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
										Suivi personnalisé
									</li>
								</ul>
								<Link
									to="/contact"
									className="w-full inline-block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
								>
									Réserver un cours
								</Link>
							</motion.div>
						</div>
						<div className="md:w-1/2">
							<motion.img
								src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								alt="Teaching"
								className="rounded-xl shadow-xl"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.2 }}
							/>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
