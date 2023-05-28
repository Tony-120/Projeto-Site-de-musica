const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors()); 
const axios = require ('axios')
//require('../projeto_front/src/config/dbConfig')

// Use o middleware cors para permitir todas as origens

const aluno = {};
contador = 0;

app.post('/aluno',  async(req, res) => {
  contador++;
  const { nome, cpf, endereco, cep, telefone, email, senha, data } = req.body;
  aluno[contador] = { nome, cpf, endereco, cep, telefone, email, senha, data };
  await axios.post('http://localhost:10000/eventos', {
    tipo: 'AlunoCriado',
    dados:{
      contador, nome, cpf, endereco, cep, telefone, email, senha, data
    }
  })
  res.status(201).send(aluno[contador]);
});

app.post('/eventos', (req, res) => {
  const { tipo, dados } = req.body;
  if (tipo === "AlunoCriado") {
    setAlunos((prevAluno) => [...prevAluno, dados]);
  }
  console.log(req.body)
  res.status(200).send({msg: 'ok'})
});

app.get('/aluno', (req, res) => {
  res.send(aluno);
});

app.listen(5000, () => {
  console.log('Cadastro Aluno. Porta 5000');
});


  
