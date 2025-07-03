const express = require('express');
const helmet = require('helmet');
const { cadastroUsuario, logar } = require('./controllers/controller.usuario')
const { cadastroPoster } = require('./controllers/controller.post');
const { autenticar } = require('./middleware/autenticar');

const app = express()


app.use(express.json());
app.use(helmet());

//rotas de usuário
app.post('/api/usuario/cadastrar', cadastroUsuario);
app.post('/api/usuario/logar', logar);

//rotas de posts
app.post('/api/post/postar', autenticar, cadastroPoster);

const port = 3000;
app.listen(port, () =>{
    console.log(`Servidor em http://localhost:${port}`)
});