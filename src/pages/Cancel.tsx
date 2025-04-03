import { Link } from "react-router-dom";

export default function Cancel() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center bg-red-50 px-4">
			<h1 className="text-4xl font-bold text-red-700 mb-4">
				Paiement annulé ❌
			</h1>
			<p className="text-lg text-red-800 mb-6">
				Le paiement a été annulé. Vous pouvez réessayer à tout moment.
			</p>
			<Link
				to="/pricing"
				className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
			>
				Retour à la tarification
			</Link>
		</div>
	);
}
