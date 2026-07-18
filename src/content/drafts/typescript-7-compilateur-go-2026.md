---
title: "TypeScript 7 : le compilateur passé en Go divise les temps de build par 10 (mais pas pour tout le monde)"
excerpt: "Microsoft a livré début juillet un portage complet du compilateur TypeScript en Go. Les gains de performance sont réels et mesurés sur de vrais projets - mais une partie de l'écosystème ne peut pas encore en profiter. Ce qu'il faut savoir avant de migrer."
date: 2026-07-18
category: Web
readTime: 6
---

Le 8 juillet, TypeScript 7.0 est passé en disponibilité générale. Ce n'est pas une version mineure de plus : c'est la première fois que le compilateur tourne nativement, écrit en Go plutôt qu'en TypeScript lui-même. Après un an et demi de travail annoncé publiquement par Microsoft, le changement est maintenant dans les mains de tous les développeurs qui tapent `npm install -D typescript`.

## Un portage, pas une réécriture

Le point important à comprendre avant de s'emballer : TypeScript 7 n'est pas un nouveau langage de vérification de types avec des règles différentes. C'est un portage - le comportement de vérification, les messages d'erreur, la sémantique du système de types restent identiques à ceux de TypeScript 6. Ce qui change, c'est uniquement l'implémentation : compilée nativement en Go au lieu d'être interprétée en JavaScript, avec du multithreading à mémoire partagée que l'ancien compilateur ne pouvait pas exploiter. Concrètement, votre code TypeScript existant n'a besoin d'aucune modification pour bénéficier du changement - la migration se limite, dans l'immense majorité des cas, à une mise à jour de version.

## Des chiffres qui ne sortent pas d'un communiqué marketing

Ce qui rend ce lancement crédible, c'est que les gains annoncés sont mesurés sur de vrais projets open source, pas sur un benchmark synthétique isolé. Sur la base de code de VS Code elle-même, le temps de vérification de types passe de 125,7 secondes avec TypeScript 6 à 10,6 secondes avec TypeScript 7 - un facteur 11,9. D'autres projets connus donnent des résultats du même ordre : Sentry passe de 139,8 à 15,7 secondes (x8,9), Bluesky de 24,3 à 2,8 secondes (x8,7), Playwright de 12,8 à 1,47 seconde (x8,7).

L'autre chiffre qui compte au quotidien, c'est la réactivité dans l'éditeur : ouvrir un fichier contenant une erreur de type dans VS Code passe de 17,5 secondes à moins de 1,3 seconde. Le nouveau serveur de langage réduit aussi de plus de 80 % les commandes qui échouaient et de plus de 60 % les plantages, par rapport à TypeScript 6. Ce ne sont pas des gains cosmétiques : sur un projet de taille moyenne, ça veut dire ne plus attendre le compilateur entre deux modifications.

## Ce qui ne suit pas encore

Là où il faut tempérer l'enthousiasme : TypeScript 7.0 sort sans API programmatique stable - celle que les autres outils utilisent pour s'intégrer au compilateur. Microsoft prévoit de la livrer avec la version 7.1, attendue autour d'octobre 2026. En attendant, des outils qui dépendent de cette API pour faire leur propre vérification de types - Vue et son système de composants, la vérification des templates Angular, Svelte, Astro, MDX, ou encore `typescript-eslint` - ne peuvent pas basculer sur le nouveau compilateur tout de suite, même si le paquet `typescript` installé dans le projet est déjà en version 7.

Autrement dit : si votre stack repose sur un de ces outils, mettre à jour `typescript` aujourd'hui peut casser des vérifications de type que vous pensiez acquises, sans message d'erreur évident sur la cause. Ce n'est pas un problème pour un projet React ou Node « pur », mais ça l'est pour tout ce qui s'appuie sur un compilateur de templates tiers.

## Ce que ça change pour vous

Si vous faites développer ou maintenir un projet en TypeScript, il y a deux cas de figure très différents :

- **Projet React/Vite/Node classique, sans dépendance à un compilateur de templates tiers** : la mise à jour vers TypeScript 7 est en général sûre et le gain est immédiat, surtout si la base de code a grossi au point que le retour du compilateur commence à se faire sentir en cours de journée. C'est exactement le genre de stack que je construis - React, TypeScript, Vite - donc c'est un gain que mes clients récupèrent sans effort particulier de leur côté.
- **Projet avec Vue, Angular, Svelte ou une forte dépendance à `typescript-eslint`** : mieux vaut attendre la sortie de la 7.1 et sa nouvelle API programmatique avant de migrer en profondeur, ou au minimum tester la mise à jour dans une branche isolée avant de la généraliser.

Dans les deux cas, la bonne pratique reste la même que pour toute montée de version d'un outil aussi central : ne pas la faire un vendredi après-midi sur la branche principale. Sur les projets que j'accompagne, ce genre de mise à jour passe systématiquement par une CI qui fait tourner la suite de tests complète avant merge - c'est ce qui permet de profiter d'un gain de vitesse réel sans découvrir la régression en production trois semaines plus tard.
