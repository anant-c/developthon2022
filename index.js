const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const app = express()
const port = 3001;
app.use(express.json());
var router = express.Router();

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hackathon2022'
});

app.post('/api',(req,res)=>{
    console.log("API HIt",req.body.name);
    res.status(200);
     console.log("API Hit");
     conn.connect(function(err) {
        console.log(req.body)
        //  let payload = {
        //      name: "Anupam",
        //      email: "anupam@daffodilhealth.com",
        //      phoneNumner: "9600255848",
        //      medicine: "Paracetamol",
        //      address: "Dummy"
        //  }
        //  console.log("payload", payload);
        //  let a = payload.name;
        //  console.log(a);
        
         let sql = "INSERT INTO hackathon2022table (name, email, phoneNumber, medicine, address) VALUES ('"+req.body.name+"','"+req.body.phoneNumer+"', '"+req.body.email+"', '"+req.body.medicine+"','"+req.body.address+"')";
         conn.query(sql, function(err,result) {
             if(err) {
                res.send('Error');
                console.log("Error");
             }
            else {
                res.send('Success');
                console.log("Success");
             }
           });
       });
})

app.post('/apid',(req,res)=>{
    console.log("API HIt",req.body.name);
    res.status(200);
     console.log("API Hit");
     conn.connect(function(err) {
        console.log(req.body)
        //  let payload = {
        //      name: "Anupam",
        //      email: "anupam@daffodilhealth.com",
        //      phoneNumner: "9600255848",
        //      medicine: "Paracetamol",
        //      address: "Dummy"
        //  }
        //  console.log("payload", payload);
        //  let a = payload.name;
        //  console.log(a);
        
         let sql = "INSERT INTO delivery (name, address, phone, pickerName, pickerPhone) VALUES ('"+req.body.name+"','"+req.body.address+"', '"+req.body.phone+"', '"+req.body.pickerName+"','"+req.body.pickerPhone+"')";
         conn.query(sql, function(err,result) {
             if(err) {
                res.send('Error');
                console.log("Error");
             }
            else {
                res.send('Success');
                console.log("Success");
             }
           });
       });
})

// var express = require('express');

// var connection  = require('../database.js');
 
 
app.get('/medicines', function(request, response){
    conn.query('select * from hackathon2022table', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
            console.log("Error")
        } else {
            response.send(results);
            console.log("Success")
        }
    });
});

app.get('/medicined', function(request, response){
    conn.query('select * from delivery', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
            console.log("Error in del")
        } else {
            response.send(results);
            console.log("Success in del")
        }
    });
});