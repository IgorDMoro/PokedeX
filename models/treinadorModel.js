const treinadores = [
    { id: 1, nome: 'Ash', idade: 10, pokemons: [1, 2] },  // Exemplo com IDs de pokémons
    { id: 2, nome: 'Marcus', idade: 12, pokemons: [3] },
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));
const createTreinador = (nome, idade, pokemons) => {
    const novoTreinador = { id: treinadores.length + 1, nome, idade, pokemons };
    treinadores.push(novoTreinador);
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };
