const express = require('express');
const http = require('http');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const { fstat } = require('fs');
const port = 3002;
const fs = require('fs')
var proxy = require('http-proxy').createProxyServer({
   host: `http://localhost:${port}`
})

app.use('/python' , (req , res)=>{
   proxy.web(req,res,{
      target: 'http://localhost:3001/python'
   })
})
// pythonya masih fail

// ejs challenge 3 & 4
app.set('view engine','ejs')


const server = http.createServer(app);
server.listen(port)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))

// built in middleware
app.use(express.static('public'))

// logi
app.use('/coba' , (req , res,next)=>{

   proxy.web(req,res),{
      target:'http://localhost:3003/coba'
   }

})
// home page
app.get('/' , (req , res)=>{

   res.render('index', {title: 'HOME PAGE'})

})
// about page
app.get('/about' , (req , res)=>{

    res.render('about',{title:'About'})
 
 })
// contact page
 app.get('/contact' , (req , res)=>{

    res.render('contact',{title:'Contact Us'})
 
 })
//  work page
 app.get('/work' , (req , res)=>{

    res.render('work',{title:'Work'})
 
 })

 
// Login
// app.get('/login' , (req , res)=>{
//    let userLength = user.length;
//    res.render('coba',{
//       name:userLength, 
//    })

// })

app.get('/login' , (req , res)=>{
   res.render('coba', {title: 'login'})
})
// app.post('/login' , (req , res)=>{
//    const {email, password } = req.body;
//    user.push({email,password})
//    res.redirect('/')
// })



// Challenge 4---------------------------------------------------------
// game
app.get('/suit' , (req , res)=>{

   res.render('chapterfour', {title: 'GAMEPLAY'})

})
module.exports=app;