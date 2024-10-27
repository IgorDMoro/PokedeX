const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores().map(treinador => {
        // Busca as informações completas dos pokémons associados ao treinador
        const pokemons = treinador.pokemons.map(pokemonId => pokemonModel.getPokemonById(pokemonId));
        return { ...treinador, pokemons };  // Retorna o treinador com os detalhes dos pokémons
    });
    res.render('Treinadores', {treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

const addTreinador = (req, res) => {
    const { nome, idade, pokemons } = req.body;
    const pokemonNomes = pokemons.split(',').map(nome => nome.trim()); // Converte a string para array de nomes
    const validPokemons = pokemonNomes.map(nome => pokemonModel.getPokemonByName(nome)); // Busca os pokémons pelos nomes
    
    if (validPokemons.every(pokemon => pokemon)) {  // Verifica se todos os pokémons foram encontrados
        const pokemonIds = validPokemons.map(pokemon => pokemon.id); // Extrai os IDs dos pokémons encontrados
        treinadorModel.createTreinador(nome, idade, pokemonIds);
        res.redirect('/treinadores');
    } else {
        res.status(400).send('Um ou mais Pokémons são inválidos');
    }
};

module.exports = { getAllTreinadores, getTreinador, addTreinador };