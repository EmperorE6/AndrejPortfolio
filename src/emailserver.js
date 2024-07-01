const express=require("express");
const nodemailer = require('nodemailer');
const bodyParser= require("body-parser");

const port=5000;
const app=express();
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile("/index.html")
})