//import dotenv
require('dotenv').config()

//import express 

const express = require('express')
//import cors
const cors = require('cors')
//import router
const router = require('./router')
//import app
/* const appMiddleware = require('./middleware/appMiddleware') */

//import connect
 require('./connection') 

//create server
const pfServer = express()
//server using cors 
pfServer.use(cors())

//parse ths data  - middleware - parse the data
pfServer.use(express.json())
/* 
pfServer.use(appMiddleware) */

//use router
pfServer.use(router)

//exporting upload folder
pfServer.use('/upload', express.static('./uploads'))

//port 
const PORT = 4000 || process.env.PORT

//LISTEN 
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})

//get

 pfServer.get('/',(req, res)=>{
    res.send('get request recieved')
})

/* pfServer.post('/',(req, res)=>{
   res.send('post request recieved')
}) */

 /*   pfServer.put('/',(req, res)=>{
    res.send('put request recieved')
 }) */

/*  pfServer.delete('/',(req, res)=>{
        res.send('delete request recieved')
     }) */