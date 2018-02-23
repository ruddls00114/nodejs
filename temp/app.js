const express = require('express');
const app = express()
app.use(express.static('public'))
//public이라는 디렉토리의 정적파일을 불러올수 있다.
//localhost:3000/test.jpg , /test.txt 와 같이 /public/test.jpg 를 하지않아도 !
app.get('/',function(req,res){
	res.send("hello home page")
})
app.get('/route',function(req,res){
	res.send('hello router, <img src ="/file.jpg">')
})
app.get('/login',function(req,res){
	res.send("<h2>login please<h2>")
})
app.listen(3000,function(){
	console.log('connected 3000 port')
})
