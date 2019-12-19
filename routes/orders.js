const { Router } = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Order = require('../model/order')
const router = Router();


router.get('/', (req, res) => {
   res.render("orders",{
      isOrders: true,
      title: 'Страница с заказами'
   }); 
});

module.exports = router;