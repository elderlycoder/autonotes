const uuid = require('uuid/v4');
const fs = require('fs')
const path = require('path')

class Order{
   constructor(created, desc, partname) {
      this.created = created
      this.desc = desc
      this.partname = partname
      this.id = uuid()
   }
   //хэлпер ф-ия (метод)
   toJSON() {
      return {
         created: this.created,
         desc: this.desc,
         parts: [{
            partname: this.partname
         }],
         
         id: this.id
      }
   }

   async save() {
      const orders = await Order.getAll()
      orders.push(this.toJSON())
      console.log(orders)
      
      return new Promise((resolve, reject) => {
         fs.writeFile(path.join(__dirname, '..', 'data', 'orders.json'),
            JSON.stringify(orders),
            (err) => {
               if (err) {
               reject(err)
               } else {
                 resolve() 
            }
         })
      })
   }

   static getAll() {
      return new Promise((resolve, reject) => {
         fs.readFile(path.join(__dirname, '..', 'data', 'orders.json'),
            'utf-8',
            (err, content) => {
               if (err) {
               reject(err)
               } else {
                 resolve(JSON.parse(content)) 
            }
         })
      })
      
   }
}

module.exports = Order
