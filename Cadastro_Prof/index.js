const express = require('express');
const app = express()
app.use(express.json())

const professor = {};
contador = 0;


app.get('/professor', (req, res) => {
    res.send(professor);
  });

app.post('/professor', (req, res) => {

    contador++;
    const { cnpj, razaosocial, endereco, cep, telefone, email, especializacao } = req.body;

    professor[contador] = {
      contador, cnpj, razaosocial, endereco, cep, telefone, email, especializacao
    }
    res.status(201).send(professor[contador]);


  });

  app.listen(3000, () => {
    console.log('Cadastro Professor. Porta 3000');
  });

  
  