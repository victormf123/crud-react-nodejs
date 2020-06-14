const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Agenda 
    const Agenda = require('../api/agenda/AgendaService')
    Agenda.register(router, '/agenda')

    // Rotas de Livros
    const Livros = require('../api/livros/LivrosService')
    Livros.register(router, '/livros')
}