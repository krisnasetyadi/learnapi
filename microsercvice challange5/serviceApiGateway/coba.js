// const express = require('express');
// const http = require('http');
// const app = express();
// const morgan = require('morgan')
// const bodyParser = require('body-parser');
// const { fstat } = require('fs');
// const user = []
// const port = 3004;
// const fs = require('fs')
// const apl = require('./app')
// var proxy = require('http-proxy').createProxyServer({
//    host: `http://localhost:${port}`
// })
// const readline = require ('readline')


// // ejs challenge 3 & 4
// app.set('view engine','ejs')


// const server = http.createServer(app);
// server.listen(port)
// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: false}))

// // built in middleware
// app.use(express.static('public'))

// // Login
// app.get('/' , (req , res)=>{
//    let userLength = user.length;
//    res.render('coba',{
//       name:userLength, 
//    })

// })

// app.get('/coba' , (req , res)=>{
//    res.render('coba', {title: 'login'})
// })
// app.post('/coba' , (req , res)=>{
//    const {email, password } = req.body;
//    user.push({email,password})
//    res.redirect('/')
// })



// // app.listen(port,()=> console.log(chalk.green.bold(`Service User is on at ${port}`)))