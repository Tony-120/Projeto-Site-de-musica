const express = require('express');
const app = express()
const { v4: uuidv4 } = require('uuid');
app.use(express.json())
const AlunoId = {};
const Especializacao={};
contador = 0;

  app.post('/professor/especializacao/aluno',  (req, res) => {
    const idObs = uuidv4();
    const {cpf, nome, endereco, cep, telefone, email, especializacao } = req.body;
    //req.params dá acesso à lista de parâmetros da URL
    const Especializacao =
      AlunoId[req.params.id] || [];
      Especializacao.push({ especializacao: idObs, cpf, nome, endereco, cep, telefone, email, especializacao });
      AlunoId[req.params.id] =
      Especializacao;
  
    res.status(201).send(Especializacao);
  });


app.get('/professor/especializacao/aluno', (req, res) => {
    res.send(AlunoId[req.params.id] || []);
});


  app.listen(6000, () => {
    console.log('Cadastro Professor. Porta 4000');
  });