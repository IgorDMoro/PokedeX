const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const treinadorController = require('../controllers/treinadorController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.post('/add-pokemon', pokemonController.addPokemon);

// Rotas para treinadores
router.get('/treinadores', treinadorController.getAllTreinadores);
router.get('/treinador/:id', treinadorController.getTreinador);
router.get('/add-treinador', (req, res) => res.render('addTreinador'));  // Rota para o formulário
router.post('/add-treinador', treinadorController.addTreinador);

module.exports = router;
