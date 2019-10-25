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
// редактирование контакта
router.get('/:id/edit', async(req, res) => {
  const isEditContact = true;
  if (!req.query.allow){
    return res.redirect('/contacts');
  }

  const contact = await Contact.findById(req.params.id)
  res.render('editcontact', {
    title: 'Редактировать контакт',
    contact,
    isEditContact
  })
})

router.post('/edit',urlencodedParser, async (req, res) => {
  console.log(req.body.phone)
  await Contact.findByIdAndUpdate(req.body.id, req.body);
  res.redirect('/contacts');
})


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
        //res.redirect('/')
      } catch (e) {
        console.log(e)
      }
    res.redirect('/contacts')
    })





module.exports = router;