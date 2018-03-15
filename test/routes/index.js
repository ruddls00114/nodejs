const express = require('express');
const router = express.Router();
const training = require('./training/index')
const signup =require('./signup')
const signin =require('./signin')
router.use('/training',training)
router.use('/signin',signin)
router.use('/signup',signup)


router.get('/',(req,res) =>{
  res.send({
    msg : 'ok'
  })
})
module.exports = router;
