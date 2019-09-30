const mongoose = require('mongoose'); // подключаем только нужные объекты из пакета mongoose (schema и model)
const Schema = mongoose.Schema;
const order = new Schema({
   name: {type: String},
   phone: {type: String},
   model: {type: String},
   desc: {type: String},
   created: Date
})

module.exports = mongoose.model('Order', order)