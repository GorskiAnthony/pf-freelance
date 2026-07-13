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

const creationOffers = [
	{
		name: "Vitrine",
		id: "creation-vitrine",
		target: "Indépendants & petites structures",
		price: "690€",
		priceNote: "paiement unique",
		description:
			"Votre vitrine professionnelle en ligne en moins d'une semaine. Simple, efficace, et qui donne envie de vous contacter.",
		highlight: "Livré en 7 jours",
		features: [
			"Site one-page professionnel et percutant",
			"Design responsive mobile & desktop",
			"Formulaire de contact intégré",
			"Référencement de base (SEO on-page)",
			"Mise en ligne & configuration DNS incluses",
		],
		featured: false,
		cta: "Démarrer mon projet",
		badge: null,
		serviceId: "creation_vitrine",
	},
	{
		name: "Multi-pages",
		id: "creation-multipages",
		target: "TPE & petites entreprises",
		price: "1 490€",
		priceNote: "paiement unique",
		description:
			"Un site qui travaille pour vous 24h/24 : visible sur Google, conçu pour convertir vos visiteurs en clients.",
		highlight: "Le plus demandé",
		features: [
			"Site multi-pages jusqu'à 5 sections",
			"Design sur mesure aux couleurs de votre marque",
			"SEO avancé pour être trouvé sur Google",
			"Performance optimisée (score Lighthouse 90+)",
			"Mise en ligne & configuration DNS incluses",
		],
		featured: false,
		cta: "Lancer mon projet",
		badge: "Le plus demandé",
		serviceId: "creation_multipages",
	},
	{
		name: "Sur mesure",
		id: "creation-surmesure",
		target: "PME & grandes structures",
		price: "Sur devis",
		priceNote: "devis gratuit, réponse sous 48h",
		description:
			"Une application web complète, pensée pour vos enjeux métier. De la conception au déploiement - on s'occupe de tout.",
		highlight: "Accompagnement complet",
		features: [
			"Application web ou site sur mesure",
			"Architecture et conseil technique inclus",
			"Design haut de gamme, unique à votre marque",
			"SEO technique avancé + suivi de performance",
			"Tableau de bord analytics sur mesure",
		],
		featured: true,
		cta: "Discutons de votre projet",
		badge: "Sur devis",
		serviceId: null,
	},
];

const hostingPlans = [
	{
		name: "Essentiel",
		id: "hosting-essentiel",
		price: {
			monthly: { label: "19€", monthly: 19, id: "hosting_essentiel_monthly" },
			annually: {
				label: "190€",
				monthly: 16,
				id: "hosting_essentiel_yearly",
			},
		},
		description:
			"L'hébergement et la sécurité de votre site pris en charge sur mes propres serveurs, sans y penser.",
		features: [
			"Hébergement sécurisé (certificat SSL inclus)",
			"Sauvegardes automatiques quotidiennes",
			"Supervision de disponibilité 24h/24",
			"Support par email sous 48h",
		],
		featured: false,
		badge: null,
	},
	{
		name: "Confort",
		id: "hosting-confort",
		price: {
			monthly: { label: "39€", monthly: 39, id: "hosting_confort_monthly" },
			annually: {
				label: "390€",
				monthly: 33,
				id: "hosting_confort_yearly",
			},
		},
		description:
			"Tout l'Essentiel, plus des mises à jour et un accompagnement continu sur votre site.",
		features: [
			"Tout ce qui est inclus dans Essentiel",
			"Mises à jour de sécurité & dépendances",
			"Modifications de contenu mineures incluses",
			"Support prioritaire sous 24h",
		],
		featured: true,
		badge: "Recommandé",
	},
];

const alaCarteServices = [
	{
		icon: Icons.Rocket,
		name: "Développement à la carte",
		description:
			"Une fonctionnalité, une intégration ou une refonte partielle - sans repartir sur un forfait complet.",
		price: "À partir de 450€",
		priceNote: "devis gratuit, réponse sous 48h",
		cta: "Décrire mon besoin",
		serviceId: null,
	},
	{
		icon: Icons.Search,
		name: "Audit SEO",
		description:
			"Un audit complet de votre référencement, avec un plan d'action clair et priorisé.",
		price: "390€",
		priceNote: "paiement unique",
		cta: "Commander mon audit",
		serviceId: "service_audit_seo",
	},
	{
		icon: Icons.WrenchIcon,
		name: "Maintenance seule",
		description:
			"Votre site est hébergé ailleurs ? Je m'occupe des mises à jour, petites modifications et du support.",
		price: "35€",
		priceNote: "/mois, sans engagement",
		cta: "S'abonner",
		serviceId: "service_maintenance_solo_monthly",
	},
	{
		icon: Icons.Brain,
		name: "Conseil & Accompagnement",
		description:
			"Une session pour faire le point sur vos choix techniques, votre architecture ou votre roadmap.",
		price: "110€",
		priceNote: "/heure",
		cta: "Réserver une session",
		serviceId: "service_conseil_1h",
	},
];

