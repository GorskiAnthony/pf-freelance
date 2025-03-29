import { Link } from "react-router-dom";
import { Icons } from "../helpers/Icon";

const Footer = () => {
	return (
		<footer className="bg-zinc-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<ul className="space-y-2">
							<li className="flex items-center">
								<Icons.Mail className="w-5 h-5 mr-2" />
								<a
									href="mailto:contact@example.com"
									className="hover:text-zinc-300 transition-colors"
								>
									contact@example.com
								</a>
							</li>
							<li className="flex items-center">
								<Icons.Github className="w-5 h-5 mr-2" />
								<a
									href="https://github.com/GorskiAnthony"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-zinc-300 transition-colors"
								>
									GitHub
								</a>
							</li>
							<li className="flex items-center">
								<Icons.Linkedin className="w-5 h-5 mr-2" />
								<a
									href="https://www.linkedin.com/in/anthony-gorski/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-zinc-300 transition-colors"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="hover:text-zinc-300 transition-colors"
								>
									Développement Web
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-zinc-300 transition-colors"
								>
									Design UI/UX
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-zinc-300 transition-colors"
								>
									Consulting
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">Légal</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/mentions-legales"
									className="hover:text-zinc-300 transition-colors"
								>
									Mentions légales
								</Link>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-zinc-300 transition-colors"
								>
									Politique de confidentialité
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-zinc-300 transition-colors"
								>
									CGV
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-zinc-700 text-center text-zinc-400">
					<p>
						&copy; {new Date().getFullYear()} Portfolio. Tous droits
						réservés.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
