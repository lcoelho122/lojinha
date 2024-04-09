const express = require('express');
const router = express.Router();

const produtoConstroller = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const valorMiddleware = require('../middlewares/valorMiddleware');


/* GET produtos. */
router.get('/', produtoConstroller.findAll);
/* POST produtos. */
router.post('/', valorMiddleware.validatePreco, nomeMiddleware.validateNome, produtoConstroller.save);
/* PUT produtos. */
router.put('/', valorMiddleware.validatePreco, nomeMiddleware.validateNome, produtoConstroller.update);
/* DELETE produtos. */
router.delete('/:id', produtoConstroller.remove);

module.exports = router;
