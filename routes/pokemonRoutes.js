const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const treinadorController = require('../controllers/treinadorController');

// Rotas para pokémons
router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.post('/add-pokemon', pokemonController.addPokemon);

// Rota para exibir a lista de treinadores e o formulário integrado
router.get('/treinadores', treinadorController.getAllTreinadores);

// Rota para processar o formulário de cadastro de treinador
router.post('/treinadores', treinadorController.addTreinador);

module.exports = router;
