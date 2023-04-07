const express = require('express');
const app = express()
app.use(express.json())

const escola = {};
contador = 0;


app.get('/escola', (req, res) => {
    res.send(escola);
  });

app.post('/escola', (req, res) => {

    contador++;
    const { cnpj, razaosocial, endereco, cep, telefone, email, especializacao } = req.body;

    escola[contador] = {
      contador, cnpj, razaosocial, endereco, cep, telefone, email, especializacao
    }
    res.status(201).send(escola[contador]);


  });

  app.listen(10000, () => {
    console.log('Cadastro Escola. Porta 4000');
  });

