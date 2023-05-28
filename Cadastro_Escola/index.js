const express = require('express');
const app = express()
const axios = require ('axios')
app.use(express.json())
const cors = require('cors');
app.use(cors());

const escola = {};
contador = 0;

app.get('/escola', (req, res) => {
    res.send(escola);
  });

  app.post('/escola', async (req, res) => {
    contador++;
    const { cnpj, razaosocial, endereco, cep, telefone, email, especializacao } = req.body;
    escola[contador] = {
      contador, cnpj, razaosocial, endereco, cep, telefone, email, especializacao
    }
    await axios.post('http://localhost:10000/eventos', {
      tipo: 'EscolaCriada',
      dados:{
        contador, cnpj, razaosocial, endereco, cep, telefone, email, especializacao
      }
    })
    res.status(201).send(escola[contador]);
  });

  app.post('/eventos', (req, res) => {
    const { tipo, dados } = req.body;
    if (tipo === "EscolaCriada") {
      setEscolas((prevEscolas) => [...prevEscolas, dados]);
    }
    console.log(req.body)
    res.status(200).send({msg: 'ok'})
  })


  app.listen(8000, () => {
    console.log('Cadastro Escola. Porta 8000');
    
  })


