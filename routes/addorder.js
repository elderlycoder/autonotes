const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Order = require('../model/order');//
const Contact = require('../model/contacts');//
const router = Router();
const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});



router.get('/', async (req, res) => {
   const isAddOrder = true;
   const contacts = await Contact.find()
   res.render("addorder",{
     contacts: contacts,
     isAddOrder

   }); 
});

// добавление нового контакта на странице заказа
router.post('/', urlencodedParser, async (req, res) => {
  console.log(req.body)
 let name = req.body.name,
    phone = req.body.phone,
    model = req.body.model,
    year = req.body.year,
    vin = req.body.vin,
    descContact = req.body.descContact;
    const contact = new Contact({name: name, phone: phone, model: model, year: year, vin: vin, descContact: descContact })

    try {
       await contact.save()
       //res.redirect('/addorder')
     } catch (e) {
       console.log(e)
     }
   res.redirect('/contacts')
   })

// router.post('/', urlencodedParser, async (req, res) => {
//   let name = req.body.name,
//      phone = req.body.phone,
//      model = req.body.model,
//      year = req.body.year,
//      vin = req.body.vin,
//      descContact = req.body.descContact,
//       desc = req.body.desc,
//       created = req.body.start,
//       countPart = req.body.countPart;
//       const contact = new Contact({name: name, phone: phone, model: model, year: year, vin: vin, descContact: descContact });
//       const order = new Order({name: name, phone: phone, model: model, desc: desc, created: created, CountPart: countPart }); // поле в бд: передаваемый элемент
  
//       try {
//         await contact.save();
//          await order.save();
//          //res.redirect('/')
//        } catch (e) {
//          console.log(e)
//        }
//      })


   

module.exports = router;