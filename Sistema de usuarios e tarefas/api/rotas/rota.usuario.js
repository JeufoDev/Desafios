const express = require('express');
const {cadastroUsuario, mostraUsuarios} = require('../controllers/controller.usuario')

const rotas = express.Router();

//POST - Cadastrar usuário
rotas.post('/cadastro', cadastroUsuario);

//GET - Verificar todos os usuários
rotas.get('/usuarios', mostraUsuarios)

module.exports = rotas;