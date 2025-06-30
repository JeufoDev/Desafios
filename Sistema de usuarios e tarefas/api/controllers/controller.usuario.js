const { randomUUID } = require('crypto');
const { usuarios } = require('../dados/dados');

const cadastroUsuario = (req, res) => {
    try{
        const { nome, email } = req.body;
        if(!nome || !email){
            return res.status(400).json({mensagem: 'Não pode contem campo vazio'})
        };
    
        const verificaEmail = usuarios.find(e => e.email === email);
        if(verificaEmail){
            return res.status(400).json({mensagem: 'E-mail já cadastrado'});
        };
        
        const novoUsuario = {
            id: randomUUID(),
            nome,
            email
        };
        usuarios.push(novoUsuario);
        return res.status(201).json(novoUsuario);

    }catch (erro){
        res.status(500).json({erro: 'Erro ao cadastrar usuário'})
    }
};

const mostraUsuarios = (req, res) => {
    res.status(200).json(usuarios);
};

module.exports = {cadastroUsuario, mostraUsuarios}; 