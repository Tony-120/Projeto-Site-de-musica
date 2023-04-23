const express = require('express');
const app = express()
app.use(express.json())

const aluno = {};
contador = 0;

  app.post('/aluno',  (req, res) => {
    contador++;
    const { cpf, nome, endereco, cep, telefone, email, especializacao } = req.body;
    aluno[contador] = {
      cpf, nome, endereco, cep, telefone, email, especializacao 
    }
 
    res.status(201).send(aluno[contador]);
  });


  app.get('/escola', (req, res) => {
    res.send(aluno);
  });

  app.listen(7000, () => {
    console.log('Cadastro Aluno. Porta 7000');
  });