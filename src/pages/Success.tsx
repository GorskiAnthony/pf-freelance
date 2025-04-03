import { Link } from "react-router-dom";

export default function Success() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center bg-green-50 px-4">
			<h1 className="text-4xl font-bold text-green-700 mb-4">
				Merci ! 🎉
			</h1>
			<p className="text-lg text-green-800 mb-6">
				Le paiement a été effectué avec succès. Vous allez recevoir un
				e-mail de confirmation sous peu.
			</p>
			<Link
				to="/"
				className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
			>
				Retour à l'accueil
			</Link>
		</div>
	);
}
