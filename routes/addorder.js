const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Order = require('../model/order'); //
const Contact = require('../model/contacts'); //
const router = Router();
const express = require("express");
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

router.post('/', urlencodedParser, async (req, res) => {
  let id = req.body.id,
    created = req.body.start,
    desc = req.body.desc,
    partname = req.body.partname,
    selectside = req.body.selectside,
    selectplace = req.body.selectplace,
    countPart = req.body.countpart;

  let parts = [];

  for (let i = 0; i < partname.length; i++) {
    let part = [];
    part.push(partname[i]);
    part.push(selectside[i]);
    part.push(selectplace[i]);
    part.push(countPart[i]);

    parts.push(part)
  }
  let json = JSON.stringify(parts)
  console.log(json)
  const p = new Parts ({part: json})
  const order = new Order({
    idContact: id,
    created: created,
    desc: desc,
    parts: p
  })

  try {
    await order.save();
    res.redirect('/')
  } catch (e) {
    console.log(e)
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
    descContact: descContact
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