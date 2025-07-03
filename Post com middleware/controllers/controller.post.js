const cadastroPoster = (req, res) => {
    res.status(201).json({mensagem: 'Post criado com sucesso'})
};

module.exports = {cadastroPoster};