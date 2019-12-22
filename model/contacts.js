const mongoose = require('mongoose'); // подключаем только нужные объекты из пакета mongoose (schema и model)
const Schema = mongoose.Schema;
const schema = new Schema({
   name: { type: String },
   phone: {
      type: String,
      required: [true, 'Укажите телефон']
   },
   model: { type: String },
   year: { type: Number },
   vin: { type: String },
   descContact: { type: String },
   userId: {                     // ссылка на пользователя создавшего контакт
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
})

module.exports = mongoose.model('Contact', schema) 