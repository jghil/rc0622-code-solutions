fetch('https://pokeapi.co/api/v2/pokemon/6')
  .then(res => res.json())
  .then(d => console.log('charizard:', d));
