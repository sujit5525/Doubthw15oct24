const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sm",(req, res)=>{
let data = [req.body.name, req.body.doubt];

let from = "sujitkafare5525@gmail.com";
let to = "sujitmkafare@gmail.com";
let subject = "doubt from "+ req.body.name;
let text = "Name = " + req.body.name + "\nDoubt = "+ req.body.doubt;

let transporter = nodemailer.createTransport({
service : "gmail",
auth :{
user : "sujitmkafare@gmail.com",
pass : "kowqpidzwlbwtoww"
}
});
let mailOptions = {
from : from,
to : to,
subject : subject,
text : text
}
transporter.sendMail(mailOptions,(err,info)=>{
if(err)
{
res.status(500).json(err);
}
else
{
res.status(200).json("mail send");
}
});
});
app.listen(9000,()=>{console.log("ready@9000")});