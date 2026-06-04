import { motion } from "framer-motion";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { payer } from "../utils/payer";

const frequencies: {
	value: "monthly" | "annually";
	label: string;
	priceSuffix: string;
	monthlyEquiv?: (monthly: number) => string;
}[] = [
	{ value: "monthly", label: "Mensuelle", priceSuffix: "/mois" },
	{ value: "annually", label: "Annuel", priceSuffix: "/an" },
];

const tiers = [
	{
		name: "Starter",
		id: "tier-freelancer",
		emoji: "🚀",
		target: "Freelances & indépendants",
		price: {
			monthly: { label: "€59", monthly: 59, id: "freelancer_monthly" },
			annually: { label: "€590", monthly: 49, id: "freelancer_yearly" },
		},
		description:
			"Votre vitrine professionnelle en ligne en moins d'une semaine. Simple, efficace, et qui donne envie de vous contacter.",
		highlight: "Mis en ligne en 7 jours",
		features: [
			"Site one-page professionnel et percutant",
			"Design responsive mobile & desktop",
			"Formulaire de contact intégré",
			"Référencement de base (SEO on-page)",
			"Support réactif sous 48h",
			"Hébergement inclus",
		],
		featured: false,
		cta: "Démarrer maintenant",
		badge: null,
		savings: null,
	},
	{
		name: "Startup",
		id: "tier-startup",
		emoji: "⚡",
		target: "TPE & petites entreprises",
		price: {
			monthly: { label: "€99", monthly: 99, id: "startup_monthly" },
			annually: { label: "€990", monthly: 82, id: "startup_yearly" },
		},
		description:
			"Un site qui travaille pour vous 24h/24 : visible sur Google, conçu pour convertir vos visiteurs en clients.",
		highlight: "Le plus populaire",
		features: [
			"Site multi-pages jusqu'à 5 sections",
			"Design sur mesure aux couleurs de votre marque",
			"SEO avancé pour être trouvé sur Google",
			"Performance optimisée (score Lighthouse 90+)",
			"Support prioritaire sous 24h",
			"Modifications de contenu illimitées",
		],
		featured: false,
		cta: "Lancer mon projet",
		badge: "⚡ Le plus populaire",
		savings: null,
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		emoji: "💎",
		target: "PME & grandes structures",
		price: "Sur mesure",
		description:
			"Une application web complète, pensée pour vos enjeux métier. De la conception au déploiement — on s'occupe de tout.",
		highlight: "Accompagnement complet",
		features: [
			"Application web ou site sur mesure",
			"Architecture et conseil technique inclus",
			"Design haut de gamme, unique à votre marque",
			"SEO technique avancé + suivi de performance",
			"Support dédié 24h/24, 7j/7",
			"Maintenance proactive et mises à jour incluses",
			"Tableau de bord analytics sur mesure",
		],
		featured: true,
		cta: "Discutons de votre projet",
		badge: "💎 Sur mesure",
		savings: null,
	},
];

