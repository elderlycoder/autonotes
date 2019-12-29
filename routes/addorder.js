const express = require("express");
const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Order = require('../model/order');
const Contact = require('../model/contacts'); //
const jsonParser = express.json()
const router = Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

router.get('/', async (req, res) => {
  const isAddOrder = true;
  const contacts = await Contact.find()
  res.render("addorder", {
    contacts: contacts,
    isAddOrder

  });
});


router.post('/', jsonParser, async (req, res) => {
  if (req.body) {
    let id = req.body.contact.ContactId,
      name = req.body.contact.name,
      
      date = req.body.orderDate,
      desc = req.body.orderDesc,
      countpart = req.body.countpart,
      status = req.body.orderStatus,
      state = req.body.orderState,
      partnames = req.body.partnames;
    let contact = {}
    contact.idContact = id
    contact.name = name
      console.log(req.body.contact.name)
//console.log(req.body)
    let variants = []
    for (let i = 0; i < partnames.length; i++) {
      let p = partnames[i].variant.length
      for (let k = 0; k < p; k++) {
        variants.push(partnames[i].variant[k])
      }
    }

    const order = new Order({
      contact: contact,
      created: date,
      desc: desc,
      status: status,
      state: state,
      countpart: countpart,
      parts: partnames,
      userId: req.user
    })
    try {

      //console.log(order.parts.variant)
      await order.save();
      //await variant.save()
      res.redirect('/contacts')
    } catch (e) {
      console.log(e)
    }

  } else {
    alert('Добавьте запчасти!')
  }
})

router.post('/newcontact', urlencodedParser, async (req, res) => {
  let name = req.body.name,
    phone = req.body.phone,
    model = req.body.model,
    year = req.body.year,
    vin = req.body.vin,
    descContact = req.body.descContact;
  const contact = new Contact({
    name: name,
    phone: phone,
    model: model,
    year: year,
    vin: vin,
    descContact: descContact,
    userId: req.user
  })

  const isNewContact = true;

  try {
    await contact.save();
    let lastc = await Contact.find().sort({
      '_id': -1
    }).limit(1);
    let end = lastc[0];
    //   const isAddOrder = true;
    //   const contacts = await Contact.find()
    res.render("newcontact", {
      end: end,
      isNewContact,
    })
  } catch (e) {
    console.log(e)
  }
})

router.get('/newcontact', async (req, res) => {
  const isNewContact = true;
  try {
    let lastc = await Contact.find().sort({
      '_id': -1
    }).limit(1);
    let end = lastc[0];
    res.render("newcontact", {
      end: end,
      isNewContact,
    })
  } catch (e) {
    console.log(e)
  }
})


module.exports = router;