const express =require('express')
const router = express.Router()
const http = require('http')

router.get('/',(req,res) =>{

res.status(200).send({
  stat : "success",
  data: {
     data : req.query.id
  }
})


});

module.exports = router
