// passo-a-passo

//1. importar o Express;
//2. importar o Router;
//3. importar o Controller;
//4. criar a rota que traz todos os itens;
//5. exportar o Router

const express = require("express");
const router = express.Router();
const controller = require('../controller/lendasPeController');

//TEMA: lendas Pernambucanas
// Filtro: Cidade
router.get('/lendasPe', controller.getAll);
router.get('/lenda',controller.getAllLocal);
router.get('/lendasPe/:id',controller.getByID);
router.get('/lendasPe/cidade/:cidade',controller.getByCidade);
router.get('/nomeLenda',controller.getAllNomeLendas);

module.exports = router
