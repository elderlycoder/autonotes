const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const variantsSchema = new Schema({
//    manufacturer: { type: String },
//    purchaseprice: { type: String },
//    sellingprice: { type: String },
// })

const partsSchema = new Schema({
   part: [{
      partname: {type: String},
      selectside: { type: String},
      selectplace: {type: String},
      CountPart: {type: Number}
      //variants: [variantsSchema]
   }]
})

const order = new Schema({
   idContact: {type: String},
   created: Date,
   desc: {type: String},
   parts: [partsSchema]
})

module.exports = mongoose.model('Order', order);
module.exports = mongoose.model('Parts', partsSchema)