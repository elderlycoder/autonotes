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

// router.post('/', urlencodedParser, async (req, res) => {
   
//    let title = req.body.title,
//       phone = req.body.phone,
//       model = req.body.model;
//       const order = new Order({title: title, phone: phone, model: model })
  
//       try {
//          await order.save()
//          //res.redirect('/')
//        } catch (e) {
//          console.log(e)
//        }
//      })
   

module.exports = router;