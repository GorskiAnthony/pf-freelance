import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<main className="grid min-h-screen place-items-center bg-paper px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="font-mono text-xs uppercase tracking-wider text-petrol mb-4">
					Erreur 404
				</p>
				<h1
					className="font-display text-5xl sm:text-6xl text-ink mb-6"
					style={{ textWrap: "balance" }}
				>
					Page non trouvée
				</h1>
				<p className="text-lg text-slate mb-10 max-w-md mx-auto">
					Désolé, nous n'avons pas pu trouver la page que vous
					recherchez.
				</p>
				<div className="flex items-center justify-center gap-x-6">
					<Link
						to="/"
						className="bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
					>
						Retour à l'accueil
					</Link>
					<Link
						to="/contact"
						className="font-mono text-sm uppercase tracking-wider text-slate hover:text-ink transition-colors duration-200"
					>
						Contact support →
					</Link>
				</div>
			</div>
		</main>
	);
}
