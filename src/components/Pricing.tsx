import { motion } from "framer-motion";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { payer } from "../utils/payer";

const frequencies: {
	value: "monthly" | "annually";
	label: string;
	priceSuffix: string;
}[] = [
	{ value: "monthly", label: "Mensuelle", priceSuffix: "/mois" },
	{ value: "annually", label: "Annuel", priceSuffix: "/an" },
];

const tiers = [
	{
		name: "Freelancer",
		id: "tier-freelancer",
		href: "#",
		price: {
			monthly: { label: "€59", id: "freelancer_monthly" },
			annually: { label: "€590", id: "freelancer_yearly" },
		},
		description: "L'essentiel pour donner le meilleur de soi à ses clients.",
		features: [
			"Site vitrine simple",
			"Design responsive",
			"1 page maximum",
			"Temps de réponse de l'assistance sous 48 heures",
		],
		featured: false,
		cta: "Choisir ce plan",
		badge: null,
	},
	{
		name: "Startup",
		id: "tier-startup",
		href: "#",
		price: {
			monthly: { label: "€99", id: "startup_monthly" },
			annually: { label: "€990", id: "startup_yearly" },
		},
		description: "Un plan qui s'adapte à la croissance rapide de votre entreprise.",
		features: [
			"Site web complexe",
			"Design personnalisé",
			"Jusqu'à 5 pages",
			"Temps de réponse de l'assistance sous 24 heures",
			"SEO optimisé",
		],
		featured: false,
		cta: "Choisir ce plan",
		badge: null,
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		href: "#",
		price: "Sur mesure",
		description: "Support et infrastructure dédiés à votre entreprise.",
		features: [
			"Application web complète",
			"Design sur mesure",
			"Pages illimitées",
			"Support 24/7",
			"SEO avancé",
			"Maintenance incluse",
		],
		featured: true,
		cta: "Faire une demande",
		badge: "⭐ Recommandé",
	},
];

export default function Pricing() {
	const [frequency, setFrequency] = useState<{
		value: "monthly" | "annually";
		label: string;
		priceSuffix: string;
	}>(frequencies[0]);

	return (
		<motion.div
			className="min-h-screen"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			{/* Header area */}
			<div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 pt-32 pb-28 px-6">
				{/* Aurora */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
					<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
					<div
						className="absolute inset-0 opacity-[0.04]"
						style={{
							backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
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
						Une tarification qui{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-[length:200%_200%] animate-gradient-x">
							évolue avec vous
						</span>
					</motion.h1>
					<motion.p
						className="text-blue-100/65 text-lg max-w-2xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						Choisissez une formule abordable, dotée des meilleures
						fonctionnalités pour engager votre audience, fidéliser vos clients
						et stimuler vos ventes.
					</motion.p>

					{/* Toggle */}
					<motion.div
						className="mt-10 flex justify-center"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<fieldset aria-label="Fréquence de paiement" className="border-0 p-0 m-0">
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
					</motion.div>
				</div>

			</div>

			{/* Cards — overlaps the dark section, no gap possible */}
			<div className="relative z-10 -mt-10 bg-white rounded-t-[2rem] shadow-[0_-4px_32px_rgba(0,0,0,0.12)] py-16 px-6">
				<div className="mx-auto max-w-7xl">
					<div className="isolate mx-auto mt-0 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-center">
						{tiers.map((tier, i) =>
							tier.featured ? (
								/* Featured — gradient border */
								<motion.div
									key={tier.id}
									className="relative"
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
									{/* Glow */}
									<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 -z-10 scale-105" />
									{/* Gradient border */}
									<div className="p-[2px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
										<div className="bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 rounded-[22px] p-8 xl:p-10">
											<h3 className="text-lg font-bold text-white mb-1">
												{tier.name}
											</h3>
											<p className="text-zinc-400 text-sm leading-relaxed mt-3">
												{tier.description}
											</p>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span className="text-4xl font-black text-white tracking-tight">
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
												className="relative group overflow-hidden mt-6 block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-3 text-center text-sm font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300"
											>
												<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
												<span className="relative z-10">{tier.cta}</span>
											</button>
											<ul className="mt-8 space-y-3 text-sm xl:mt-10">
												{tier.features.map((feature) => (
													<li key={feature} className="flex gap-x-3 text-zinc-300">
														<CheckIcon
															aria-hidden="true"
															className="h-5 w-5 flex-none text-blue-400"
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
									className="group bg-white border border-zinc-200 rounded-3xl p-8 xl:p-10 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-300"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1, duration: 0.5 }}
								>
									<h3 className="text-lg font-bold text-zinc-900">
										{tier.name}
									</h3>
									<p className="mt-3 text-sm text-zinc-500 leading-relaxed">
										{tier.description}
									</p>
									<p className="mt-6 flex items-baseline gap-x-1">
										<span className="text-4xl font-black text-zinc-900 tracking-tight">
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
									<button
										onClick={() => {
											if (typeof tier.price !== "string") {
												payer(tier.price[frequency.value].id);
											}
										}}
										className="relative group/btn overflow-hidden mt-6 block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-3 text-center text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
									>
										<span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
										<span className="relative z-10">{tier.cta}</span>
									</button>
									<ul className="mt-8 space-y-3 text-sm xl:mt-10">
										{tier.features.map((feature) => (
											<li key={feature} className="flex gap-x-3 text-zinc-600">
												<CheckIcon
													aria-hidden="true"
													className="h-5 w-5 flex-none text-blue-600"
												/>
												{feature}
											</li>
										))}
									</ul>
								</motion.div>
							),
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
