const restful = require('node-restful')
const mongoose = restful.mongoose

const AgendaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true},
  telefone: { type: Number, required: true },
  endereco: { type: String, required: true },
})

module.exports = restful.model('Agenda', AgendaSchema)