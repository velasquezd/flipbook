import React from 'react'
import HTMLFlipBook from "react-pageflip";

function Book() {

  const pokemonData = [
    {
      id: "142",
      name: "Aerodactyl",
      types: ["Rock", "Flying"],
      description: "#10"
    },
    {
      id: "145",
      name: "Zapdos",
      types: ["Electric", "Flying"],
      description: "#9"
    },
    {
      id: "229",
      name: "Houndoom",
      types: ["Dark", "Fire"],
      description: "#8"
    },
    {
      id: "478",
      name: "Froslass",
      types: ["Ice", "Ghost"],
      description: "#7"
    },
    {
      id: "553",
      name: "Krookodile",
      types: ["Ground", "Dark"],
      description: "#6"
    },
    {
      id: "862",
      name: "Obstagoon",
      types: ["Dark", "Normal"],
      description: "#5"
    },
    {
      id: "474",
      name: "Porygon-Z",
      types: ["Normal"],
      description: "#4"
    },
    {
      id: "230",
      name: "Kingdra",
      types: ["Water", "Dragon"],
      description: "#3"
    },
    {
      id: "248",
      name: "Tyranitar",
      types: ["Rock", "Dark"],
      description: "#2"
    },
    {
      id: "181",
      name: "Ampharos",
      types: ["Electric"],
      description: "#1"
    }
  ];

  return (
    <HTMLFlipBook 
      width={370} 
      height={500}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      {/* Front Cover */}
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <img 
            src="/assets/Top-Favorite-Pokemon-5-23-2025.jpg" 
            alt="assets/Top-Favorite-Pokemon-5-23-2025" 
            className="pokemon-logo"
          />
        </div>
      </div>

      {/* Pokémon Pages */}
      {pokemonData.map((pokemon) => (
        <div className="page" key={pokemon.id}>
          <div className="page-content">
            <div className="pokemon-container">
              <img 
                src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`} 
                alt={pokemon.name} 
              />
              <div className="pokemon-info">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <p className="pokemon-number">#{pokemon.id}</p>
                <div>
                  {pokemon.types.map((type) => (
                    <span key={type} className={`pokemon-type type-${type.toLowerCase()}`}>
                      {type}
                    </span>
                  ))}
                </div>
                <p className="pokemon-description">{pokemon.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* End Cover Page */}
      <div className="page" style={{ background: '#3b4cca', color: 'white' }}>
        <div className="page-content cover back-cover" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>The End</h1>
          <p style={{ textAlign: 'center' }}>Thanks for reading my Top 10 Pokémon picks!</p>
          <img 
            src="/assets/wooper-removebg-preview.png" 
            alt="wooper thank you" 
            style={{ width: '150px', marginTop: '20px' }}
          />
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default Book;
