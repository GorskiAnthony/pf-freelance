import { motion } from "framer-motion";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { Icons } from "../helpers/Icon";
import { payer } from "../utils/payer";
import clsx from "clsx";

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
		name: "Starter",
		id: "tier-freelancer",
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
	},
	{
		name: "Startup",
		id: "tier-startup",
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
		badge: "Le plus populaire",
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		target: "PME & grandes structures",
		price: "Sur mesure" as const,
		description:
			"Une application web complète, pensée pour vos enjeux métier. De la conception au déploiement - on s'occupe de tout.",
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
		badge: "Sur mesure",
	},
];

const trustBadges = [
	{ icon: Icons.Lock, text: "Paiement sécurisé Stripe" },
	{
		icon: Icons.CalendarCheck,
		text: "Sans engagement, résiliable à tout moment",
	},
	{ icon: Icons.MessageCircle, text: "Réponse sous 24h garantie" },
	{ icon: Icons.MapPin, text: "Développeur basé en France" },
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
			className="min-h-screen bg-paper"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Header */}
			<div className="relative overflow-hidden bg-ink pt-32 pb-24 px-6">
				<div
					className="absolute inset-0 opacity-[0.035] pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(rgba(242,241,236,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,241,236,1) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>

				<div className="relative mx-auto max-w-3xl text-center">
					<motion.span
						className="inline-block font-mono text-xs uppercase tracking-wider text-petrol-light mb-4"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						Tarification transparente
					</motion.span>
					<motion.h1
						className="font-display text-4xl md:text-6xl text-paper mb-6 leading-[1.1]"
						style={{ textWrap: "balance" }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Votre site web, sans mauvaise surprise.
					</motion.h1>
					<motion.p
						className="text-paper/60 text-lg max-w-2xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						Des formules claires, un accompagnement humain, et un
						résultat dont vous serez fier. Résiliable à tout moment,
						sans engagement.
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
								className="inline-grid grid-cols-2 border border-paper/20"
							>
								{frequencies.map((option) => (
									<Radio
										key={option.value}
										value={option}
										className="cursor-pointer px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-paper/60 transition-colors duration-200 data-[checked]:bg-petrol data-[checked]:text-paper"
									>
										{option.label}
									</Radio>
								))}
							</RadioGroup>
						</fieldset>
						{frequency.value === "annually" && (
							<motion.span
								className="font-mono text-xs text-petrol-light"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
							>
								2 mois offerts sur tous les plans
							</motion.span>
						)}
					</motion.div>
				</div>
			</div>

			{/* Cards */}
			<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-mist">
					{tiers.map((tier, i) => (
						<motion.div
							key={tier.id}
							className={clsx(
								"relative flex flex-col border-r border-b border-mist p-8 xl:p-10",
								tier.featured && "bg-ink",
							)}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08, duration: 0.5 }}
						>
							{tier.badge && (
								<span
									className={clsx(
										"absolute top-0 right-0 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5",
										tier.featured
											? "bg-petrol text-paper"
											: "bg-ink text-paper",
									)}
								>
									{tier.badge}
								</span>
							)}

							{/* Header */}
							<div className="mb-5">
								<h3
									className={clsx(
										"font-display text-2xl",
										tier.featured
											? "text-paper"
											: "text-ink",
									)}
								>
									{tier.name}
								</h3>
								<p
									className={clsx(
										"font-mono text-xs uppercase tracking-wider mt-2",
										tier.featured
											? "text-petrol-light"
											: "text-petrol",
									)}
								>
									{tier.target}
								</p>
							</div>

							<p
								className={clsx(
									"text-sm leading-relaxed mb-6",
									tier.featured
										? "text-paper/60"
										: "text-slate",
								)}
							>
								{tier.description}
							</p>

							{/* Highlight */}
							<div
								className={clsx(
									"inline-flex items-center gap-2 border px-3 py-2 mb-6 w-fit",
									tier.featured
										? "border-paper/15 text-paper/70"
										: "border-mist text-slate",
								)}
							>
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
								<span className="text-xs font-medium">
									{tier.highlight}
								</span>
							</div>

							{/* Price */}
							<div className="mb-1">
								<p className="flex items-baseline gap-x-1.5">
									<span
										className={clsx(
											"font-display text-4xl tabular-nums",
											tier.featured
												? "text-paper"
												: "text-ink",
										)}
									>
										{typeof tier.price === "string"
											? tier.price
											: tier.price[frequency.value].label}
									</span>
									{typeof tier.price !== "string" && (
										<span
											className={clsx(
												"text-sm",
												tier.featured
													? "text-paper/50"
													: "text-slate",
											)}
										>
											{frequency.priceSuffix}
										</span>
									)}
								</p>
								{frequency.value === "annually" &&
									typeof tier.price !== "string" && (
										<p className="font-mono text-xs text-emerald-700 mt-1.5">
											soit {tier.price.annually.monthly}
											€/mois - {annualSavings[tier.id]}
										</p>
									)}
							</div>

							<button
								onClick={() => {
									if (typeof tier.price !== "string") {
										payer(tier.price[frequency.value].id);
									} else {
										window.location.href = "/contact";
									}
								}}
								className={clsx(
									"mt-6 block w-full px-4 py-3.5 text-center text-sm font-semibold transition-colors duration-200",
									tier.featured
										? "bg-petrol text-paper hover:bg-petrol-deep"
										: "bg-ink text-paper hover:bg-petrol-deep",
								)}
							>
								{tier.cta} →
							</button>

							{/* Features */}
							<ul className="mt-8 space-y-3 text-sm flex-1">
								{tier.features.map((feature) => (
									<li
										key={feature}
										className={clsx(
											"flex gap-x-3",
											tier.featured
												? "text-paper/70"
												: "text-slate",
										)}
									>
										<Icons.Check
											aria-hidden="true"
											className={clsx(
												"h-4 w-4 flex-none mt-0.5",
												tier.featured
													? "text-petrol-light"
													: "text-petrol",
											)}
										/>
										{feature}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Trust badges */}
				<motion.div
					className="mt-12 flex flex-wrap justify-center gap-4"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{trustBadges.map((badge) => (
						<div
							key={badge.text}
							className="flex items-center gap-2 border border-mist px-4 py-2 text-sm text-slate"
						>
							<badge.icon className="w-4 h-4 text-petrol shrink-0" />
							<span className="font-medium">{badge.text}</span>
						</div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}
