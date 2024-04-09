const express = require('express');
const router = express.Router();
// const mysql = require('mysql2/promise');

const produtoConstroller = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const valorMiddleware = require('../middlewares/valorMiddleware');


/* GET produtos. */
router.get('/', produtoConstroller.findAll);

/* PUT produtos. */
router.put('/', valorMiddleware.validatePreco, nomeMiddleware.validateNome, produtoConstroller.update);

/* POST produtos. */
router.post('/', produtoConstroller.save);

/* DELETE produtos. */
router.delete('/:id', produtoConstroller.remove);

module.exports = router;