const trustBadges = [
	{ icon: Icons.BadgeCheck, text: "Devis gratuit, sans engagement" },
	{ icon: Icons.Lock, text: "Paiement sécurisé Stripe" },
	{
		icon: Icons.CalendarCheck,
		text: "Hébergement sans engagement, résiliable à tout moment",
	},
	{ icon: Icons.MessageCircle, text: "Réponse sous 24h garantie" },
	{ icon: Icons.MapPin, text: "Développeur basé en France" },
];

export default function Pricing() {
	const [frequency, setFrequency] = useState<(typeof frequencies)[0]>(
		frequencies[0],
	);

	const annualSavings: Record<string, string> = {
		"hosting-essentiel": "2 mois offerts",
		"hosting-confort": "2 mois offerts",
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
						Un forfait fixe pour la création, décidé dès le départ. Et
						si vous voulez que je garde la main sur l'hébergement,
						un abonnement clair et sans surprise.
					</motion.p>
				</div>
			</div>

			{/* Création */}
			<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
				<div className="max-w-xl mb-14">
					<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
						Création
					</span>
					<h2 className="font-display text-3xl sm:text-4xl text-ink">
						Un tarif fixe, décidé avant de commencer.
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-mist">
					{creationOffers.map((offer, i) => (
						<motion.div
							key={offer.id}
							className={clsx(
								"relative flex flex-col border-r border-b border-mist p-8 xl:p-10",
								offer.featured && "bg-ink",
							)}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08, duration: 0.5 }}
						>
							{offer.badge && (
								<span
									className={clsx(
										"absolute top-0 right-0 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5",
										offer.featured
											? "bg-petrol text-paper"
											: "bg-ink text-paper",
									)}
								>
									{offer.badge}
								</span>
							)}

							{/* Header */}
							<div className="mb-5">
								<h3
									className={clsx(
										"font-display text-2xl",
										offer.featured ? "text-paper" : "text-ink",
									)}
								>
									{offer.name}
								</h3>
								<p
									className={clsx(
										"font-mono text-xs uppercase tracking-wider mt-2",
										offer.featured
											? "text-petrol-light"
											: "text-petrol",
									)}
								>
									{offer.target}
								</p>
							</div>

							<p
								className={clsx(
									"text-sm leading-relaxed mb-6",
									offer.featured ? "text-paper/60" : "text-slate",
								)}
							>
								{offer.description}
							</p>

							{/* Highlight */}
							<div
								className={clsx(
									"inline-flex items-center gap-2 border px-3 py-2 mb-6 w-fit",
									offer.featured
										? "border-paper/15 text-paper/70"
										: "border-mist text-slate",
								)}
							>
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
								<span className="text-xs font-medium">
									{offer.highlight}
								</span>
							</div>

							{/* Price */}
							<div className="mb-1">
								<p className="flex items-baseline gap-x-1.5">
									<span
										className={clsx(
											"font-display text-4xl tabular-nums",
											offer.featured ? "text-paper" : "text-ink",
										)}
									>
										{offer.price}
									</span>
									{offer.priceNote && (
										<span
											className={clsx(
												"text-sm",
												offer.featured
													? "text-paper/50"
													: "text-slate",
											)}
										>
											{offer.priceNote}
										</span>
									)}
								</p>
							</div>

							<button
								onClick={() => {
									if (offer.serviceId) {
										payer(offer.serviceId);
									} else {
										window.location.href = "/contact";
									}
								}}
								className={clsx(
									"mt-6 block w-full px-4 py-3.5 text-center text-sm font-semibold transition-colors duration-200",
									offer.featured
										? "bg-petrol text-paper hover:bg-petrol-deep"
										: "bg-ink text-paper hover:bg-petrol-deep",
								)}
							>
								{offer.cta} →
							</button>

							{/* Features */}
							<ul className="mt-8 space-y-3 text-sm flex-1">
								{offer.features.map((feature) => (
									<li
										key={feature}
										className={clsx(
											"flex gap-x-3",
											offer.featured
												? "text-paper/70"
												: "text-slate",
										)}
									>
										<Icons.Check
											aria-hidden="true"
											className={clsx(
												"h-4 w-4 flex-none mt-0.5",
												offer.featured
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
			</div>

			{/* Services à la carte */}
			<section className="border-t border-mist bg-white">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
					<div className="max-w-xl mb-14">
						<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
							À la carte
						</span>
						<h2 className="font-display text-3xl sm:text-4xl text-ink">
							Besoin d'un seul service ? Prenez-le à l'unité.
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-mist">
						{alaCarteServices.map((service, i) => (
							<motion.div
								key={service.name}
								className="flex flex-col border-r border-b border-mist p-8"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.06, duration: 0.5 }}
							>
								<service.icon
									className="w-6 h-6 text-petrol mb-5"
									strokeWidth={1.75}
								/>
								<h3 className="font-display text-xl text-ink mb-2.5">
									{service.name}
								</h3>
								<p className="text-slate text-sm leading-relaxed mb-6 flex-1">
									{service.description}
								</p>
								<div className="mb-5">
									<p className="flex items-baseline gap-x-1.5">
										<span className="font-display text-3xl text-ink tabular-nums">
											{service.price}
										</span>
									</p>
									<p className="text-slate text-xs mt-1">
										{service.priceNote}
									</p>
								</div>
								<button
									onClick={() => {
										if (service.serviceId) {
											payer(service.serviceId);
										} else {
											window.location.href = "/contact";
										}
									}}
									className="w-full bg-ink text-paper px-4 py-3 text-center text-sm font-semibold hover:bg-petrol-deep transition-colors duration-200"
								>
									{service.cta} →
								</button>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Hébergement & maintenance */}
			<section className="border-t border-mist bg-white">
				<div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
					<div className="flex flex-wrap items-end justify-between gap-6 mb-14">
						<div className="max-w-xl">
							<span className="font-mono text-xs uppercase tracking-wider text-petrol block mb-3">
								Hébergement
							</span>
							<h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
								Votre site pris en charge dans la durée.
							</h2>
							<p className="text-slate leading-relaxed max-w-2xl">
								Votre site est hébergé et surveillé en continu -
								un abonnement optionnel, résiliable à tout
								moment, pour que vous n'ayez jamais à vous en
								soucier.
							</p>
						</div>

						<div className="flex flex-col items-start gap-3">
							<fieldset
								aria-label="Fréquence de paiement"
								className="border-0 p-0 m-0"
							>
								<RadioGroup
									value={frequency}
									onChange={setFrequency}
									className="inline-grid grid-cols-2 border border-mist"
								>
									{frequencies.map((option) => (
										<Radio
											key={option.value}
											value={option}
											className="cursor-pointer px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-slate transition-colors duration-200 data-[checked]:bg-ink data-[checked]:text-paper"
										>
											{option.label}
										</Radio>
									))}
								</RadioGroup>
							</fieldset>
							{frequency.value === "annually" && (
								<motion.span
									className="font-mono text-xs text-petrol"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
								>
									2 mois offerts sur tous les abonnements
								</motion.span>
							)}
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-mist">
						{hostingPlans.map((plan, i) => (
							<motion.div
								key={plan.id}
								className={clsx(
									"relative flex flex-col border-r border-b border-mist p-8 xl:p-10",
									plan.featured && "bg-petrol/5",
								)}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
							>
								{plan.badge && (
									<span className="absolute top-0 right-0 font-mono text-[11px] uppercase tracking-wider bg-petrol text-paper px-3 py-1.5">
										{plan.badge}
									</span>
								)}

								<h3 className="font-display text-2xl text-ink mb-4">
									{plan.name}
								</h3>

								<p className="text-slate text-sm leading-relaxed mb-6">
									{plan.description}
								</p>

								<div className="mb-1">
									<p className="flex items-baseline gap-x-1.5">
										<span className="font-display text-4xl text-ink tabular-nums">
											{plan.price[frequency.value].label}
										</span>
										<span className="text-slate text-sm">
											{frequency.priceSuffix}
										</span>
									</p>
									{frequency.value === "annually" && (
										<p className="font-mono text-xs text-emerald-700 mt-1.5">
											soit {plan.price.annually.monthly}
											€/mois - {annualSavings[plan.id]}
										</p>
									)}
								</div>

								<button
									onClick={() => payer(plan.price[frequency.value].id)}
									className="mt-6 block w-full bg-ink text-paper px-4 py-3.5 text-center text-sm font-semibold hover:bg-petrol-deep transition-colors duration-200"
								>
									S'abonner →
								</button>

								<ul className="mt-8 space-y-3 text-sm flex-1">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className="flex gap-x-3 text-slate"
										>
											<Icons.Check
												aria-hidden="true"
												className="h-4 w-4 flex-none mt-0.5 text-petrol"
											/>
											{feature}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-5 sm:px-8">
				{/* Trust badges */}
				<motion.div
					className="flex flex-wrap justify-center gap-4 py-12"
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
		</motion.div>
	);
}
