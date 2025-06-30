const { randomUUID } = require('crypto');
const { usuarios, tarefas } = require('../dados/dados');

//Função para cadastrar tarefa
const cadastroTarefa = (req, res) => {
    const {titulo, verificador, userId} = req.body;
    const usuario = usuarios.find(u => u.id === userId);

    try{
        if(!titulo || verificador === undefined || !userId){
            res.status(400).json({ mensagem: "Não pode conter campos vazios" })
        }else if(!usuario){
            res.status(404).json({ mensagem: 'Usuário não cadastrado' })
        };

        const novaTarefa = {
            id: randomUUID(),
            titulo,
            verificador,
            userId
        }
        tarefas.push(novaTarefa);
        res.status(201).json(novaTarefa);
    }catch (erro){
        res.status(500).json({ erro:'Não foi possível cadastrar' })
    }
};

//Função para mostrar todas as tarefas
const mostrarTarefas = (req, res) => {
    res.status(200).json(tarefas);
};

//Função para mostrar as tarefas de um usuário por id
const tarefasUsuario = (req, res) => {
    const { id } = req.params;
    const tarefasDoUsuario = tarefas.filter(u => u.userId === id);
    
    try{
        if(!tarefasDoUsuario){
            res.status(400).json({ mensagem:'Usuário não tem tarefas' });
        };
        res.status(200).json(tarefasDoUsuario)

    }catch (erro){ 
        res.status(500).json({ erro:'Não foi possível encontrar' })
    };
};

//Função para atualizar tarefa(Concluída ou não)
const atulaizaTarefa = (req,res) => {
    const { id } = req.params;
    const { verificador } = req.body;

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa){
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }
    
    if (verificador !== undefined) tarefa.verificador = verificador;
    res.status(200).json(tarefa);
};

const deletarTarefa = (req, res) => {
    const { id } = req.params;

    const tarefa = tarefas.findIndex(t => t.id === id);

    if(tarefa === -1){
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
    };

    tarefas.splice(tarefa, 1);
    res.status(204).send({ mensagem: "Excluído com sucesso" });
};

module.exports = { cadastroTarefa, mostrarTarefas, tarefasUsuario, atulaizaTarefa, deletarTarefa };