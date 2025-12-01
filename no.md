# CollectionR – La Boîte à Outils Intelligente pour le Collectionneur de TCG 🃏✨

**Statut du Projet :** Définition de Périmètre (Semestre 7)  
**Durée :** Semestres 7 à 10 (S7 → S10)  
**Équipe :** 7 personnes (Backend, Frontend, IA/ML, DevOps, PM)

CollectionR est une plateforme logicielle intégrée, conçue spécifiquement pour les collectionneurs de Trading Card Games (TCG) qui nécessitent une gestion de collection centralisée, automatisée et basée sur l'intelligence artificielle. Notre objectif est de transformer la gestion manuelle et fastidieuse en une expérience fluide et analytique.

## 🚀 La Proposition de Valeur Unique

Le défi majeur du collectionneur est la difficulté à organiser, évaluer et suivre la valeur de ses collections physiques. CollectionR y répond par un triptyque de solutions basées sur l'IA et une API propriétaire :

| Défi Utilisateur | Solution CollectionR | Impact Clé |
|---|---|---|
| Ajout manuel carte par carte | Scan Simple & Batch (carte unique ou page de classeur) | Gain de temps : Ajout automatique de jusqu'à 16 cartes en une seule action. |
| Évaluation subjective de l'état | Pré-gradage IA automatique (bords, coins, centrage, rayures) | Objectivité : Score standardisé (0-10) pour l'évaluation du stock. |
| Suivi complexe de la valeur | Calcul automatique de la valeur totale et historique de prix | Analyse : Portefeuille d'investissement suivi avec tendances de prix et volatilité. |
| Dépendance aux APIs tierces | API CollectionR TCG autonome | Indépendance : Catalogue de données et prix unifié et fiable. |

## 🎯 Public Cible (Personas)

Notre solution est conçue pour des profils aux besoins bien définis :

- **Collecteur Passionné (Persona 1) :** Recherche une solution rapide pour organiser sa collection physique multi-jeux.
- **Investisseur TCG (Persona 2) :** Suit la valeur de son portefeuille, analyse les tendances de prix et la volatilité.
- **Revendeur Semi-Pro (Persona 3) :** Nécessite une évaluation d'état et un pré-gradage rapide pour évaluer son stock.

## 🛠 Architecture Technique & Composants Clés (PBS)

Le projet est structuré autour de cinq blocs majeurs (PBS) garantissant l'exhaustivité de la couverture.

### 1. ⚙️ Infrastructure Technique & API TCG

L'épine dorsale du projet est une API CollectionR TCG propriétaire visant l'indépendance totale vis-à-vis des sources de données externes.

- **Backend & API :** Spécification API et implémentation des endpoints /games, /sets, /cards, et /prices pour un catalogue autonome.
- **Base de Données :** Schéma BDD normalisé pour utilisateurs, collections, et stockage des séries chronologiques pour l'historique des prix.
- **Services IA (Inférence) :** Endpoints dédiés (ex. /detect, /grade, /predict-price) pour exposer les modèles d'apprentissage aux interfaces utilisateurs.
- **DevOps & CI/CD :** Mise en place d'environnements (Dev, Staging, Prod), d'un pipeline d'intégration/déploiement continu (GitHub Actions/Azure DevOps), et de monitoring centralisé (Grafana/ELK).
- **Sécurité :** Authentification JWT, contrôle d'accès basé sur les rôles (RBAC), et chiffrement des données.

### 2. 🧠 Intelligence Artificielle & Modèles (ML)

Notre différenciateur clé réside dans les trois modèles ML développés pour automatiser l'évaluation des cartes :

**Détection de Cartes :**
- **Modèle :** Utilisation d'un modèle type YOLO11 (ou équivalent) entraîné sur un dataset annoté de cartes TCG.
- **Fonction :** Identification précise des coordonnées de chaque carte à partir d'une seule image (scan multi-cartes).

**Pré-gradage / Analyse d'État :**
- **Modèle :** Réseau de neurones (CNN) pour extraire des features visuelles et attribuer un score de 0 à 10 en fonction de critères (coins, bords, centrage, rayures).
- **Livrable :** Score numérique et description utilisateur ({"score": 7, "description": "Très bon état"}).

**Prédiction de Prix :**
- **Modèles Testés :** Random Forest, modèles de séries temporelles (ARIMA/SARIMA), ou réseaux récurrents (RNN/LSTM).
- **Fonction :** Estimation du prix futur d'une carte basée sur plus de 15 variables (grade, rareté, historique prix, volume marché).

### 3. 🖥 Interfaces Utilisateurs (Frontend)

Une attention particulière est portée à l'UX Mobile-First pour les outils de scan, élément central de l'application.

- **Espace Utilisateur & Dashboard :** Vue synthétique des collections, valeur globale, et graphique de tendance.
- **Outils de Scan Avancés :** Écran caméra intuitif pour la détection et l'ajout groupé des cartes dans la collection.
- **Catalogue Global TCG :** Consultation des jeux, sets et cartes, avec filtres, recherche avancée et affichage des données de prix.
- **Rendu Visuel Réaliste :** Pipeline de normalisation et d'affichage pour un rendu photo-réaliste des cartes dans la fiche de détail.
- **Qualité UX :** Navigation fluide, design responsive sur tous les appareils, et tests d'accessibilité (WCAG AA minimum).

## 📅 Roadmap Semestrielle (WBS)

Le projet s'étend sur 4 semestres, avec des objectifs clairs à chaque jalon :

| Semestre | Objectif Principal | Livrable Clé |
|---|---|---|
| S7 | Idéation & Définition | WBS/PBS high-level, Teaser & Pitch, Recrutement Initial |
| S8 | Structuration & Planification | WBS/PBS détaillé, Management Plan, Roadmap S9-S10, Risk Register, Kick-off équipe |
| S9 | Développement du Noyau (MVP) | MVP Fonctionnel (API TCG de base, Espace User, Scan/Détection, Pré-gradage MVP), Documentation technique, Démo intermédiaire. |
| S10 | Finalisation & Stabilisation | Produit Final Stable, Prédiction de Prix, Optimisations UI/UX & Perf, Présentation Finale au Jury. |

## ⚠️ Dépendances & Hypothèses Critiques

Le succès du projet repose sur la mitigation proactive de risques :

- **Dataset d'entraînement :** La collecte et l'annotation des images TCG doivent commencer dès S7/S8. Mitigation : Prévoir le fallback sur des APIs publiques (Pokémon TCG API).
- **API TCG Opérationnelle :** L'API doit être fonctionnelle fin S8 pour débloquer le développement frontend et l'intégration IA en S9. Mitigation : Priorité Backend S7/S8 pour des endpoints minimaux.
- **Recrutement & Compétences :** Finalisation d'une équipe de 7 membres (Backend, IA/ML, Frontend, DevOps) avec les compétences requises.

---

## 🚀 Rejoignez CollectionR

Découvrez le code source, contribuez, et suivez notre progression sur les réseaux sociaux !

- [Repository GitHub](https://github.com)
- [Site Vitrine (dès S7)](https://example.com)
- [LinkedIn du Projet](https://linkedin.com)
- [Discord/Chat Communauté](https://discord.com)

**Avez-vous besoin d'aide pour rédiger un message d'appel à contributeurs pour le recrutement S7/S8 ?**
