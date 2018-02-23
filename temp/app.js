const express = require('express');
const app = express()
app.use(express.static('public'))
//public이라는 디렉토리의 정적파일을 불러올수 있다.
//localhost:3000/test.jpg , /test.txt 와 같이 /public/test.jpg 를 하지않아도 !
//서버를 가동시킨 후에 정적인 파일을 변경시키고 리로드 하면 서버를 재가동하지않아도 반영됨
app.get('/',function(req,res){
	res.send("hello home page")
})
app.get('/route',function(req,res){
	res.send('hello router, <img src ="/file.jpg">')
})
app.get('/dynamic',function(req,res){ 
	//서버를 가동시킨 후에 동적파일을 변경시킨다면 서버를 재가동 시켜야함 .
	var time = Date()
	var lis =''
	for(var i =0; i<5;i++){
		lis = lis + 'coding'
	}
	var output = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		Hello dynamic
		${time}
		${lis}
	</body>
	</html>
	`
	res.send(output)
})
app.get('/login',function(req,res){
	res.send("<h2>login please<h2>")
})
app.listen(3000,function(){
	console.log('connected 3000 port')
})
