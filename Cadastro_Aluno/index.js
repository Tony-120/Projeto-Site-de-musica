const express = require('express');
const app = express()
const { v4: uuidv4 } = require('uuid');
app.use(express.json())

const AlunoId = {};
contador = 0;

  app.post('/professor/:id/aluno',  (req, res) => {
    const idObs = uuidv4();
    const {cpf, nome, endereco, cep, telefone, email, especializacao } = req.body;

    const AlunoCadastrado =
      AlunoId[req.params.id] || [];
      AlunoCadastrado.push({ id: idObs, cpf, nome, endereco, cep, telefone, email, especializacao });
      AlunoId[req.params.id] =
      AlunoCadastrado;

    res.status(201).send(AlunoCadastrado);
  });


app.get('/professor/:id/aluno', (req, res) => {
    res.send(AlunoId[req.params.id] || []);
});


  app.listen(7000, () => {
    console.log('Cadastro Aluno. Porta 7000');
  });