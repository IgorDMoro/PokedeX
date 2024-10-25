// Array inicial com os pokémons cadastrados
const pokemons = [
  { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
  { id: 2, nome: 'Squirtle', tipo: 'Água' },
  { id: 3, nome: 'Charmander', tipo: 'Fogo' },
];

// Retorna a lista completa de pokémons
const getPokemons = () => pokemons;

// Busca e retorna um pokémon específico pelo ID
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

// Busca e retorna um pokémon específico pelo nome (ignora maiúsculas e minúsculas)
const getPokemonByName = (nome) => pokemons.find(p => p.nome.toLowerCase() === nome.toLowerCase()); // Busca pelo nome

// Cria um novo pokémon com nome e tipo, gerando ID automático
const createPokemon = (nome, tipo) => {
  const novoPokemon = { id: pokemons.length + 1, nome, tipo };
  pokemons.push(novoPokemon);
};

module.exports = { getPokemons, getPokemonById, getPokemonByName, createPokemon };