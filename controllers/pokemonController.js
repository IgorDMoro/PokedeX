const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }   
};

const addPokemon = (req, res) => {
    const { nome, tipo, peso, altura, lvlPoder } = req.body
    pokemonModel.createPokemon(nome, tipo, peso, altura, lvlPoder)
    res.redirect('/')
};

const treinador = (req, res) => {
    const {nome, idade} = req.body
    
}

module.exports={ getAllPokemons, getPokemon, addPokemon};