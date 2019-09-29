const mongoose = require('mongoose'); // подключаем только нужные объекты из пакета mongoose (schema и model)
const Schema = mongoose.Schema;
const order = new Schema({
   title: {type: String},
   phone: {type: String,
            required: [true, 'Укажите телефон']},
   model: {type: String}
})

module.exports = mongoose.model('Order', order)