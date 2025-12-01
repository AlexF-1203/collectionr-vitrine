import React, { useState, useEffect } from 'react';
import '../styles/Recruitment.css';

const Recruitment = () => {
    const [displayCards, setDisplayCards] = useState([]);

    // Toutes les cartes disponibles
    const allCards = [
        // Pikachu VMAX
        // Blue-Eyes White Dragon
        {
        name: "Umbreon VMAX (Moonbreon)",
        // Lien officiel HD de la carte (Set Evolving Skies)
        image: "https://images.pokemontcg.io/swsh7/215_hires.png",
        rarity: "Secret Rare (Alt Art)"
        },
        {
        name: "Shanks",
        // Version SP (Special Rare) avec le fond rose/vitrail
        image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-004_p4.png",
        rarity: "Special Rare (SP)"
        },
        {
        name: "Ten Thousand Dragon",
        // La carte du 10.000ème anniversaire. Fond rouge unique.
        image: "https://images.ygoprodeck.com/images/cards/10000.jpg",
        rarity: "10000 Secret Rare"
        },
        // Monkey D. Luffy (Gear 5)
    ];

    // Fonction pour récupérer les 3 cartes
    const getRandomCards = () => {
        return allCards;
    };

    useEffect(() => {
        setDisplayCards(getRandomCards());
    }, []);

    const cards = displayCards.map((card, index) => ({
        id: index + 1,
        title: card.name,
        image: card.image,
        rarity: card.rarity,
        color: ['#FFD700', '#FF6B35', '#8B5CF6'][index]
    }));

    return (
        <section id="recruitment" className="section recruitment">
            <div className="container recruitment-content">
                <div className="recruitment-text">
                    <h2 className="section-title">Rejoignez l'Aventure</h2>
                    <p className="recruitment-desc">
                        Nous sommes une équipe de 7 passionnés (Backend, Frontend, IA/ML, DevOps, PM) travaillant sur le futur de la collection TCG.
                        Nous cherchons des talents pour nous aider à construire cette vision.
                    </p>
                    <ul className="recruitment-list">
                        <li>🚀 Participez à un projet innovant (S7 à S10)</li>
                        <li>🧠 Travaillez sur des modèles IA avancés (YOLO, CNN)</li>
                        <li>🃏 Créez l'outil ultime pour les collectionneurs</li>
                    </ul>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScSPJpip2sBlWRckiRPvsTECfQa85a28Xu6RwiTH4rOwwyQKw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-large"
                    >
                        Postuler maintenant
                    </a>
                </div>
                <div className="recruitment-visual">
                    <div className="card-stack">
                        {cards.map((card, index) => (
                            <div key={card.id} className={`card card-${index + 1}`} style={{ '--card-color': card.color }}>
                                <div className="card-content">
                                    <img src={card.image} alt={card.title} className="card-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruitment;
