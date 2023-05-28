const mongoose = require('mongoose')

const SonggDataSchema = new mongoose.Schema({
   razaosocial:String,
   cnpj:String,
   endereco:String,
   cep:String,
   telefone:String,
   email:String,
   senha:String
})

module.exports = mongoose.model('CadastroEscola' ,SonggDataSchema)