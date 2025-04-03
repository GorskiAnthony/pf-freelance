import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2025-03-31.basil",
});

const SERVICES = {
	freelancer_monthly: {
		name: "Freelancer (Mensuel)",
		unit_amount: 1900,
		interval: "month",
		is_subscription: true,
	},
	freelancer_yearly: {
		name: "Freelancer (Annuel)",
		unit_amount: 19900,
		interval: "year",
		is_subscription: true,
	},
	startup_monthly: {
		name: "Startup (Mensuel)",
		unit_amount: 2900,
		interval: "month",
		is_subscription: true,
	},
	startup_yearly: {
		name: "Startup (Annuel)",
		unit_amount: 29900,
		interval: "year",
		is_subscription: true,
	},
	cours_1h: {
		name: "Cours individuel",
		unit_amount: 4000,
		is_subscription: false,
	},
	cours_5h: {
		name: "Pack 5 cours",
		unit_amount: 15000,
		is_subscription: false,
	},
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Méthode non autorisée" });
	}

	const { service } = req.body;

	const selected = SERVICES[service];
	if (!selected) {
		return res.status(400).json({ error: "Service inconnu" });
	}

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: selected.is_subscription ? "subscription" : "payment",
			line_items: [
				{
					price_data: {
						currency: "eur",
						product_data: {
							name: selected.name,
						},
						unit_amount: selected.unit_amount,
						recurring: selected.is_subscription
							? { interval: selected.interval }
							: undefined,
					},
					quantity: 1,
				},
			],
			success_url: `${req.headers.origin}/success`,
			cancel_url: `${req.headers.origin}/cancel`,
		});

		return res.status(200).json({ url: session.url });
	} catch (err: any) {
		console.error(err);
		return res.status(500).json({ error: err.message });
	}
}
