import { Link } from "react-router-dom";

export default function Cancel() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center bg-paper px-4">
			<span className="font-mono text-xs uppercase tracking-wider text-slate mb-4">
				Paiement annulé
			</span>
			<h1 className="font-display text-4xl text-ink mb-4">
				Le paiement a été annulé.
			</h1>
			<p className="text-lg text-slate mb-8 max-w-md">
				Aucun montant n'a été débité. Vous pouvez réessayer à tout
				moment.
			</p>
			<Link
				to="/pricing"
				className="bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
			>
				Retour à la tarification
			</Link>
		</div>
	);
}
