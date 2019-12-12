const { Schema, model } = require('mongoose'); // подключаемся к пакету mongoose и забираем оттуда нужные объекты

const userSchema = new Schema({
   email: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
},
   contactId: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
      required: true
   }
   // contacts: {
   //    items: [{
   //       contactId: {
   //          type: Schema.Types.ObjectId,
   //          ref: 'Contact',
   //          required: true
   //       }
   //    }
   // ]
   // }
})

module.exports = model('User', userSchema)
