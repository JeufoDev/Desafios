const { randomUUID } = require('crypto');
const { usuarios } = require('../dados/dados')

const cadastroUsuario = (req,res) => {
    try{
        const{ nome, email } = req.body;
        if(!nome || !email){
            return res.status(400).json({mensagem: 'Não pode conter campos vazios'})
        }

        const verificaEmail = usuarios.find(e => e.email === email);
        if(verificaEmail){
            return res.status(400).json({mensagem: 'Email já cadastrado'});
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
    };
};

const logar = (req, res) => {
    try{
        const { email } = req.body;
        if(!email){
            return res.status(400).json({mensagem: 'Campo vazio'})
        };

        const verificaEmail = usuarios.find(e => e.email === email);
        if(!verificaEmail){
            return res.status(401).json({ mensagem: 'E-mail não encontrado' });
        };
        return res.status(200).json({token: 'abc123'});
    }catch (erro){
        res.status(500).json({erro: 'Erro ao fazer login'})
    };
};

module.exports = { cadastroUsuario, logar}