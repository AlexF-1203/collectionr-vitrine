import React, { useState } from 'react';
import '../styles/CardShowcase.css';

const CardShowcase = () => {
    // État pour savoir quelle collection afficher
    const [activeCollection, setActiveCollection] = useState('pokemon');
    // On garde juste l'ID de la carte survolée pour gérer le focus
    const [hoveredId, setHoveredId] = useState(null);

    const pokemonCards = [
        {
            id: 1,
            name: "Charizard VMAX",
            image: "https://images.pokemontcg.io/sv8pt5/161_hires.png",
            rarity: "Secret Rare"
        },
        {
            id: 2,
            name: "Blastoise EX",
            image: "https://images.pokemontcg.io/swsh45sv/SV122_hires.png",
            rarity: "Full Art"
        },
        {
            id: 3,
            name: "Charizard Base Set",
            image: "https://images.pokemontcg.io/swsh12pt5/160_hires.png",
            rarity: "Classic"
        },
        {
            id: 4,
            name: "Pikachu VMAX",
            image: "https://images.pokemontcg.io/swsh45sv/SV107_hires.png",
            rarity: "Rainbow"
        }
    ];

    // Yu-Gi-Oh! Cards
    const yugiohCards = [
        {
        id: 5,
        name: "Ten Thousand Dragon",
        // Carte créée pour fêter la 10.000ème carte. Fond rouge unique. (~1500€)
        image: "https://images.ygoprodeck.com/images/cards/10000.jpg",
        rarity: "10000 Secret Rare"
    },
    {
        id: 6,
        name: "Exodia the Forbidden One",
        // Version "Starlight Rare" (brillance complète), extrêmement difficile à pull.
        image: "https://images.ygoprodeck.com/images/cards/33396948.jpg",
        rarity: "Starlight Rare"
    },
    {
        id: 7,
        name: "The Winged Dragon of Ra",
        // Version "Ghost Rare". L'image est un hologramme argenté quasi invisible/blanc.
        image: "https://images.ygoprodeck.com/images/cards/10000010.jpg",
        rarity: "Ghost Rare"
    },
    {
        id: 8,
        name: "Blue-Eyes White Dragon",
        // Version "Platinum Rare" ou Signature Kaiba.
        image: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
        rarity: "Premium Gold Rare"
    }
    ];

    // One Piece Cards
    const onepieceCards = [
       {
            id: 9,
            name: "Monkey D. Luffy (Gear 5)",
            // OP05 Manga Rare
            image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP05-119_p5.png",
            rarity: "Manga Rare (Super Parallel)"
        },
        {
            id: 12,
            name: "Marshall D. Teach",
            // OP09 Special Rare (SP) - Celle de ta première image
            image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-093_p4.png",
            rarity: "Special Rare (SP)"
        },
                {
            id: 10,
            name: "Roronoa Zoro",
            // OP06 Manga Rare
            image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP06-118_p1.png",
            rarity: "Manga Rare (Super Parallel)"
        },
        {
            id: 11,
            name: "Gol D. Roger",
            // OP09 Gold Manga Rare (Le remplacement de Ace)
            // C'est la version "Comic Parallel" dorée
            image: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-118_p2.png", 
            // Note: Si l'image ci-dessus ne charge pas, utilise : "https://www.onepiece-cardgame.com/images/cardlist/card/OP09-118_p2.png"
            rarity: "Gold Manga Rare (Super Parallel)"
        },
    ];

    // Sélectionner la bonne collection
    const cards = activeCollection === 'pokemon' ? pokemonCards : activeCollection === 'yugioh' ? yugiohCards : onepieceCards;

    return (
        <section className="card-showcase">
            <div className="container">
                <h2 className="section-title">Collection Premium</h2>
                
                {/* Navigation entre les collections */}
                <div className="collection-tabs">
                    <button 
                        className={`tab-button ${activeCollection === 'pokemon' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCollection('pokemon');
                            setHoveredId(null);
                        }}
                    >
                        Pokémon
                    </button>
                    <button 
                        className={`tab-button ${activeCollection === 'yugioh' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCollection('yugioh');
                            setHoveredId(null);
                        }}
                    >
                        Yu-Gi-Oh!
                    </button>
                    <button 
                        className={`tab-button ${activeCollection === 'onepiece' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCollection('onepiece');
                            setHoveredId(null);
                        }}
                    >
                        One Piece
                    </button>
                </div>

                <p className="section-subtitle">Survolez pour révéler les détails</p>

                {/* Ajout d'une classe si une carte est survolée pour gérer le flou global */}
                <div className={`gallery-container ${hoveredId !== null ? 'has-focus' : ''}`}>
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`gallery-card ${hoveredId === card.id ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredId(card.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="card-inner">
                                <img src={card.image} alt={card.name} className="card-img" />
                                {/* Effet de brillance holographique */}
                                <div className="holo-sheen"></div>
                                <div className="holo-glare"></div>
                            </div>

                            {/* Petit badge optionnel en bas */}
                            <div className="card-info">
                                <span>{card.rarity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardShowcase;