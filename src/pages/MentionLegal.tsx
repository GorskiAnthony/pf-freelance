export default function MentionsLegales() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-32 text-ink">
			<h1 className="font-display text-3xl md:text-4xl text-ink mb-4">Mentions légales</h1>
			<p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
				Dernière mise à jour : 4 juin 2026
			</p>

			{/* 1. Éditeur */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">1. Éditeur du site</h2>
				<p className="leading-relaxed text-slate">
					Le présent site est édité par :<br />
					<strong>Anthony Gorski</strong>, Développeur web freelance –
					Entrepreneur individuel<br />
					SIRET : <strong>81375236700017</strong><br />
					TVA : <em>Non applicable, art. 293 B du CGI</em><br />
					Adresse : Marseille (13), France<br />
					Email :{" "}
					<a
						href="mailto:anthony.developpeurweb@gmail.com"
						className="text-petrol underline hover:text-petrol-deep"
					>
						anthony.developpeurweb@gmail.com
					</a>
					<br />
					Site web :{" "}
					<a href="https://www.agorski.dev" className="text-petrol underline hover:text-petrol-deep">
						www.agorski.dev
					</a>
				</p>
			</section>

			{/* 2. Directeur de publication */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">
					2. Directeur de la publication
				</h2>
				<p>Anthony Gorski</p>
			</section>

			{/* 3. Hébergeur */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">3. Hébergeur</h2>
				<p className="leading-relaxed text-slate">
					Le site est hébergé par :<br />
					<strong>OVHcloud</strong><br />
					2 rue Kellermann – 59100 Roubaix, France<br />
					Site web :{" "}
					<a
						href="https://www.ovhcloud.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-petrol underline hover:text-petrol-deep"
					>
						www.ovhcloud.com
					</a>
				</p>
			</section>

			{/* 4. Propriété intellectuelle */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">
					4. Propriété intellectuelle
				</h2>
				<p className="leading-relaxed text-slate">
					L'ensemble des contenus présents sur le site www.agorski.dev (textes,
					images, logos, icônes, code source, etc.) est la propriété exclusive
					d'Anthony Gorski, sauf mention contraire. Toute reproduction,
					représentation, modification, publication ou adaptation, totale ou
					partielle, par quelque moyen que ce soit, est interdite sans
					autorisation écrite préalable, sous peine de poursuites pour
					contrefaçon.
				</p>
			</section>

			{/* 5. Responsabilité */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">
					5. Limitation de responsabilité
				</h2>
				<p className="leading-relaxed text-slate">
					Anthony Gorski s'efforce de fournir des informations exactes et à
					jour sur ce site, mais ne saurait garantir l'exactitude, la
					complétude ou l'actualité des informations diffusées. Il ne pourra
					être tenu responsable des dommages directs ou indirects résultant de
					l'accès au site ou de l'utilisation des informations qui y sont
					publiées. L'utilisateur est seul responsable de l'usage qu'il fait
					des informations fournies.
				</p>
			</section>

			{/* 6. Données personnelles */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">
					6. Données personnelles
				</h2>
				<p className="leading-relaxed text-slate">
					Le site est susceptible de collecter des données personnelles via les
					formulaires de contact et le processus de paiement. Ces données sont
					traitées conformément au Règlement Général sur la Protection des
					Données (RGPD – UE 2016/679) et à la loi Informatique et Libertés.
					Pour plus d'informations, consultez notre{" "}
					<a
						href="/politique-confidentialite"
						className="text-petrol underline hover:text-petrol-deep"
					>
						Politique de confidentialité
					</a>
					.
				</p>
			</section>

			{/* 7. Cookies */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">7. Cookies</h2>
				<p className="leading-relaxed text-slate">
					Le site www.agorski.dev peut utiliser des cookies techniques
					nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de
					tracking tiers n'est utilisé sans consentement explicite.
					L'utilisateur peut configurer son navigateur pour refuser ou supprimer
					les cookies à tout moment.
				</p>
			</section>

			{/* 8. Droit applicable */}
			<section className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
				<h2 className="font-display text-xl text-ink mb-3">8. Droit applicable</h2>
				<p className="leading-relaxed text-slate">
					Le présent site et ses contenus sont soumis au droit français. En cas
					de litige relatif à l'utilisation du site, et à défaut de résolution
					amiable, les tribunaux compétents seront ceux du ressort du siège
					d'Anthony Gorski.
				</p>
			</section>
		</div>
	);
}
