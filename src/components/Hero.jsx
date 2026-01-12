import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    // 12 cartes : 4 Pokémon, 4 One Piece, 4 Yu-Gi-Oh!
    const cardsData = [
        // Pokémon (4)
        { id: 1, image: "https://images.pokemontcg.io/sv8pt5/161_hires.png" },
        { id: 2, image: "https://images.pokemontcg.io/swsh45sv/SV122_hires.png" },
        { id: 3, image: "https://images.pokemontcg.io/swsh12pt5/160_hires.png" },
        { id: 4, image: "https://images.pokemontcg.io/swsh45sv/SV107_hires.png" },
        
        // One Piece (4)
        { id: 5, image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP05-119_p5.png" },
        { id: 6, image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-093_p4.png" },
        { id: 7, image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP06-118_p1.png" },
        { id: 8, image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-118_p2.png" },
        
        // Yu-Gi-Oh! (4)
        { id: 9, image: "https://images.ygoprodeck.com/images/cards/10000.jpg" },
        { id: 10, image: "https://images.ygoprodeck.com/images/cards/33396948.jpg" },
        { id: 11, image: "https://images.ygoprodeck.com/images/cards/10000010.jpg" },
        { id: 12, image: "https://images.ygoprodeck.com/images/cards/89631139.jpg" },
    ];

    // Fonction pour mélanger le tableau (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const carouselCards = shuffleArray(cardsData);

    return (
        <section className="hero">
            <div className="hero-bg"></div>
            
            {/* Carrousel 3D rotatif en arrière-plan */}
            <div className="carousel-3d-container">
                <div className="carousel-3d">
                    {carouselCards.map((card, index) => (
                        <div
                            key={index}
                            className="carousel-3d-item"
                            style={{
                                '--card-index': index,
                                '--total-cards': carouselCards.length,
                            }}
                        >
                            <img src={card.image} alt={`card ${index}`} className="carousel-card-image" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title">
                    La Solution Intelligente <br />
                    <span className="text-gradient">pour le Collectionneur de TCG</span>
                </h1>
                <p className="hero-subtitle">
                    Gérez, évaluez et suivez la valeur de vos cartes avec la puissance de l'IA.
                </p>
                <div className="hero-actions">
                    <a href="#recruitment" className="btn-primary">Rejoindre l'équipe</a>
                    <a href="#about" className="btn-secondary">En savoir plus</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
