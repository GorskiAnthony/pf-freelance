export default function ConditionsVente() {
	const sections = [
		{
			title: "1. Objet",
			content:
				"Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités de vente des prestations proposées par Anthony Gorski, développeur web freelance, sur le site www.agorski.dev : création de sites web (paiement unique), hébergement & maintenance (abonnement), services à la carte et cours particuliers en développement web.",
		},
		{
			title: "2. Prestations",
			content: (
				<>
					<p className="mb-2 font-semibold text-ink">
						Création de site web (paiement unique)
					</p>
					<ul className="list-disc list-inside mb-4 text-slate">
						<li>
							<strong>Vitrine</strong> : 690€ – Site one-page
							professionnel, responsive, SEO de base, mise en
							ligne incluse
						</li>
						<li>
							<strong>Multi-pages</strong> : 1 490€ – Site
							jusqu'à 5 sections, design sur mesure, SEO avancé
						</li>
						<li>
							<strong>Sur mesure</strong> : Sur devis gratuit –
							Application web sur mesure, architecture et
							conseil technique inclus
						</li>
					</ul>
					<p className="mb-2 font-semibold text-ink">
						Hébergement &amp; maintenance (abonnement mensuel ou
						annuel, sans engagement)
					</p>
					<ul className="list-disc list-inside mb-4 text-slate">
						<li>
							<strong>Essentiel</strong> : 19€/mois (190€/an) –
							hébergement sécurisé, sauvegardes automatiques,
							supervision, support sous 48h
						</li>
						<li>
							<strong>Confort</strong> : 39€/mois (390€/an) –
							Essentiel + mises à jour, modifications mineures
							incluses, support prioritaire sous 24h
						</li>
					</ul>
					<p className="mb-2 font-semibold text-ink">
						Services à la carte
					</p>
					<ul className="list-disc list-inside mb-4 text-slate">
						<li>
							<strong>Développement à la carte</strong> : à
							partir de 450€, sur devis gratuit
						</li>
						<li>
							<strong>Audit SEO</strong> : 390€, paiement unique
						</li>
						<li>
							<strong>Maintenance seule</strong> : 35€/mois,
							sans engagement (site hébergé ailleurs)
						</li>
						<li>
							<strong>Conseil &amp; Accompagnement</strong> :
							110€/heure
						</li>
					</ul>
					<p className="mb-2 font-semibold text-ink">Cours particuliers</p>
					<ul className="list-disc list-inside text-slate">
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
					<p className="mb-3 text-slate">
						Les offres à prix fixe disponibles sur www.agorski.dev (Vitrine,
						Multi-pages, Hébergement Essentiel et Confort, Audit SEO,
						Maintenance seule, Conseil &amp; Accompagnement, Cours
						particuliers) sont clairement détaillées et ne nécessitent
						aucun devis préalable : la commande est validée par le paiement
						en ligne, effectué via la plateforme sécurisée Stripe. La
						prestation débute une fois le paiement confirmé.
					</p>
					<p className="mb-3 text-slate">
						Pour les offres <strong>Sur mesure</strong> et{" "}
						<strong>Développement à la carte</strong>, un devis gratuit est
						établi après échange sur le périmètre exact du besoin, avec une
						réponse sous 48h. Le règlement intervient à la validation du
						devis, avant le démarrage de la prestation.
					</p>
					<p className="mb-3 text-slate">
						Pour les <strong>abonnements</strong> (Hébergement, Maintenance
						seule), le paiement est prélevé automatiquement, mensuellement
						ou annuellement selon la formule choisie, à chaque date
						d'anniversaire du contrat. Le client peut résilier à tout
						moment, la résiliation prenant effet à la fin de la période en
						cours déjà réglée.
					</p>
					<p className="mb-3 text-slate">
						Pour les <strong>cours particuliers</strong>, le paiement est
						exigible à la commande. Aucun remboursement n'est effectué une
						fois la première séance débutée.
					</p>
					<p className="text-sm text-slate bg-white border border-mist p-4">
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
					<p className="mb-3 text-slate">
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
					<p className="mb-3 text-slate">
						Passé un délai de <strong>15 jours calendaires</strong> à compter
						de l'échéance impayée et sans régularisation, le prestataire se
						réserve le droit de{" "}
						<strong>résilier le contrat de plein droit</strong>, sans
						indemnité, et d'exiger le règlement immédiat de l'intégralité des
						sommes dues.
					</p>
					<p className="mb-3 text-slate">
						Conformément aux articles L441-10 et suivants du Code de
						commerce, tout retard de paiement entraîne de plein droit :
					</p>
					<ul className="list-disc list-inside space-y-1 mb-3 text-slate">
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
		<div className="max-w-4xl mx-auto px-4 py-32 text-ink">
			<h1 className="font-display text-3xl md:text-4xl text-ink mb-4">
				Conditions Générales de Vente (CGV)
			</h1>
			<p className="font-mono text-xs uppercase tracking-wider text-slate mb-12">
				Dernière mise à jour : 13 juillet 2026
			</p>

			{sections.map((section, index) => (
				<section key={index} className="mb-10 pt-8 border-t border-mist first:border-t-0 first:pt-0">
					<h2 className="font-display text-xl text-ink mb-3">
						{section.title}
					</h2>
					<div className="text-base leading-relaxed text-slate">
						{section.content}
					</div>
				</section>
			))}
		</div>
	);
}
