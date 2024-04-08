const validatePreco = (req, res, next) => {
    const {body} = req;
    if (body.preco === '') {
        return res.status(400).json({message:
            'O campo "preço" não pode ser vazio'});
    }
    if (body.preco == undefined) {
        return res.status(400).json({message:
            'O campo "preço" é obrigatório'});
    }
    next();
};

module.exports = {validatePreco};
