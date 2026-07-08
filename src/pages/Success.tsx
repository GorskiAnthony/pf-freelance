import { Link } from "react-router-dom";

export default function Success() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center bg-paper px-4">
			<span className="font-mono text-xs uppercase tracking-wider text-petrol mb-4">
				Paiement confirmé
			</span>
			<h1 className="font-display text-4xl text-ink mb-4">Merci !</h1>
			<p className="text-lg text-slate mb-8 max-w-md">
				Le paiement a été effectué avec succès. Vous allez recevoir un
				e-mail de confirmation sous peu.
			</p>
			<Link
				to="/"
				className="bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
			>
				Retour à l'accueil
			</Link>
		</div>
	);
}
