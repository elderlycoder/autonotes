const { Router } = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Order = require('../model/order')
const router = Router();


router.get('/', async (req, res) => {
   isOrders = true
   const orders = await Order.find({ userId: req.user })
   res.render("orders", {
      title: 'Страница с заказами',
      orders,
      isOrders
   }); 
});

module.exports = router;