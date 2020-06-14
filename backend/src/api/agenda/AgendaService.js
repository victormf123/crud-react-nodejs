const Agenda = require('./Agenda')
const errorHandler = require('../common/errorHandler')

Agenda.methods(['get', 'post', 'put', 'delete'])
Agenda.updateOptions({new: true, runValidators: true})
Agenda.after('post', errorHandler).after('put', errorHandler)

module.exports = Agenda