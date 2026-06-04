export const PolitiqueConfidentialite = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-32 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">
				Politique de confidentialité
			</h1>
			<p className="text-sm text-gray-500 mb-10">
				Dernière mise à jour : 4 juin 2026
			</p>

			{/* 1. Responsable */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">
					1. Responsable du traitement
				</h2>
				<p className="leading-relaxed">
					<strong>Anthony Gorski</strong> – Développeur web freelance<br />
					SIRET : 81375236700017<br />
					Email :{" "}
					<a
						href="mailto:anthony.developpeurweb@gmail.com"
						className="text-blue-600 underline"
					>
						anthony.developpeurweb@gmail.com
					</a>
				</p>
			</section>

			{/* 2. Données collectées */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">2. Données collectées</h2>
				<p className="mb-3">
					Selon le type d'interaction avec le site, les données suivantes
					peuvent être collectées :
				</p>
				<div className="overflow-x-auto">
					<table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
						<thead className="bg-gray-50">
							<tr>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Contexte
								</th>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Données
								</th>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Base légale (RGPD art. 6)
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-100">
								<td className="px-4 py-3">Formulaire de contact</td>
								<td className="px-4 py-3">
									Nom, email, message
								</td>
								<td className="px-4 py-3">
									Intérêt légitime (art. 6.1.f)
								</td>
							</tr>
							<tr className="border-b border-gray-100 bg-gray-50">
								<td className="px-4 py-3">Paiement en ligne</td>
								<td className="px-4 py-3">
									Données de facturation (traitées par Stripe)
								</td>
								<td className="px-4 py-3">
									Exécution du contrat (art. 6.1.b)
								</td>
							</tr>
							<tr className="border-b border-gray-100">
								<td className="px-4 py-3">Exécution de la prestation</td>
								<td className="px-4 py-3">
									Nom, email, échanges liés à la mission
								</td>
								<td className="px-4 py-3">
									Exécution du contrat (art. 6.1.b)
								</td>
							</tr>
							<tr className="bg-gray-50">
								<td className="px-4 py-3">Obligations comptables</td>
								<td className="px-4 py-3">
									Données de facturation
								</td>
								<td className="px-4 py-3">
									Obligation légale (art. 6.1.c)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			{/* 3. Durée de conservation */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">
					3. Durée de conservation
				</h2>
				<ul className="list-disc list-inside space-y-2 leading-relaxed">
					<li>
						<strong>Données de contact</strong> : 3 ans à compter du dernier
						contact, conformément aux recommandations de la CNIL
					</li>
					<li>
						<strong>Données clients / contrats</strong> : 5 ans à compter de
						la fin de la relation contractuelle (prescription civile)
					</li>
					<li>
						<strong>Données de facturation</strong> : 10 ans à compter de la
						clôture de l'exercice (obligation comptable – art. L123-22 du Code
						de commerce)
					</li>
					<li>
						<strong>Données de paiement</strong> : conservées par Stripe selon
						leur propre politique de confidentialité
					</li>
				</ul>
			</section>

			{/* 4. Sous-traitants */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">
					4. Sous-traitants et transferts hors UE
				</h2>
				<p className="mb-3">
					Certains prestataires tiers interviennent dans le traitement des
					données. Ils agissent en qualité de sous-traitants et sont soumis à
					des obligations de confidentialité :
				</p>
				<div className="overflow-x-auto">
					<table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
						<thead className="bg-gray-50">
							<tr>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Prestataire
								</th>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Rôle
								</th>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Localisation
								</th>
								<th className="text-left px-4 py-3 font-semibold border-b border-gray-200">
									Garanties
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-100">
								<td className="px-4 py-3 font-medium">Stripe</td>
								<td className="px-4 py-3">Paiement en ligne</td>
								<td className="px-4 py-3">USA</td>
								<td className="px-4 py-3">
									<a
										href="https://stripe.com/fr/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 underline"
									>
										Data Privacy Framework
									</a>
								</td>
							</tr>
							<tr className="border-b border-gray-100 bg-gray-50">
								<td className="px-4 py-3 font-medium">EmailJS</td>
								<td className="px-4 py-3">Envoi des emails de contact</td>
								<td className="px-4 py-3">USA</td>
								<td className="px-4 py-3">
									<a
										href="https://www.emailjs.com/legal/privacy-policy/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 underline"
									>
										Politique de confidentialité EmailJS
									</a>
								</td>
							</tr>
							<tr>
								<td className="px-4 py-3 font-medium">OVHcloud</td>
								<td className="px-4 py-3">Hébergement du site</td>
								<td className="px-4 py-3">France (UE)</td>
								<td className="px-4 py-3">
									<a
										href="https://www.ovhcloud.com/fr/personal-data-protection/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 underline"
									>
										Politique de confidentialité OVH
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="mt-3 text-sm text-gray-600">
					Les transferts hors UE (Stripe, EmailJS) sont encadrés par des
					garanties appropriées (clauses contractuelles types ou Data Privacy
					Framework UE–USA). L'hébergement est assuré en France par OVHcloud.
				</p>
			</section>

			{/* 5. Cookies */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
				<p className="mb-3">
					Le site utilise uniquement des cookies techniques strictement
					nécessaires à son bon fonctionnement (session, préférences). Aucun
					cookie publicitaire ou de tracking analytique tiers n'est déposé sans
					consentement préalable.
				</p>
				<p>
					Vous pouvez à tout moment configurer votre navigateur pour refuser ou
					supprimer les cookies déjà stockés. Le refus des cookies techniques
					peut affecter certaines fonctionnalités du site.
				</p>
			</section>

			{/* 6. Vos droits */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">6. Vos droits</h2>
				<p className="mb-3">
					Conformément au RGPD (articles 15 à 22), vous disposez des droits
					suivants sur vos données personnelles :
				</p>
				<ul className="list-disc list-inside space-y-1 mb-4">
					<li>
						<strong>Droit d'accès</strong> : obtenir une copie des données vous
						concernant
					</li>
					<li>
						<strong>Droit de rectification</strong> : corriger des données
						inexactes ou incomplètes
					</li>
					<li>
						<strong>Droit à l'effacement</strong> : demander la suppression de
						vos données (sous réserve des obligations légales)
					</li>
					<li>
						<strong>Droit à la limitation</strong> : restreindre le traitement
						dans certains cas
					</li>
					<li>
						<strong>Droit d'opposition</strong> : s'opposer à un traitement
						fondé sur l'intérêt légitime
					</li>
					<li>
						<strong>Droit à la portabilité</strong> : recevoir vos données dans
						un format structuré et lisible
					</li>
				</ul>
				<p className="mb-3">
					Pour exercer ces droits, contactez :{" "}
					<a
						href="mailto:anthony.developpeurweb@gmail.com"
						className="text-blue-600 underline"
					>
						anthony.developpeurweb@gmail.com
					</a>
					. Une réponse sera apportée dans un délai d'un mois.
				</p>
				<p className="text-sm bg-gray-50 border border-gray-200 rounded p-3">
					Si vous estimez que vos droits ne sont pas respectés, vous avez le
					droit d'introduire une réclamation auprès de la{" "}
					<a
						href="https://www.cnil.fr"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 underline"
					>
						CNIL
					</a>{" "}
					(Commission Nationale de l'Informatique et des Libertés) –
					www.cnil.fr.
				</p>
			</section>

			{/* 7. Sécurité */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">7. Sécurité</h2>
				<p className="leading-relaxed">
					Des mesures techniques et organisationnelles appropriées sont mises en
					œuvre pour protéger vos données contre tout accès non autorisé,
					divulgation, altération ou destruction. Les paiements sont intégralement
					gérés par Stripe, qui est certifié PCI-DSS niveau 1. Aucune donnée
					bancaire ne transite par les serveurs du site.
				</p>
			</section>

			{/* 8. Modifications */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-3">
					8. Modifications de la politique
				</h2>
				<p className="leading-relaxed">
					La présente politique peut être mise à jour à tout moment pour
					refléter des changements légaux ou opérationnels. La date de dernière
					mise à jour est indiquée en haut de cette page. En continuant à
					utiliser le site après toute modification, vous acceptez la politique
					révisée.
				</p>
			</section>
		</div>
	);
};
