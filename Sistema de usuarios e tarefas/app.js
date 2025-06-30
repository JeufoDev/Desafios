//
const express = require('express');
const helmet = require('helmet');
const app = express();

//Importando as rotas
const usuarioRotas = require('./api/rotas/rota.usuario');
const tarefaRotas = require('./api/rotas/rotas.tarefa');

app.use(express.json());
app.use(helmet());

//Acesso as rotas de usuario
app.use('/api/usuario', usuarioRotas);

//Acesso as rotas de tarefa
app.use('/api/tarefa', tarefaRotas)

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor em http://localhost:${port}`)
});