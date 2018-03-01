const express = require('express');
const app = express()

	/*
	expressjs.com/
	의미론적인 URL 
	*/
app.get('/topic',function(req,res){
	var topics =[
		'javascript is',
		'nodejs is ...',
		'express is ...'
	]
	var output= `
	<a href = "/topic?id=0">javascript</a><br>
	<a href = "/topic?id=1">nodejs</a><br>
	<a href = "/topic?id=2">express</a><br><br>
	${topics[req.query.id]}
	`
	res.send(output); 	//요청된 쿼리스트링id의 값

})
app.get('/',function(req,res){
	res.send("hello home page")
})

app.get('/login',function(req,res){
	res.send("<h2>login please<h2>")
})
app.listen(3000,function(){
	console.log('connected 3000 port')
})
