const express = require('express');
const app = express()
app.use(express.json())

const aluno = {};
contador = 0;

  app.post('/aluno',  (req, res) => {
    contador++;
    const { nome, cpf, endereco, cep, telefone, email, senha, data } = req.body;
    aluno[contador] = {
      nome, cpf, endereco, cep, telefone, email, senha, data
    }
 
    res.status(201).send(aluno[contador]);
  });


  app.get('/aluno', (req, res) => {
    res.send(aluno);
  });

  app.listen(7000, () => {
    console.log('Cadastro Aluno. Porta 3000');
  });