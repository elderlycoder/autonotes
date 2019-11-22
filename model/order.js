const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const variantsSchema = new Schema({
   variant: [{
      manufacturer: { type: String },
      purchaseprice: { type: String },
      sellingprice: { type: String },
   }]
})

const partsSchema = new Schema({
   part: [{
      partname: {type: String},
      selectside: { type: String},
      selectplace: {type: String},
      CountPart: { type: Number }
     // variants: [variantsSchema]
   }]
})

const order = new Schema({
   idContact: {type: String},
   created: Date,
   desc: {type: String},
   parts: [partsSchema],
   userId: {                     // ссылка на пользователя создавшего контакт
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
})
module.exports = {
   Variants: mongoose.model('Variants', variantsSchema),
   Parts: mongoose.model('Parts', partsSchema),
   Order:mongoose.model('Order', order)
}