const express = require('express');
const router = express.Router();

CustomerController= require('../controllers/CustomerController');

router.get('/',CustomerController.initializeUi); 

module.exports=router;