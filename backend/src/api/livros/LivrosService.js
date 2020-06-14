const Livros = require('./Livros')
const errorHandler = require('../common/errorHandler')

Livros.methods(['get', 'post', 'put', 'delete'])
Livros.updateOptions({new: true, runValidators: true})
Livros.after('post', errorHandler).after('put', errorHandler)

module.exports = Livros