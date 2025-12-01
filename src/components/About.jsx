import React, { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    // Désactiver le scroll du body quand la modal est ouverte
    useEffect(() => {
        if (selectedBox !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedBox]);

    const boxDetails = {
        0: {
            title: "⚙️ Infrastructure & API",
            shortDesc: "API propriétaire indépendante, Base de données normalisée, et Architecture sécurisée (JWT, RBAC).",
            fullDesc: "Notre infrastructure repose sur une API propriétaire entièrement indépendante, conçue pour garantir une scalabilité maximale et une latence minimale. La base de données est normalisée selon les standards SQL, avec un schéma optimisé pour les requêtes fréquentes. Tous les échanges sont sécurisés via JWT (JSON Web Tokens) et RBAC (Role-Based Access Control) pour un accès granulaire.",
            features: [
                "API RESTful haute performance",
                "Base de données relationnelle optimisée",
                "Authentification JWT sécurisée",
                "Contrôle d'accès par rôles (RBAC)",
                "Infrastructure cloud scalable",
            ]
        },
        1: {
            title: "🧠 Intelligence Artificielle",
            shortDesc: "Modèles YOLO11 pour la détection, CNN pour le pré-gradage (état 0-10), et Séries Temporelles pour la prédiction de prix.",
            fullDesc: "Nous utilisons des modèles d'IA de pointe pour analyser vos cartes. YOLO11 détecte automatiquement les cartes sur les photos, tandis que nos CNN évaluent l'état physique de 0 à 10. Nos modèles de séries temporelles prédisent l'évolution des prix avec une précision remarquable.",
            features: [
                "Détection YOLO11 (détection objets en temps réel)",
                "CNN pour évaluation d'état (pré-gradage)",
                "Prédiction de prix (séries temporelles)",
                "Reconnaissance des variantes rares",
                "Analyses de tendances du marché",
            ]
        },
        2: {
            title: "🖥 Expérience Utilisateur",
            shortDesc: "Interface Mobile-First, Scan rapide, et Dashboard analytique pour suivre la valeur de votre collection.",
            fullDesc: "L'interface a été conçue en Mobile-First pour être accessible partout. Le processus de scan est optimisé pour être rapide et intuitif - seulement quelques secondes pour analyser une carte. Le dashboard analytique en temps réel vous permet de suivre la valeur totale de votre collection et les tendances.",
            features: [
                "Interface 100% responsive et intuitive",
                "Scan de cartes en moins de 3 secondes",
                "Dashboard personnalisé et analytique",
                "Graphiques en temps réel",
                "Export de données (CSV, PDF)",
                "Notifications de prix",
            ]
        }
    };

    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">La Solution CollectionR</h2>
                <p className="section-subtitle">
                    Une réponse technologique aux défis des collectionneurs, propulsée par l'IA.
                </p>

                <div className="pbs-grid">
                    {Object.entries(boxDetails).map(([key, box]) => (
                        <div 
                            key={key}
                            className="pbs-item"
                            onClick={() => setSelectedBox(parseInt(key))}
                        >
                            <h3>{box.title}</h3>
                            <p>{box.shortDesc}</p>
                            <button className="pbs-item-btn">Voir plus</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de détails */}
            {selectedBox !== null && (
                <div className="modal-overlay" onClick={() => setSelectedBox(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedBox(null)}>✕</button>
                        
                        <div className="modal-header">
                            <h2>{boxDetails[selectedBox].title}</h2>
                        </div>

                        <div className="modal-body">
                            <p className="modal-description">{boxDetails[selectedBox].fullDesc}</p>
                            
                            <h3>Fonctionnalités :</h3>
                            <ul className="modal-features">
                                {boxDetails[selectedBox].features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-footer">
                            <button className="modal-btn-close" onClick={() => setSelectedBox(null)}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;
