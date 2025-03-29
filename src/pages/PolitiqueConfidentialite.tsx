export const PolitiqueConfidentialite = () => {
	const sections = [
		{
			title: "1. Introduction",
			content:
				"La présente politique de confidentialité a pour but d’informer les utilisateurs du site www.agorski.dev sur la manière dont leurs données personnelles sont collectées, utilisées et protégées. Anthony Gorski s’engage à respecter la confidentialité des données personnelles conformément au RGPD et à la loi Informatique et Libertés.",
		},
		{
			title: "2. Données collectées",
			content: (
				<>
					<p>Les données susceptibles d’être collectées sont :</p>
					<ul className="list-disc list-inside mt-2">
						<li>Nom et prénom</li>
						<li>Adresse email</li>
						<li>Numéro de téléphone (facultatif)</li>
						<li>
							Contenus des messages envoyés via le formulaire de
							contact
						</li>
						{/* <li>
							Données de navigation (adresse IP, type de
							navigateur, temps de visite…)
						</li> */}
					</ul>
				</>
			),
		},
		{
			title: "3. Utilisation des données",
			content: (
				<>
					<p>Les données collectées sont utilisées pour :</p>
					<ul className="list-disc list-inside mt-2">
						<li>Répondre aux demandes de contact</li>
						<li>Fournir les prestations convenues</li>
						<li>
							Envoyer des informations relatives aux services
							proposés
						</li>
						<li>Améliorer le site et l’expérience utilisateur</li>
						<li>Respecter les obligations légales</li>
					</ul>
				</>
			),
		},
		{
			title: "4. Consentement",
			content:
				"En utilisant le formulaire de contact ou en naviguant sur le site, vous consentez à la collecte et au traitement de vos données personnelles conformément à cette politique de confidentialité.",
		},
		{
			title: "5. Durée de conservation",
			content:
				"Les données sont conservées pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, ou pour se conformer à des obligations légales.",
		},
		{
			title: "6. Partage des données",
			content:
				"Les données ne sont ni vendues ni louées à des tiers. Elles peuvent être partagées avec des prestataires techniques pour des besoins strictement liés à l’exécution des services (hébergement, emailing, etc.). Tous les partenaires sont conformes au RGPD.",
		},
		{
			title: "7. Sécurité",
			content:
				"Anthony Gorski met en œuvre toutes les mesures nécessaires pour protéger les données personnelles contre tout accès non autorisé, altération ou destruction.",
		},
		{
			title: "8. Vos droits",
			content: (
				<>
					<p>
						Conformément au RGPD, vous disposez des droits suivants
						:
					</p>
					<ul className="list-disc list-inside mt-2">
						<li>Droit d’accès à vos données</li>
						<li>Droit de rectification</li>
						<li>Droit à l’effacement</li>
						<li>Droit à la limitation du traitement</li>
						<li>Droit d’opposition</li>
						<li>Droit à la portabilité des données</li>
					</ul>
					<p className="mt-2">
						Pour exercer ces droits, vous pouvez contacter Anthony
						Gorski par email à l’adresse :
						<a
							href="mailto:contact@agorski.dev"
							className="text-blue-600 underline"
						>
							{" "}
							contact@agorski.dev
						</a>
					</p>
				</>
			),
		},
		{
			title: "9. Cookies",
			content:
				"Le site utilise des cookies à des fins de mesure d’audience et de bon fonctionnement. Vous pouvez refuser les cookies en configurant votre navigateur.",
		},
		{
			title: "10. Modification de la politique",
			content:
				"Anthony Gorski se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.",
		},
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-32 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">
				Politique de Confidentialité
			</h1>
			<p className="text-sm text-gray-500 mb-10">
				Dernière mise à jour : 29 mars 2025
			</p>

			{sections.map((section, index) => (
				<section key={index} className="mb-8">
					<h2 className="text-xl font-semibold mb-2">
						{section.title}
					</h2>
					<div className="text-base leading-relaxed">
						{section.content}
					</div>
				</section>
			))}
		</div>
	);
};
