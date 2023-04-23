const express = require('express');
const app = express()
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
app.use(express.json())
const ProfessorEscola = {};
const ProfesorId = {};
contador = 0;
 

  app.post('/escola/:id/professor', async  (req, res) => {
    const idObs = uuidv4();
    const {cpf, nome, endereco, cep, telefone, email, especializacao } = req.body;

    const ProfessorEscola =
      ProfesorId[req.params.id] || [];
      ProfessorEscola.push({ id: idObs, cpf, nome, endereco, cep, telefone, email, especializacao });
      ProfesorId[req.params.id] =
      ProfessorEscola;
      await axios.post('http://localhost:10000/eventos', {
      tipo: 'ProfessorCriado',
      dados: {
        id: idObs, cpf, nome, endereco, cep, telefone, email, especializacao, escolaId: req.params.id
      }
      })
    res.status(201).send(ProfessorEscola);
  });


app.get('/escola/:id/professor', (req, res) => {
    res.send(ProfesorId[req.params.id] || []);
});

app.post('/eventos', (req, res) => {
  console.log(req.body)
  try{
    funcoes[req.body.tipo](req.body.dados)
  }
  catch(err){}
  res.status(200).send({msg: 'ok'})
})



  app.listen(6000, () => {
    console.log('Cadastro Professor. Porta 6000');
  });

  
  