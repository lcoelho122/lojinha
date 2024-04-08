const produtoService = require('../services/produtoService');

const findAll = async (req, res) => {
    const produtos = await produtoService.findAll();
    return res.status(200).json(produtos);
};

const save = async (req, res) => {
    const result = await produtoService.save(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[ERROR/SERVER]':
            'Falha ao salvar o novo produto'});
};

const update = async (req, res) => {
    const result = await produtoService.update(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[ERROR/SERVER]':
            'Falha ao atualizar o produto'});
};

const remove = async (req, res) => {
    const {id} = req.params;
    const result = await produtoService.remove(id);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[ERROR/SERVER]':
            'Falha ao remover o produto'});
};

module.exports = {
    findAll,
    update,
    save,
    remove,
};
