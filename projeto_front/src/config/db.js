const MongoClient = require('mongodb').MongoClient;
const EventEmitter = require('events');

const url = 'mongodb+srv://gabrielrocha6033:tanjerina@cluster0.o1bfqin.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'escolas';

const eventEmitter = new EventEmitter();

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log('Conectado ao MongoDB Atlas!');
    const db = client.db(dbName);
    eventEmitter.emit('connected', db);
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  }
};

module.exports = {
  connectToDatabase,
  eventEmitter,
};
