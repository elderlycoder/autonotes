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

router.post('/', urlencodedParser, async (req, res) => {
   
   let name = req.body.name,
      phone = req.body.phone,
      model = req.body.model,
      desc = req.body.desc,
      created = req.body.start;
      countPart = req.body.countPart
      const order = new Order({name: name, phone: phone, model: model, desc: desc, created: created, CountPart: countPart }) // поле в бд: передаваемый элемент
  
      try {
         await order.save()
         res.redirect('/')
       } catch (e) {
         console.log(e)
       }
     })
   

module.exports = router;