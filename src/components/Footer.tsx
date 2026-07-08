import { Link } from "react-router-dom";
import { Icons } from "../helpers/Icon";
export default function Footer() {
	return (
		<footer className="bg-ink text-paper/80 py-16">
			<div className="max-w-6xl mx-auto px-5 sm:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					<div>
						<span className="font-display text-lg text-paper block mb-4">
							Anthony Gorski
						</span>
						<p className="text-sm leading-relaxed max-w-xs">
							Développeur full-stack freelance. Sites,
							applications et intégrations sur-mesure, du cadrage
							à la mise en production.
						</p>
					</div>

					<div>
						<h3 className="font-mono text-xs uppercase tracking-wider text-paper/50 mb-4">
							Navigation
						</h3>
						<ul className="space-y-2.5 text-sm">
							<li>
								<Link
									to="/a-propos"
									className="hover:text-paper transition-colors"
								>
									À propos
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="hover:text-paper transition-colors"
								>
									Plans & tarifs
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="hover:text-paper transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-paper transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="min-w-0">
						<h3 className="font-mono text-xs uppercase tracking-wider text-paper/50 mb-4">
							Contact
						</h3>
						<ul className="space-y-2.5 text-sm">
							<li className="flex items-start min-w-0">
								<Icons.Mail className="w-4 h-4 mr-2.5 mt-0.5 shrink-0" />
								<a
									href="mailto:anthony.developpeurweb@gmail.com"
									className="hover:text-paper transition-colors break-words min-w-0"
								>
									anthony.developpeurweb[at]gmail[dot]com
								</a>
							</li>
							<li className="flex items-center">
								<Icons.Github className="w-4 h-4 mr-2.5 shrink-0" />
								<a
									href="https://github.com/GorskiAnthony"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-paper transition-colors"
								>
									GitHub
								</a>
							</li>
							<li className="flex items-center">
								<Icons.Linkedin className="w-4 h-4 mr-2.5 shrink-0" />
								<a
									href="https://www.linkedin.com/in/anthony-gorski/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-paper transition-colors"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-mono text-xs uppercase tracking-wider text-paper/50 mb-4">
							Légal
						</h3>
						<ul className="space-y-2.5 text-sm">
							<li>
								<Link
									to="/mentions-legales"
									aria-label="Mentions légales"
									className="hover:text-paper transition-colors"
								>
									Mentions légales
								</Link>
							</li>
							<li>
								<Link
									to="/politique-confidentialite"
									aria-label="Politique de confidentialité"
									className="hover:text-paper transition-colors"
								>
									Politique de confidentialité
								</Link>
							</li>
							<li>
								<Link
									to="/cgv"
									aria-label="CGV"
									className="hover:text-paper transition-colors"
								>
									CGV
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-14 pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper/40 font-mono">
					<p>© {new Date().getFullYear()} Anthony Gorski</p>
					<p>Marseille - France</p>
				</div>
			</div>
		</footer>
	);
}
