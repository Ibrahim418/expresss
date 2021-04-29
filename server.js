const express = require('express');
const app =express();
const port = 5000 ; //define port
const path=require('path');


const logtime=function(req,res,next){
    const date=new Date(Date.now())
    console.log(date)
    const day=date.getDay()
    const hours=date.getHours()
    if(day>0 && day<6 && hours>9 && hours < 17) next()
    else{
        console.log('website not available')
        res.redirect('/error.html')
        // res.send('<h1>website not available</h1>')
        // res.end()
    }
    }
    app.get('/error.html',(req,res)=>{
        res.sendFile(path.join(__dirname,'public','error.html'))
    })
app.use(logtime)
app.use(express.static(__dirname+"/public"))
// middelware

     // call middelware

    /* app.get ('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/index.html'))
    })
    app.get('/contact',(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/contact.html')) 
    })
    app.get('/service',(req,res)=>{
        res.sendFile(path.join(__dirname,'./public/service.html')) 
    })
 */
    app.listen(port, (err)=>{
        if (err) throw err 
        console.log('server is runnig')
    })
    