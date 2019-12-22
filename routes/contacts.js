const { Router } = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Contact = require('../model/contacts'); //
const { Variants, Parts, Order } = require('../model/order');
const router = Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

// страница /contacts - вывводим все контакты
router.get('/', async (req, res) => {
  const isAddContact = true;
  const contacts = await Contact.find().populate('userId');
  res.render("contacts", {
    contacts: contacts,
    isAddContact

  });
});
// добавление контакта
router.post('/', urlencodedParser, async (req, res) => {
  let name = req.body.name,
    phone = req.body.phone,
    model = req.body.model,
    year = req.body.year,
    vin = req.body.vin,
    descContact = req.body.descContact,
    userid = req.user; // откуда? -> модель index.js стр.21
  console.log(userid)
  const contact = new Contact({
    name: name,
    phone: phone,
    model: model,
    year: year,
    vin: vin,
    descContact: descContact,
    userId: userid
  })

  try {
    await contact.save()
    //res.redirect('/')
  } catch (e) {
    console.log(e)
  }
  res.redirect('/contacts')
})
// редактирование контакта
router.get('/:id/edit', async (req, res) => {
  const isEditContact = true;
  if (!req.query.allow) {
    return res.redirect('/contacts');
  }
  const contact = await Contact.findById(req.params.id)
  console.log(contact)
  res.render('editcontact', {
    title: 'Редактировать контакт',
    contact,
    isEditContact
  })
});
// заказы  конкретного клиента
router.get('/:id/orders', async (req, res) => {
  const isContactOrders = true;
  // if (!req.query.allow) {
  //   return res.redirect('/contacts');
  // }
  const contact = await Contact.findById(req.params.id);
  console.log(contact)
  const orders = await Order.find({ idContact: req.params.id })
  res.render('contactorders', {
    title: 'Заказы клиента',
    orders,
    contact,
    isContactOrders
  })
});

router.post('/edit', urlencodedParser, async (req, res) => {
  await Contact.findByIdAndUpdate(req.body.id, req.body);
  res.redirect('/contacts');
})

// Удаление контакта
router.post('/delete', urlencodedParser, async (req, res) => {
  try {
    await Contact.deleteOne({
      _id: req.body.id
    })
    res.redirect('/contacts')
  } catch (e) {
    console.log(e);
  }
})





module.exports = router;