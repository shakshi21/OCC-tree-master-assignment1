const express=require('express');

const server=express();

const port=3000;

server.use(express.json());

server.use(express.urlencoded({extended:true}));



server.get('/',(req,resp)=>{

    resp.setHeader("Content-Type","text/html")

    resp.sendFile(__dirname+'/index.html');

});