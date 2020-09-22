import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/global'

function App() {
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const [pokemon, setPokemon ] = useState([])
const pkmInfoAll= [];
// const types=[];

 useEffect(()=>{
    getPokemon()
 },[])

async function getPokemon(){
  for(let i=1; i<=150;i++){
    pkmInfoAll.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }

  Promise.all(pkmInfoAll)
  .then(response =>{
    console.log(response)
    // types = response.types.map(types=> types.type.name)
    // console.log(types)

    setPokemon(response)
  })


}

  return (
    <>
    <div className="header">
      <h1>Pokedex</h1>
      
    </div>
    <div>
      <ul className="pkmcard">
        {pokemon.map(pkm=>(
          <li key={pkm.id} className={pkm.types[0].type.name} >
            <img src={pkm.sprites.front_default} alt={pkm.name} />
            <h2>{pkm.name}</h2>
            <h2>{pkm.types.map(types=> types.type.name).join(' | ')}</h2>


          </li>
        ))}
      </ul>
    </div>

    <GlobalStyle />
    </>
  );
}

export default App;
