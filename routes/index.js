const express = require("express"),
     router = express.Router(),

   homeRoutes = require("./home");
   ordersRoutes = require("./orders");
   addorderRoutes = require("./addorder");
   contactsRoutes = require("./contacts");
    
   router.use('/', homeRoutes);
   router.use('/orders', ordersRoutes);
   router.use('/addorder', addorderRoutes);
   router.use('/contacts', contactsRoutes);
    
   module.exports = router;
    