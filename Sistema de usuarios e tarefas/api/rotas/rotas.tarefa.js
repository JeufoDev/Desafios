const express = require('express');
const { cadastroTarefa, mostrarTarefas, tarefasUsuario, atulaizaTarefa, deletarTarefa } = require('../controllers/controller.tarefa');

const rotas = express.Router();

//POST - Cadastrar nova tarefa
rotas.post('/cadastro', cadastroTarefa);;

//GET - Mostrar as tarefas existentes
rotas.get('/tarefas', mostrarTarefas);

//GET - Mostrar tarefas de um usuário passanod ID
rotas.get('/tarefas/:id', tarefasUsuario);

//PUT - Atualizar um tarefa
rotas.put('/atualiza/:id', atulaizaTarefa);

//DELETE - Deletar uma tarefa por Id
rotas.delete('/deletar/:id', deletarTarefa);

module.exports = rotas;