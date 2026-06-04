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
							<strong>Freelancer</strong> : 59€/mois – Site
							vitrine 1 page, responsive, support sous 48h
						</li>
						<li>
							<strong>Startup</strong> : 99€/mois – Site jusqu'à 5
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
			content: (
				<>
					<p className="mb-3">
						Les offres disponibles sur www.agorski.dev sont à prix fixes et
						clairement détaillées. Aucun devis préalable n'est émis pour ces
						prestations : la commande est validée par le paiement en ligne,
						effectué via la plateforme sécurisée Stripe. La prestation débute
						une fois le paiement confirmé.
					</p>
					<p className="mb-3">
						Pour la formule <strong>Enterprise (Sur mesure)</strong>, un
						échange préalable par email permet de définir le périmètre exact
						de la mission avant tout règlement.
					</p>
					<p className="mb-3">
						Pour les <strong>abonnements mensuels</strong>, le paiement est
						prélevé automatiquement à chaque date d'anniversaire du contrat.
						Le client peut résilier à tout moment, la résiliation prenant
						effet à la fin de la période en cours déjà réglée.
					</p>
					<p className="mb-3">
						Pour les <strong>cours particuliers</strong>, le paiement est
						exigible à la commande. Aucun remboursement n'est effectué une
						fois la première séance débutée.
					</p>
					<p className="text-sm bg-gray-50 border border-gray-200 rounded p-3">
						<strong>Renonciation au droit de rétractation :</strong> En
						application de l'article L221-28 du Code de la consommation, le
						client reconnaît expressément, en procédant au paiement, que la
						prestation commence immédiatement et renonce en conséquence à son
						droit de rétractation de 14 jours.
					</p>
				</>
			),
		},
		{
			title: "4. Retard de paiement et suspension des services",
			content: (
				<>
					<p className="mb-3">
						En cas de défaut de paiement à l'échéance, le prestataire se
						réserve le droit de{" "}
						<strong>
							suspendre immédiatement l'exécution des services en cours
						</strong>
						, sans mise en demeure préalable, jusqu'au complet règlement des
						sommes dues. La suspension des services ne constitue pas une
						faute du prestataire et ne donne droit à aucune indemnité au
						profit du client.
					</p>
					<p className="mb-3">
						Passé un délai de <strong>15 jours calendaires</strong> à compter
						de l'échéance impayée et sans régularisation, le prestataire se
						réserve le droit de{" "}
						<strong>résilier le contrat de plein droit</strong>, sans
						indemnité, et d'exiger le règlement immédiat de l'intégralité des
						sommes dues.
					</p>
					<p className="mb-3">
						Conformément aux articles L441-10 et suivants du Code de
						commerce, tout retard de paiement entraîne de plein droit :
					</p>
					<ul className="list-disc list-inside space-y-1 mb-3">
						<li>
							Des <strong>pénalités de retard</strong> calculées au taux
							directeur de la Banque Centrale Européenne majoré de 10 points,
							applicables dès le lendemain de la date d'échéance
						</li>
						<li>
							Une <strong>indemnité forfaitaire de 40€</strong> pour frais de
							recouvrement (art. D441-5 du Code de commerce)
						</li>
					</ul>
					<p>
						Ces pénalités sont applicables sans qu'un rappel soit nécessaire.
					</p>
				</>
			),
		},
		{
			title: "5. Délai de réalisation",
			content:
				"Le délai dépend du type de prestation et des échanges avec le client. Un planning estimatif est fourni en début de mission.",
		},
		{
			title: "6. Rétractation et annulation",
			content:
				"Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux prestations de services déjà commencées. Toute séance annulée moins de 24h avant l'horaire prévu est due.",
		},
		{
			title: "7. Responsabilités",
			content:
				"Anthony Gorski s'engage à fournir une prestation professionnelle et conforme aux échanges. Il ne pourra être tenu responsable de problèmes liés à un hébergeur tiers, une mauvaise utilisation du site livré ou des outils externes.",
		},
		{
			title: "8. Propriété intellectuelle",
			content:
				"Les livrables restent la propriété d'Anthony Gorski tant que la prestation n'est pas intégralement réglée. Une fois le paiement effectué, les droits d'usage sont transférés au client. Le client garantit qu'il détient les droits sur les contenus fournis.",
		},
		{
			title: "9. Données personnelles",
			content:
				"Les données collectées servent uniquement à la gestion de la prestation. Elles ne sont jamais cédées à des tiers. Conformément à la loi RGPD, vous pouvez demander la modification ou suppression de vos données en écrivant à anthony.developpeurweb@gmail.com.",
		},
		{
			title: "10. Litiges",
			content:
				"En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux compétents seront ceux de la juridiction dont dépend le siège d'Anthony Gorski.",
		},
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-32 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">
				Conditions Générales de Vente (CGV)
			</h1>
			<p className="text-sm text-gray-500 mb-10">
				Dernière mise à jour : 4 juin 2026
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