export default function Pricing() {
	const [frequency, setFrequency] = useState<(typeof frequencies)[0]>(
		frequencies[0],
	);

	const annualSavings: Record<string, string> = {
		"tier-freelancer": "2 mois offerts",
		"tier-startup": "2 mois offerts",
	};

	return (
		<motion.div
			className="min-h-screen"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			{/* Header */}
			<div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 pt-32 pb-28 px-6">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
					<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
					<div
						className="absolute inset-0 opacity-[0.04]"
						style={{
							backgroundImage:
								"radial-gradient(circle, #ffffff 1px, transparent 1px)",
							backgroundSize: "32px 32px",
						}}
					/>
				</div>

				<div className="relative mx-auto max-w-3xl text-center">
					<motion.span
						className="inline-block text-blue-300 font-semibold text-xs tracking-widest uppercase mb-4"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						Tarification transparente
					</motion.span>
					<motion.h1
						className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Votre site web,{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-[length:200%_200%] animate-gradient-x">
							sans mauvaise surprise
						</span>
					</motion.h1>
					<motion.p
						className="text-blue-100/65 text-lg max-w-2xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						Des formules claires, un accompagnement humain, et un résultat
						dont vous serez fier. Résiliable à tout moment, sans engagement.
					</motion.p>

					{/* Toggle */}
					<motion.div
						className="mt-10 flex flex-col items-center gap-3"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<fieldset
							aria-label="Fréquence de paiement"
							className="border-0 p-0 m-0"
						>
							<RadioGroup
								value={frequency}
								onChange={setFrequency}
								className="inline-grid grid-cols-2 gap-1 rounded-full p-1 bg-white/10 backdrop-blur-sm border border-white/15"
							>
								{frequencies.map((option) => (
									<Radio
										key={option.value}
										value={option}
										className="cursor-pointer rounded-full px-6 py-2 text-sm font-semibold text-blue-200 transition-all duration-200 data-[checked]:bg-white data-[checked]:text-blue-900 data-[checked]:shadow-lg"
									>
										{option.label}
									</Radio>
								))}
							</RadioGroup>
						</fieldset>
						{frequency.value === "annually" && (
							<motion.span
								className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-semibold px-3 py-1 rounded-full"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
							>
								🎉 2 mois offerts sur tous les plans
							</motion.span>
						)}
					</motion.div>
				</div>
			</div>

			{/* Cards */}
			<div className="relative z-10 -mt-10 bg-white rounded-t-[2rem] shadow-[0_-4px_32px_rgba(0,0,0,0.12)] py-16 px-6">
				<div className="mx-auto max-w-7xl">
					<div className="isolate mx-auto mt-0 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-stretch">
						{tiers.map((tier, i) =>
							tier.featured ? (
								/* Enterprise — gradient border */
								<motion.div
									key={tier.id}
									className="relative flex flex-col"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1, duration: 0.5 }}
								>
									{tier.badge && (
										<div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-xl whitespace-nowrap">
											{tier.badge}
										</div>
									)}
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 -z-10 scale-105" />
									<div className="p-[2px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex-1 flex flex-col">
										<div className="bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 rounded-[22px] p-8 xl:p-10 flex flex-col flex-1">
											{/* Header */}
											<div className="mb-6">
												<span className="text-3xl mb-3 block">{tier.emoji}</span>
												<h3 className="text-xl font-black text-white">
													{tier.name}
												</h3>
												<p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mt-1">
													{tier.target}
												</p>
											</div>

											<p className="text-zinc-400 text-sm leading-relaxed mb-6">
												{tier.description}
											</p>

											{/* Highlight */}
											<div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2 mb-6 w-fit">
												<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
												<span className="text-white/80 text-xs font-semibold">
													{tier.highlight}
												</span>
											</div>

											{/* Price */}
											<p className="flex items-baseline gap-x-1 mb-2">
												<span className="text-5xl font-black text-white tracking-tight">
													{tier.price as string}
												</span>
											</p>

											<button
												onClick={() => {
													if (typeof tier.price !== "string") {
														payer(tier.price[frequency.value].id);
													} else {
														window.location.href = "/contact";
													}
												}}
												className="relative group overflow-hidden mt-6 block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-3.5 text-center text-sm font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300"
											>
												<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
												<span className="relative z-10">{tier.cta} →</span>
											</button>

											{/* Features */}
											<ul className="mt-8 space-y-3 text-sm flex-1">
												{tier.features.map((feature) => (
													<li
														key={feature}
														className="flex gap-x-3 text-zinc-300"
													>
														<CheckIcon
															aria-hidden="true"
															className="h-5 w-5 flex-none text-blue-400 shrink-0"
														/>
														{feature}
													</li>
												))}
											</ul>
										</div>
									</div>
								</motion.div>
							) : (
								/* Standard */
								<motion.div
									key={tier.id}
									className="group bg-white border border-zinc-200 rounded-3xl p-8 xl:p-10 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1, duration: 0.5 }}
								>
									{/* Badge populaire */}
									{tier.badge && (
										<div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
											{tier.badge}
										</div>
									)}

									{/* Header */}
									<div className="mb-5">
										<span className="text-3xl mb-3 block">{tier.emoji}</span>
										<h3 className="text-xl font-black text-zinc-900">
											{tier.name}
										</h3>
										<p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mt-1">
											{tier.target}
										</p>
									</div>

									<p className="text-sm text-zinc-500 leading-relaxed mb-5">
										{tier.description}
									</p>

									{/* Highlight */}
									<div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mb-5 w-fit">
										<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
										<span className="text-blue-700 text-xs font-semibold">
											{tier.highlight}
										</span>
									</div>

									{/* Price */}
									<div className="mb-1">
										<p className="flex items-baseline gap-x-1">
											<span className="text-5xl font-black text-zinc-900 tracking-tight">
												{typeof tier.price === "string"
													? tier.price
													: tier.price[frequency.value].label}
											</span>
											{typeof tier.price !== "string" && (
												<span className="text-sm font-semibold text-zinc-500">
													{frequency.priceSuffix}
												</span>
											)}
										</p>
										{frequency.value === "annually" &&
											typeof tier.price !== "string" && (
												<p className="text-xs text-green-600 font-semibold mt-1">
													soit {tier.price.annually.monthly}€/mois —{" "}
													{annualSavings[tier.id]}
												</p>
											)}
									</div>

									<button
										onClick={() => {
											if (typeof tier.price !== "string") {
												payer(tier.price[frequency.value].id);
											}
										}}
										className="relative group/btn overflow-hidden mt-6 block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-3.5 text-center text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
									>
										<span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
										<span className="relative z-10">{tier.cta} →</span>
									</button>

									{/* Features */}
									<ul className="mt-8 space-y-3 text-sm flex-1">
										{tier.features.map((feature) => (
											<li key={feature} className="flex gap-x-3 text-zinc-600">
												<CheckIcon
													aria-hidden="true"
													className="h-5 w-5 flex-none text-blue-600 shrink-0"
												/>
												{feature}
											</li>
										))}
									</ul>
								</motion.div>
							),
						)}
					</div>

					{/* Trust badges */}
					<motion.div
						className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						{[
							{ icon: "🔒", text: "Paiement sécurisé Stripe" },
							{ icon: "📅", text: "Sans engagement, résiliable à tout moment" },
							{ icon: "💬", text: "Réponse sous 24h garantie" },
							{ icon: "🇫🇷", text: "Développeur basé en France" },
						].map((badge) => (
							<div
								key={badge.text}
								className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-2"
							>
								<span>{badge.icon}</span>
								<span className="font-medium">{badge.text}</span>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
