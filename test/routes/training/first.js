const express =require('express')
const router = express.Router()
const crypto = require('crypto')


/*3. url:localhost:3000/training/first
 method : GET 으로접근시자신의이름,나이,학교,학과정보를응답합니다. 
 *JSON객체내성공실패여부,data는반드시담아주세요.
  4. url: localhost:3000/training/first method : POST body : name(string), pwd(string),age(int) 
으로접근시pwd를해싱하여이름,해싱된pwd, age, salt값을csv파일에저장합니다. */
router.get('/',(req,res) =>{
res.status(200).send({
  status : "success",
  data: {
    name: "정경인",
    age : 24,
    university:"인천대학교",
    major :"컴퓨터공학부"
  },
  msg : "succuessful find data"
})
});

router.post('/',(req,res)=>{
  const {name , age , pwd } = req.body
  var user_salt
  crypto.randomBytes(32,(err,buffer)=>{
  crypto.pbkdf2(pwd,buffer.toString('base64'),10000,64,'sha512',(err,hashing)=>{
        //(패스워드,솔트,반복 수,길이,알고리즘,콜백함수)
    if(err){
      res.status(400).send({
        status : "fail",
        msg  : "hashing fail"
      })
    }
    else{
      res.status(200).send({

        status : "success",
        data :{
          name : name,
          pwd : hashing.toString('base64'),
          age : age
        },
        msg  : "success hashing"
      
  })
}
  })
})
})


module.exports = router
