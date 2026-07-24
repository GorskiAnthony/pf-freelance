---
title: "Next.js passe aux correctifs de sécurité planifiés : ce que révèle ce changement de politique"
excerpt: "Depuis le 21 juillet, Next.js publie ses failles de sécurité selon un calendrier mensuel annoncé à l'avance plutôt qu'au fil de l'eau. Le déclencheur : une RCE critique fin 2025 et une explosion du nombre de failles découvertes par l'IA. Ce que ça implique pour un projet Next.js déployé sur Vercel."
date: 2026-07-24
category: DevOps
readTime: 6
---

Le 21 juillet, l'équipe Next.js a publié son premier « security release » selon un nouveau format : neuf failles corrigées d'un coup, dans les versions 16.2.11 et 15.5.21, précédées d'une annonce préalable indiquant la date de publication et la gravité maximale attendue. Ce n'est pas qu'une question de calendrier - c'est un changement de philosophie sur la façon dont un framework aussi central que Next.js gère sa dette de sécurité, et la raison invoquée par Vercel mérite qu'on s'y attarde : l'IA découvre des failles plus vite que les équipes ne peuvent les corriger au coup par coup.

## Ce qui a été corrigé le 21 juillet

Neuf vulnérabilités, réparties en quatre de gravité haute et cinq de gravité moyenne. Le détail donne une bonne idée de la diversité des surfaces d'attaque d'une application Next.js moderne : un contournement du middleware d'authentification sur les applications App Router compilées avec Turbopack et une seule locale i18n configurée, une SSRF dans les configurations `rewrites()` et `redirects()` qui permet à un attaquant de faire pointer le serveur vers une destination de son choix, un déni de service dans l'API d'optimisation d'image via des fichiers SVG, une confusion de cache capable de faire ressortir la réponse d'une requête différente lorsque son corps contient des séquences UTF-8 invalides, et une divulgation non authentifiée des points d'entrée internes de Server Functions sur les sites combinant Cache Components et Server Actions. Rien d'exotique : ce sont des mécanismes que la plupart des projets Next.js actifs utilisent sans y penser - rewrites, optimisation d'image, cache de rendu.

## Pourquoi ce changement de politique maintenant

Ce nouveau format ne sort pas de nulle part. Il fait suite à React2Shell (CVE-2025-55182), une faille d'exécution de code à distance découverte en décembre 2025, notée au score maximal de gravité (10 sur 10), exploitable sur les applications React Server Components et Next.js par une simple requête HTTP malveillante - y compris sur une application vierge tout juste générée avec `create-next-app`. Elle a été activement exploitée en conditions réelles et inscrite au catalogue des vulnérabilités connues exploitées de la CISA. Une faille de cette gravité, sur un framework aussi répandu, change forcément la façon dont son éditeur pense sa politique de divulgation.

L'autre facteur que Vercel met en avant est plus structurel : le volume de failles découvertes grâce à l'IA explose. L'équipe cite en exemple la récente divulgation de Mozilla sur Firefox - 271 problèmes remontés en une seule fois, tous détectés par l'outil de recherche de vulnérabilités Mythos Preview d'Anthropic. Le raisonnement de Vercel est simple : si des outils IA peuvent désormais scanner un projet et faire remonter des dizaines de failles d'un coup, corriger et divulguer au fil de l'eau devient intenable - mieux vaut grouper les correctifs, prévenir à l'avance de la date et de la gravité attendue, pour que les équipes qui dépendent du framework puissent s'organiser plutôt que d'être prises de court. Les failles activement exploitées restent traitées en urgence, hors calendrier - ce nouveau rythme mensuel concerne le reste, pas les cas critiques.

## Ce qu'il faut vérifier sur votre propre projet

Trois réflexes concrets si vous faites tourner du Next.js, même sur un projet modeste :

- **Vérifiez votre version exacte.** Une dépendance non épinglée sur `^15.5.0` ou `^16.2.0` récupère le correctif au prochain `npm install`. Une version figée à un patch précis ne bouge pas toute seule - c'est à vous de déclencher la mise à jour.
- **Repérez si vous utilisez les fonctionnalités touchées.** `rewrites()`, `redirects()`, l'optimisation d'image intégrée, ou Cache Components avec des Server Actions : si l'un de ces mécanismes est actif sur votre projet, la mise à jour n'est pas optionnelle.
- **Abonnez-vous aux annonces plutôt que d'attendre de tomber dessus par hasard.** Le principe même de ce nouveau format est de prévenir à l'avance - autant en profiter pour planifier la mise à jour plutôt que la découvrir après coup.

## Ce que ça change pour vous

Si votre site ou votre application tourne sur Next.js et Vercel, ce changement de politique n'est pas qu'une curiosité côté éditeur - c'est un rappel qu'un framework à jour ne suffit pas s'il n'est pas surveillé activement. Un projet qui n'a pas été retouché depuis plusieurs mois peut se retrouver exposé à des failles corrigées depuis longtemps, simplement parce que personne n'a déclenché la mise à jour.

Dans mes missions de maintenance, c'est exactement ce que je surveille pour mes clients : les alertes de sécurité du framework et des dépendances critiques, pas seulement les demandes de fonctionnalités. Un pipeline CI/CD bien construit - avec des dépendances non figées sur des versions obsolètes et des tests qui valident une mise à jour avant qu'elle parte en production - transforme ce genre d'annonce en non-événement : une mise à jour de routine, plutôt qu'une course contre la montre le jour où la faille est rendue publique.
