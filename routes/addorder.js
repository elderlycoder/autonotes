const {Router} = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const {Variants, Parts, Order} = require('../model/order');
const Contact = require('../model/contacts'); //
//const {parse} = require('json-parser')
const router = Router();
//const express = require("express");
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
  if(req.body){
  let id = req.body.id,
    created = req.body.start,
    desc = req.body.desc,
    partname = req.body.partname,
    selectside = req.body.selectside,
    selectplace = req.body.selectplace,
    countPart = req.body.countpart,
    manufacturer = req.body.manufacturer,
    purchaseprice = req.body.purchaseprice,
      sellingprice = req.body.sellingprice;
      userid = req.user;
    for(const partIndex in partname) {
      detailname = req.body[manufacturer[`${partIndex}`]]
      console.log (detailname)
   }
   console.log(req.body)
  // let variants = [];
  //   for (let i = 0; i < 2; i++) {
  //     let variant = {};
  //     variant.manufacturer = manufacturer[i];
  //     variant.purchaseprice = purchaseprice[i];
  //     variant.sellingprice = sellingprice[i];
  //     variants.push(variant);
  //   }
  //  // console.log(variants)
  //   const v = new Variants({
  //   varaiant: variants
  // })
//console.log(v)
  let parts = [];
  for (let i = 0; i < partname.length; i++) {
    let part = {};
    part.partname = partname[i];
    part.selectside = selectside[i];
    part.selectplace = selectplace[i];
    part.CountPart = countPart[i];
    parts.push(part)
  }
  const p = new Parts({
    part: parts,
    //variants: v
  })
   // console.log(p)
  const order = new Order({
    idContact: id,
    created: created,
    desc: desc,
    parts: p,
    userId: userid
    
  })
  //console.log(order)
  try {
    await order.save();
    res.redirect('/')
  } catch (e) {
    console.log(e)
  }
  
} else {
  alert ('Добавьте запчасти!')
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