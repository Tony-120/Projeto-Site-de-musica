const express = require('express');
const app = express()
const { v4: uuidv4 } = require('uuid');
app.use(express.json())
const ProfessorEscola = {};
const ProfesorId = {};
contador = 0;

  app.post('/escola/:id/professor',  (req, res) => {
    const idObs = uuidv4();
    const {cpf, nome, endereco, cep, telefone, email, especializacao } = req.body;

    const ProfessorEscola =
      ProfesorId[req.params.id] || [];
      ProfessorEscola.push({ id: idObs, cpf, nome, endereco, cep, telefone, email, especializacao });
      ProfesorId[req.params.id] =
      ProfessorEscola;

    res.status(201).send(ProfessorEscola);
  });


app.get('/escola/:id/professor', (req, res) => {
    res.send(ProfesorId[req.params.id] || []);
});


  app.listen(4000, () => {
    console.log('Cadastro Professor. Porta 4000');
  });

  
  