const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema({
   idContact: {type: String},
   created: Date,
   desc: {type: String},
   parts:  [{
      partname: {type: String},
      selectside: { type: String},
      selectplace: {type: String},
      CountPart: { type: Number },
      variant: [{
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
