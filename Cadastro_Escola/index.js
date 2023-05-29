const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

const escolas = []; // Array para armazenar as escolas cadastradas

const contador = 0;

app.get('/escola', (req, res) => {
  res.send(escolas);
});

app.post('/escola', async (req, res) => {
  const { cnpj, razaosocial, endereco, cep, telefone, email } = req.body;
  const escola = {
    contador, cnpj, razaosocial, endereco, cep, telefone, email,latitude:null,longitude:null
  };

  await axios.post('http://localhost:10000/eventos', {
    tipo: 'EscolaCriada',
    dados: escola,
  });

  escolas.push(escola);
  res.status(201).send(escola);
});

app.post('/eventos', (req, res) => {
  const { tipo, dados } = req.body;
  if (tipo === 'EscolaCriada') {
    // Aqui você pode fazer algo com os dados da escola recebidos
    console.log(dados);
  }
  res.status(200).send({ msg: 'ok' });
});

app.listen(8000, () => {
  console.log('Cadastro Escola. Porta 8000');
});