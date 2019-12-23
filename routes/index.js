const express = require("express");
const router = express.Router();

const homeRoutes = require("./home");
const ordersRoutes = require("./orders");
const addorderRoutes = require("./addorder");
const contactsRoutes = require("./contacts");

router.use('/', homeRoutes);
router.use('/orders', ordersRoutes);
router.use('/addorder', addorderRoutes);
router.use('/contacts', contactsRoutes);

module.exports = router;
