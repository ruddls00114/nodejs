const express = require('express')
const mysql = require('mysql')
const crypto = require('crypto')
const connection = require('../config/dbpool')
const async = require('async')
const router = express.Router()

router.post('/', (req, res) => {
  let Array = [
    (callback) => {
      connection.getConnection((err, result) => {
        if (err) {
          res.status(500).send({
            status: "fail",
            message: "DB connect err"
          })
          callback("DB connect err" + err)
        }
        else callback(null, connection)
      })
    },
    (connection, callback) => {
      //  { mail, pwd, name } = req.body
      const mail = req.body.mail
      const selectMailQuery = 'select user_mail from users where user_mail = ?'
      connection.query(selectMailQuery,mail,(err,result)=>{
        if(err){
          res.status(500).send({
            status : "fail",
            message : "select mail query err"
          })
          connection.release()
          callback("select mail query err"+err)
        }
        else if(result.length !==0){
          res.status(500).send({
            status : 'fail',
            message : 'mail duplicated'
          })
          connection.release()
          callback('mail duplicated')
        }else callback(null,connection)
      })
    },
    (connection,callback) =>{
      
    }


  ]
  async.waterfall(Array, (err, result) => {
    if (err)
      console.log(err)
    else
      console.log(result)
  })
})

module.exports = router