export default function MentionsLegales() {
	const mentions = [
		{
			title: "2. Conditions générales d’utilisation",
			content:
				"L’utilisation du site www.agorski.dev implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions peuvent être modifiées à tout moment ; les utilisateurs sont donc invités à les consulter régulièrement. Le site est normalement accessible à tout moment. Une interruption pour raison de maintenance peut cependant être décidée par Anthony Gorski, qui s’efforcera d’en informer les utilisateurs au préalable.",
		},
		{
			title: "3. Description des services fournis",
			content:
				"Le site www.agorski.dev a pour objet de présenter les prestations et services proposés par Anthony Gorski, développeur web freelance. Il s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour. Toutes les informations sont données à titre indicatif et sont susceptibles d’évoluer.",
		},
		{
			title: "4. Limitations techniques",
			content:
				"Le site utilise les technologies modernes du web (HTML, CSS, JavaScript). Anthony Gorski ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. L’utilisateur s’engage à utiliser un matériel récent, exempt de virus et avec un navigateur mis à jour.",
		},
		{
			title: "5. Propriété intellectuelle",
			content:
				"Tous les contenus présents sur le site (textes, images, logos, icônes, etc.) sont la propriété exclusive d’Anthony Gorski, sauf mention contraire. Toute reproduction, modification ou publication de tout ou partie du site, sans autorisation expresse, est interdite. Toute exploitation non autorisée sera considérée comme constitutive d’une contrefaçon et poursuivie.",
		},
		{
			title: "6. Limitation de responsabilité",
			content:
				"Anthony Gorski ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l’utilisateur lors de l’accès au site. Il ne pourra non plus être tenu responsable des dommages indirects (perte de marché, perte de chance, etc.) liés à l’utilisation du site. En cas de contenu inapproprié dans un formulaire ou message envoyé via le site, Anthony Gorski se réserve le droit de le supprimer sans préavis.",
		},
		{
			title: "7. Données personnelles",
			content:
				"Le site peut collecter des données personnelles via les formulaires de contact (nom, prénom, email…). Ces données sont strictement confidentielles et ne sont utilisées que pour répondre aux demandes. Conformément à la loi 'Informatique et Libertés' et au RGPD, tout utilisateur dispose d’un droit d’accès, de rectification ou de suppression des données le concernant, en écrivant à : contact@agorski.dev. Aucune information personnelle n’est cédée à des tiers.",
		},
		{
			title: "8. Cookies",
			content:
				"La navigation sur le site www.agorski.dev peut entraîner l’installation de cookies. Ces cookies ne permettent pas l’identification de l’utilisateur, mais enregistrent des informations de navigation pour améliorer l’expérience. L’utilisateur peut configurer son navigateur pour refuser les cookies.",
		},
		{
			title: "9. Droit applicable",
			content:
				"Tout litige en lien avec l’utilisation du site www.agorski.dev est soumis au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social d’Anthony Gorski.",
		},
		{
			title: "10. Lexique",
			content:
				"Utilisateur : Internaute se connectant au site. Données personnelles : Informations permettant l’identification directe ou indirecte d’une personne physique.",
		},
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-32 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">
				Mentions légales – Conditions Générales d’Utilisation
			</h1>
			<p className="text-sm text-gray-500 mb-10">
				Dernière mise à jour : 29 mars 2025
			</p>

			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-2">
					1. Éditeur du site
				</h2>
				<p>
					Le présent site est édité par : <br />
					<strong>Anthony Gorski</strong>, Développeur web freelance
					<br />
					Contact :{" "}
					<a
						href="mailto:ton-email@email.com"
						className="text-blue-600 underline"
					>
						ton-email@email.com
					</a>
					<br />
					Site :{" "}
					<a
						href="https://www.agorski.dev"
						className="text-blue-600 underline"
					>
						www.agorski.dev
					</a>
					<br />
					Auto-entrepreneur immatriculé sous le numéro SIRET{" "}
					<strong>81375236700017</strong>
					<br />
					Adresse : Marseille 13013
				</p>
			</section>

			{mentions.map((section, index) => (
				<section key={index} className="mb-8">
					<h2 className="text-xl font-semibold mb-2">
						{section.title}
					</h2>
					<p>{section.content}</p>
				</section>
			))}
		</div>
	);
}
