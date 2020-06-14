const restful = require('node-restful')
const mongoose = restful.mongoose

const LivrosSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  author: { type: String, required: true},
  editora: { type: String, required: true},
  area: { type: String, required: true},
})

module.exports = restful.model('Livros', LivrosSchema)