---
title: "Pwn request : la faille GitHub Actions qui touchait Microsoft et Google (et probablement vos pipelines)"
excerpt: "Une équipe de chercheurs a trouvé plus de 300 chaînes d'attaque exploitables sur GitHub Actions chez des géants comme Microsoft, Google ou Cloudflare. GitHub a réagi en durcissant actions/checkout - voici ce que ça implique pour un pipeline CI/CD de petite structure."
date: 2026-07-13
category: DevOps
readTime: 6
---

Début juillet, un cabinet de recherche en sécurité a publié « Cordyceps », l'analyse d'une faille qui touchait des dépôts GitHub Actions chez Microsoft, Google, Apache ou Cloudflare. Sur environ 30 000 projets à fort impact passés au crible, plus de 300 chaînes d'attaque se sont révélées entièrement exploitables - sans qu'aucune exploitation en conditions réelles n'ait été confirmée à ce jour. Ce n'est pas un cas isolé : GitHub a justement passé les dernières semaines à durcir son action `checkout` officielle contre exactement ce type de faille. Si vous faites tourner des workflows CI/CD sur GitHub, ça vous concerne directement.

## Le « pwn request », une faille connue mais toujours active

Le principe s'appelle un « pwn request » : un workflow GitHub Actions déclenché par une pull request externe (via l'événement `pull_request_target`, qui donne accès aux secrets du dépôt) va, par erreur de configuration, aller chercher et exécuter le code de cette pull request non relue. Résultat : n'importe qui peut ouvrir une pull request depuis un fork et faire exécuter son propre code avec les pleins privilèges du pipeline - accès aux secrets, aux tokens de déploiement, parfois à des identifiants cloud.

Ce n'est pas une faille théorique. Le rapport Cordyceps rattache ce pattern à des campagnes déjà observées, dont une compromission ayant touché 170 paquets npm (dont une partie de l'écosystème TanStack Router). Les chercheurs ont documenté des chaînes en plusieurs étapes : une pull request non fiable déclenche un workflow peu privilégié, dont la sortie alimente un second workflow plus privilégié, dont le token final donne un accès complet à un projet cloud. Sur un dépôt Google, une chaîne de ce type permettait de prendre le contrôle total d'un repository Google Cloud depuis un simple commentaire de pull request.

## La réponse de GitHub : actions/checkout v7

GitHub a réagi en publiant `actions/checkout` v7 le 18 juin, qui bloque désormais par défaut les tentatives de récupérer le code d'une pull request de fork non relue à l'intérieur d'un workflow `pull_request_target` ou `workflow_run`. Le workflow échoue tout simplement plutôt que de s'exécuter avec du code non vérifié.

Le point important pour tout le monde : ce comportement va être rétroporté à toutes les versions majeures encore supportées le 16 juillet. Si votre pipeline référence `actions/checkout@v4` (sans épingler une version précise), vous récupérez automatiquement cette protection sans rien faire. En revanche, si vous épinglez une version mineure, un patch précis ou un SHA de commit exact, la mise à jour ne se fera pas toute seule - il faudra la déclencher vous-même, par exemple via Dependabot.

## Ce que ça implique concrètement pour votre pipeline

Trois vérifications à faire cette semaine si vous gérez des workflows GitHub Actions, même sur un petit dépôt :

- **Repérez vos workflows `pull_request_target` et `workflow_run`.** Ce sont les seuls concernés par cette faille - un `pull_request` classique n'a pas accès aux secrets du dépôt cible, donc le risque y est beaucoup plus faible.
- **Vérifiez comment vous épinglez `actions/checkout`.** Une référence à `@v4` ou `@v7` profite du rétroport automatique. Un SHA figé demande une mise à jour manuelle.
- **Ne contournez jamais la protection sans en avoir vraiment besoin.** GitHub a prévu une option d'échappement (`allow-unsafe-pr-checkout`) pour les cas légitimes où un workflow a réellement besoin d'exécuter du code de fork. Si vous n'êtes pas certain d'en avoir besoin, vous n'en avez pas besoin.

Le rapport Cordyceps insiste sur un point qui rejoint mon expérience terrain : la faille n'exige aucun privilège particulier. Un compte GitHub gratuit et anonyme suffit pour tester si un dépôt est vulnérable. Ce n'est pas un scénario d'attaque sophistiqué réservé aux grands comptes - c'est un test que n'importe qui peut lancer sur n'importe quel dépôt public.

## Ce que ça change pour vous

Si votre produit tourne avec un pipeline CI/CD sur GitHub - même simple, même sur une petite équipe - cette faille mérite un quart d'heure de vérification, pas un audit de sécurité complet. C'est typiquement le genre de sujet où le risque n'est pas la complexité technique de la faille, mais le fait qu'elle passe inaperçue parce que personne n'a le temps de relire les workflows CI une fois qu'ils tournent.

Dans mes missions DevOps, ce contrôle fait partie de ce que je vérifie systématiquement quand je reprends ou j'audite un pipeline GitHub Actions existant : quels événements déclenchent quels workflows, quels secrets sont exposés à quel niveau, et si les actions tierces utilisées sont épinglées correctement. Ce n'est pas un gros chantier - c'est exactement le genre de dette de sécurité qu'il vaut mieux traiter en une session ciblée plutôt que de découvrir après coup, une fois qu'un token de déploiement a fuité.
