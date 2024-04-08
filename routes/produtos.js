const express = require('express');
const router = express.Router();

const produtoConstroller = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const valorMiddleware = require('../middlewares/valorMiddleware');

// const mysql = require('mysql2/promise');

/* GET produtos. */
router.get('/', nomeMiddleware.validateNome, produtoConstroller.findAll);

/* PUT produtos. */
router.put('/', valorMiddleware.validatePreco, produtoConstroller.update);

/* POST produtos. */
router.post('/', produtoConstroller.save);

/* DELETE produtos. */
router.delete('/:id', produtoConstroller.remove);

module.exports = router;
