import React from 'react';
import ReactDOM from 'react-dom/client';

function PokemonList(props) {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];
  const pokemonNames = pokedex.map(pokemon =>
    <li key={pokemon.name}>{pokemon.name}</li>
  );

  return (
    <ul>
      {pokemonNames}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<PokemonList pokedex={name} />);
