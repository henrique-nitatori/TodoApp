const mongoose = require('mongoose')
const { mongo } = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')