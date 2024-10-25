const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
  { id: 2, nome: 'Squirtle', tipo: 'Água' },
  { id: 3, nome: 'Charmander', tipo: 'Fogo' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const getPokemonByName = (nome) => pokemons.find(p => p.nome.toLowerCase() === nome.toLowerCase()); // Busca pelo nome
const createPokemon = (nome, tipo) => {
  const novoPokemon = { id: pokemons.length + 1, nome, tipo };
  pokemons.push(novoPokemon);
};

module.exports = { getPokemons, getPokemonById, getPokemonByName, createPokemon };