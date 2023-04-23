const express = require ('express')
const app = express()
const axios = require('axios')
app.use(express.json())

const ExibirDados = {}

const funcoes = {
  EscolaCriada: (escola) => {
    ExibirDados[escola.contador] = escola
  },
  ProfessorCriado: (professor) => {
    const profesorC = ExibirDados[professor.escolaId]['profesorC'] || []
    profesorC.push(professor)
    ExibirDados[observacao.escolaId]['profesorC'] = profesorC
  },

}

app.get('/escola', (req, res) => {
  res.status(200).send(ExibirDados)  
})

app.post('/eventos', (req, res) => {
  try{
    funcoes[req.body.tipo](req.body.dados);
  }
  catch(err){}
  res.status(200).send(ExibirDados)
})

app.listen(4000, async () => {
  console.log("Consulta. 4000")
  const resp = await axios.get('http://localhost:10000/eventos')
  resp.data.forEach((valor, indice, colecao) => {
    try{
      funcoes[valor.tipo](valor.dados)
    }
    catch(e){}
  })
})