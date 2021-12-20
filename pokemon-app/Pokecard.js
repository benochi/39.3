import React from 'react';

//API url
const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//need https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

function Pokecard(props) {
  //concat URL with pokemon ID
  let imgId = `${POKE_API}${props.id}.png`
//Shows a single Pokemon, with their name, image, and type
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{ props.name }</div>
      <img className="Pokecard-img" src={imgId} />
      <div className="Pokecard-type">{ props.type }</div>
      <div className="Pokecard-exp">{ props.exp }</div>
    </div>
  )
}

export default Pokecard;