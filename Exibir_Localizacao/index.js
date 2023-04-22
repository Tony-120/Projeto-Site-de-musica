const express = require ('express')
const app = express()
const axios = require('axios')
app.use(express.json())

const ExibirCep = {}

const funcoes = {
  EscolaCastrada: (escola) => {
    ExibirCep[escola.contador] = escola
  },
}


app.get('/escola', (req, res) => {
  res.status(200).send(ExibirCep)  
})



app.listen(5000, () => {
    console.log('Consulta Escola. Porta 5000 ');
  });


