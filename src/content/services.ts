import { Icons } from "../helpers/Icon";

export interface AlaCarteService {
	slug: string;
	icon: (typeof Icons)[keyof typeof Icons];
	name: string;
	description: string;
	price: string;
	priceNote: string;
	cta: string;
	serviceId: string | null;
	idealFor: string[];
	includes: string[];
	notIncluded: string[];
	process: { title: string; description: string }[];
}

export const alaCarteServices: AlaCarteService[] = [
	{
		slug: "developpement-a-la-carte",
		icon: Icons.Rocket,
		name: "Développement à la carte",
		description:
			"Une fonctionnalité, une intégration ou une refonte partielle - sans repartir sur un forfait complet.",
		price: "À partir de 450€",
		priceNote: "devis gratuit, réponse sous 48h",
		cta: "Décrire mon besoin",
		serviceId: null,
		idealFor: [
			"Ajouter une fonctionnalité à un site existant (recherche, filtres, espace client...)",
			"Intégrer une API tierce (paiement, calendrier, CRM, messagerie...)",
			"Corriger ou moderniser une partie précise d'une application",
			"Migrer un composant ou une page vers une nouvelle stack",
		],
		includes: [
			"Échange initial pour cadrer précisément le besoin et le périmètre technique",
			"Devis détaillé avec estimation du temps de développement",
			"Développement de la fonctionnalité, intégration ou refonte demandée",
			"Tests fonctionnels avant mise en production",
			"Déploiement sur votre environnement existant",
			"15 jours de garantie post-livraison pour corriger tout bug lié à la prestation",
		],
		notIncluded: [
			"La conception d'un site complet (voir les offres Création)",
			"L'hébergement et la maintenance récurrente (voir Hébergement ou Maintenance seule)",
		],
		process: [
			{
				title: "Prise de contact",
				description:
					"Vous décrivez votre besoin, je pose les questions techniques nécessaires pour bien cadrer.",
			},
			{
				title: "Devis gratuit",
				description:
					"Vous recevez un devis détaillé sous 48h, avec le périmètre exact et le délai estimé.",
			},
			{
				title: "Développement",
				description:
					"Je réalise la fonctionnalité en autonomie, avec un point d'avancement si le chantier dépasse quelques jours.",
			},
			{
				title: "Livraison",
				description:
					"Tests, déploiement et 15 jours de garantie pour ajuster si besoin.",
			},
		],
	},
	{
		slug: "audit-seo",
		icon: Icons.Search,
		name: "Audit SEO",
		description:
			"Un audit complet de votre référencement, avec un plan d'action clair et priorisé.",
		price: "390€",
		priceNote: "paiement unique",
		cta: "Commander mon audit",
		serviceId: "service_audit_seo",
		idealFor: [
			"Un site existant qui ne remonte pas sur Google malgré du contenu de qualité",
			"Avant une refonte, pour ne pas reproduire les mêmes erreurs",
			"Un diagnostic ponctuel, sans engagement de mise en œuvre",
		],
		includes: [
			"Audit technique complet : vitesse, Core Web Vitals, indexation, exploration par les moteurs de recherche",
			"Audit on-page : balises titres et meta descriptions, structure des titres, maillage interne",
			"Analyse de la concurrence et des mots-clés pertinents pour votre activité",
			"Vérification de la compatibilité mobile et de l'accessibilité de base",
			"Rapport détaillé avec un plan d'action priorisé (quick wins vs actions de fond)",
			"Session de restitution de 30 minutes en visio pour parcourir les résultats ensemble",
		],
		notIncluded: [
			"La mise en œuvre des recommandations (peut être commandée en développement à la carte ou lors d'une refonte)",
			"La rédaction de contenu éditorial",
		],
		process: [
			{
				title: "Analyse",
				description:
					"J'audite votre site avec des outils professionnels (Lighthouse, Search Console si accessible, analyse de mots-clés).",
			},
			{
				title: "Rapport",
				description:
					"Vous recevez un rapport écrit, clair et sans jargon inutile, sous 5 jours ouvrés.",
			},
			{
				title: "Restitution",
				description:
					"Un appel de 30 minutes pour répondre à vos questions et prioriser les actions.",
			},
		],
	},
	{
		slug: "maintenance-seule",
		icon: Icons.WrenchIcon,
		name: "Maintenance seule",
		description:
			"Votre site est hébergé ailleurs ? Je m'occupe des mises à jour, petites modifications et du support.",
		price: "35€",
		priceNote: "/mois, sans engagement",
		cta: "S'abonner",
		serviceId: "service_maintenance_solo_monthly",
		idealFor: [
			"Un site déjà hébergé ailleurs (agence précédente, autre prestataire) mais sans suivi actif",
			"Un besoin de tranquillité d'esprit sans changer d'hébergeur",
		],
		includes: [
			"Mises à jour régulières du CMS, des dépendances et des correctifs de sécurité",
			"Jusqu'à 2 modifications mineures de contenu par mois (textes, images, liens)",
			"Supervision de la disponibilité du site et alerte en cas d'incident",
			"Support par email avec réponse sous 48h",
			"Rapport mensuel résumant les interventions effectuées",
		],
		notIncluded: [
			"L'hébergement du site (déjà chez un autre prestataire) - voir les offres Hébergement si vous préférez tout centraliser",
			"Le développement de nouvelles fonctionnalités (voir Développement à la carte)",
			"Plus de 2 modifications mineures par mois (au-delà, facturation au cas par cas)",
		],
		process: [
			{
				title: "Accès",
				description:
					"Vous me donnez un accès (FTP, admin CMS ou dépôt Git) à votre environnement existant.",
			},
			{
				title: "Suivi mensuel",
				description:
					"Je surveille et j'interviens en continu, sans que vous ayez à demander quoi que ce soit.",
			},
			{
				title: "Demandes ponctuelles",
				description:
					"Vous m'envoyez vos petites modifications par email, traitées sous 48h.",
			},
		],
	},
	{
		slug: "conseil-accompagnement",
		icon: Icons.Brain,
		name: "Conseil & Accompagnement",
		description:
			"Une session pour faire le point sur vos choix techniques, votre architecture ou votre roadmap.",
		price: "110€",
		priceNote: "/heure",
		cta: "Réserver une session",
		serviceId: "service_conseil_1h",
		idealFor: [
			"Choisir une stack technique avant de démarrer un projet",
			"Faire auditer une architecture existante ou une décision technique",
			"Préparer une revue de code ou un audit de sécurité",
			"Prendre du recul en tant que lead technique ou fondateur non-technique",
		],
		includes: [
			"Un appel vidéo d'une heure, centré sur votre problématique précise",
			"Un regard extérieur et sans jargon sur vos choix techniques ou votre architecture",
			"Un compte-rendu écrit avec les points clés et les recommandations discutées",
			"La possibilité d'enchaîner plusieurs sessions pour un accompagnement dans la durée",
		],
		notIncluded: [
			"Le développement effectif des recommandations (voir Développement à la carte)",
			"Un engagement de disponibilité en dehors des créneaux réservés",
		],
		process: [
			{
				title: "Réservation",
				description:
					"Vous réservez votre créneau et précisez le sujet à aborder.",
			},
			{
				title: "Session",
				description: "Un appel d'une heure, concret et orienté décision.",
			},
			{
				title: "Suivi",
				description:
					"Vous recevez un compte-rendu écrit sous 48h avec les points à retenir.",
			},
		],
	},
];

export const getServiceBySlug = (slug: string) =>
	alaCarteServices.find((s) => s.slug === slug);
