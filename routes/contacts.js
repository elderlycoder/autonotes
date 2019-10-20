const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Contact = require('../model/contacts');//
const router = Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});


router.get('/', async (req, res) => {
   const isAddContact = true;
   const contacts = await Contact.find()
   res.render("contacts",{
     contacts: contacts,
     isAddContact

   }); 
});

router.post('/', urlencodedParser, async (req, res) => {
   
  let name = req.body.name,
     phone = req.body.phone,
     model = req.body.model,
     year = req.body.year,
     vin = req.body.vin
     desc = req.body.desc
     const contact = new Contact({name: name, phone: phone, model: model, year: year, vin: vin, desc: desc })
 
     try {
        await contact.save()
        //res.redirect('/')
      } catch (e) {
        console.log(e)
      }
    res.redirect('/contacts')
    })





module.exports = router;