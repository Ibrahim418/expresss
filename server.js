const express = require('express');
const app =express();
const port = 5000 ; //define port
const path=require('path');

// middelware
const logtime=function(req,res,next){
    const date=new Date()
    const day=date.getDay()
    const hours=date.getHours()
    if(day<6 && hours>=9 && hours <= 13) {next()}
    else{
        console.log('website not available')
        res.send('<h1>website not available</h1>')
    }
    }
    app.use(logtime) // call middelware

    app.get ('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/index.html'))
    })
    app.get('/contact',(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/contact.html')) 
    })
    app.get('/service',(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/service.html')) 
    })

    app.listen(port, (err)=>{
        if (err) throw err 
        console.log('server is runnig')
    })
    