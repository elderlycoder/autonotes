const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const order = new Schema({
   contact: {
      idContact: { type: String },
      name: { type: String}
   },
   
   created: Date,
   desc: { type: String },
   status: { type: String },
   state: { type: String },
   parts:  [{
      partname: {type: String},
      selectside: { type: String},
      selectplace: {type: String},
      countpart: { type: Number},
      variant: [{
         number: { type: String },
         manufacturer: { type: String },
         provider: { type: String },
         purchaseprice: { type: String },
         sellingprice: { type: String },
      }]
   }],
   userId: {                     // ссылка на пользователя создавшего контакт
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
})

module.exports = mongoose.model('Order', order)
