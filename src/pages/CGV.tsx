export default function ConditionsVente() {
	const sections = [
		{
			title: "1. Objet",
			content:
				"Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités de vente des prestations proposées par Anthony Gorski, développeur web freelance, sur le site www.agorski.dev : Création de sites web (abonnements mensuels) et Cours particuliers en développement web.",
		},
		{
			title: "2. Prestations",
			content: (
				<>
					<p className="mb-2 font-semibold">Création de site web</p>
					<ul className="list-disc list-inside mb-4">
						<li>
							<strong>Freelancer</strong> : 19€/mois – Site
							vitrine 1 page, responsive, support sous 48h
						</li>
						<li>
							<strong>Startup</strong> : 29€/mois – Site jusqu’à 5
							pages, design personnalisé, support sous 24h
						</li>
						<li>
							<strong>Enterprise</strong> : Sur devis –
							Application web sur mesure, support 24/7, SEO
							avancé, maintenance incluse
						</li>
					</ul>
					<p className="mb-2 font-semibold">Cours particuliers</p>
					<ul className="list-disc list-inside">
						<li>
							<strong>Cours individuel</strong> : 40€/heure
						</li>
						<li>
							<strong>Pack 5 cours</strong> : 150€ pour 5 heures
							(économie de 50€)
						</li>
					</ul>
				</>
			),
		},
		{
			title: "3. Commande et règlement",
			content:
				"Les commandes s’effectuent via formulaire de contact ou prise de rendez-vous par email. Un devis ou une facture est systématiquement envoyé avant règlement. Le paiement peut être effectué par virement bancaire, par carte via Stripe, ou tout autre moyen convenu. La prestation débute une fois le paiement reçu.",
		},
		{
			title: "4. Délai de réalisation",
			content:
				"Le délai dépend du type de prestation et des échanges avec le client. Un planning estimatif est fourni en début de mission.",
		},
		{
			title: "5. Rétractation et annulation",
			content:
				"Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas aux prestations de services déjà commencées. Toute séance annulée moins de 24h avant l’horaire prévu est due.",
		},
		{
			title: "6. Responsabilités",
			content:
				"Anthony Gorski s’engage à fournir une prestation professionnelle et conforme aux échanges. Il ne pourra être tenu responsable de problèmes liés à un hébergeur tiers, une mauvaise utilisation du site livré ou des outils externes.",
		},
		{
			title: "7. Propriété intellectuelle",
			content:
				"Les livrables restent la propriété d’Anthony Gorski tant que la prestation n’est pas intégralement réglée. Une fois le paiement effectué, les droits d’usage sont transférés au client. Le client garantit qu’il détient les droits sur les contenus fournis.",
		},
		{
			title: "8. Données personnelles",
			content:
				"Les données collectées servent uniquement à la gestion de la prestation. Elles ne sont jamais cédées à des tiers. Conformément à la loi RGPD, vous pouvez demander la modification ou suppression de vos données en écrivant à anthony.developpeurweb@gmail.com.",
		},
		{
			title: "9. Litiges",
			content:
				"En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux compétents seront ceux de la juridiction dont dépend le siège d’Anthony Gorski.",
		},
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-32 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">
				Conditions Générales de Vente (CGV)
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
}
