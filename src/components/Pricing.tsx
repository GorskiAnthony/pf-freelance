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
			monthly: { label: "€19", id: "freelancer_monthly" },
			annually: { label: "€199", id: "freelancer_yearly" },
		},
		description:
			"L'essentiel pour donner le meilleur de soi à ses clients.",
		features: [
			"Site vitrine simple",
			"Design responsive",
			"1 page maximum",
			"Temps de réponse de l'assistance sous 48 heures",
		],
		featured: false,
		cta: "Choisir ce plan",
	},
	{
		name: "Startup",
		id: "tier-startup",
		href: "#",
		price: {
			monthly: { label: "€29", id: "freelancer_monthly" },
			annually: { label: "€299", id: "freelancer_yearly" },
		},
		description:
			"Un plan qui s'adapte à la croissance rapide de votre entreprise.",
		features: [
			"Site web complexe",
			"Design personnalisé",
			"Jusqu'à 5 pages",
			"Temps de réponse de l'assistance sous 24 heures",
			"SEO optimisé",
		],
		featured: false,
		cta: "Choisir ce plan",
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
	},
];

function classNames(...classes: (string | false | null | undefined)[]): string {
	return classes.filter(Boolean).join(" ");
}

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function Pricing() {
	const [frequency, setFrequency] = useState<{
		value: "monthly" | "annually";
		label: string;
		priceSuffix: string;
	}>(frequencies[0]);

	return (
		<motion.div
			className="bg-white"
			initial="initial"
			animate="animate"
			variants={fadeIn}
			transition={fadeIn.transition}
		>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<motion.p
							className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
							{...fadeIn}
							transition={{ delay: 0.2 }}
						>
							Une tarification qui évolue avec vous
						</motion.p>
					</div>
					<p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
						Choisissez une formule abordable, dotée des meilleures
						fonctionnalités pour engager votre audience, fidéliser
						vos clients et stimuler vos ventes.
					</p>
					<div className="mt-16 flex justify-center">
						<fieldset aria-label="Payment frequency">
							<RadioGroup
								value={frequency}
								onChange={setFrequency}
								className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
							>
								{frequencies.map((option) => (
									<Radio
										key={option.value}
										value={option}
										className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
									>
										{option.label}
									</Radio>
								))}
							</RadioGroup>
						</fieldset>
					</div>
					<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{tiers.map((tier) => (
							<div
								key={tier.id}
								className={classNames(
									tier.featured
										? "bg-gray-900 ring-gray-900"
										: "ring-gray-200",
									"rounded-3xl p-8 ring-1 xl:p-10"
								)}
							>
								<h3
									id={tier.id}
									className={classNames(
										tier.featured
											? "text-white"
											: "text-gray-900",
										"text-lg/8 font-semibold"
									)}
								>
									{tier.name}
								</h3>
								<p
									className={classNames(
										tier.featured
											? "text-gray-300"
											: "text-gray-600",
										"mt-4 text-sm/6"
									)}
								>
									{tier.description}
								</p>
								<p className="mt-6 flex items-baseline gap-x-1">
									<span
										className={classNames(
											tier.featured
												? "text-white"
												: "text-gray-900",
											"text-4xl font-semibold tracking-tight"
										)}
									>
										{typeof tier.price === "string"
											? tier.price
											: tier.price[frequency.value].label}
									</span>
									{typeof tier.price !== "string" ? (
										<span
											className={classNames(
												tier.featured
													? "text-gray-300"
													: "text-gray-600",
												"text-sm/6 font-semibold"
											)}
										>
											{frequency.priceSuffix}
										</span>
									) : null}
								</p>
								<button
									onClick={() => {
										if (typeof tier.price !== "string") {
											payer(
												tier.price[frequency.value].id
											);
										}
									}}
									aria-describedby={tier.id}
									className={classNames(
										tier.featured
											? "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
											: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600",
										"mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									)}
								>
									{tier.cta}
								</button>
								<ul
									role="list"
									className={classNames(
										tier.featured
											? "text-gray-300"
											: "text-gray-600",
										"mt-8 space-y-3 text-sm/6 xl:mt-10"
									)}
								>
									{tier.features.map((feature) => (
										<li
											key={feature}
											className="flex gap-x-3"
										>
											<CheckIcon
												aria-hidden="true"
												className={classNames(
													tier.featured
														? "text-white"
														: "text-indigo-600",
													"h-6 w-5 flex-none"
												)}
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
