const validateNome = (req, res, next) => {
    const {body} = req;
    if (body.nome === '') {
        return res.status(400).json({message: 'O campo "nome" não pode ser vazio'});
    }
    if (body.nome == undefined) {
        return res.status(400).json({message: 'O campo "nome" é obrigatório'});
    }
    next();
};

module.exports = { validateNome };
