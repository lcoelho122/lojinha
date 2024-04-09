const clienteService = require('../services/clienteService');

const findAll = async (req, res) => {
    const clientes = await clienteService.findAll();
    return res.status(200).json(clientes);
};

const save = async (req, res) => {
    const result = await clienteService.save(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[ERROR/SERVER]':
            'Falha ao salvar o novo cliente'});
};

const update = async (req, res) => {
    const result = await clienteService.update(req.body);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[ERROR/SERVER]':
            'Falha ao atualizar o cliente'});
};

const remove = async (req, res) => {
    const {id} = req.params;
    const result = await clienteService.remove(id);
    return result ?
        res.status(200).json() :
        res.status(400).json({'[ERROR/SERVER]':
            'Falha ao remover o cliente'});
};

module.exports = {
    findAll,
    update,
    save,
    remove,
};
