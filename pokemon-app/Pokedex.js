import React from 'react';
import Pokecard from "./Pokecard";

//Is provided, via props, an array of objects describing different pokemon, and 
//renders a sequence of Pokecard components.

function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h2>Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            id={p.name}
            id={p.type}
            id={p.exp}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;