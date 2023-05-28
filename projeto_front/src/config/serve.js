const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001; // Escolha uma porta adequada para o seu servidor

// Configuração do body-parser para análise de dados JSON
app.use(bodyParser.json());

// Rota para receber os dados do frontend e salvá-los no MongoDB
app.post('/Cadastro_Escola', async (req, res) => {
  try {
    // Conectar ao servidor MongoDB
    const client = await MongoClient.connect("mongodb+srv://gabrielrocha6033:tanjerina@cluster0.o1bfqin.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db('Escolas');

    // Obter a coleção onde os dados serão salvos
    const collection = db.collection('Cadastro_Escolas');

    // Inserir os dados no MongoDB
    await collection.insertOne(req.body);

    // Fechar a conexão com o MongoDB
    client.close();

    res.status(200).send('Dados salvos com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao salvar os dados');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}`);
});
