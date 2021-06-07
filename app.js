const express = require('express');
const app = express();
const path = require('path');

app.listen(3040,()=>console.log('Servidor corriendo'));
app.get("/", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/index.html")));

app.get("/babbage", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/babbage.html")));

app.get("/berners-lee", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/berners-lee.html")));

app.get("/clarke", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/clarke.html")));

app.get("/hamilton", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/hamilton.html")));

app.get("/hopper", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/hopper.html")));

app.get("/lovelace", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/lovelace.html")));

app.get("/turing", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/turing.html")));

//mios
app.get("/Proyectos", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/misProyectos.html")));
app.get("/Contacto", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/contacto.html")));
app.get("/Redes", (req,res)=>res.sendFile(path.join(__dirname,"/DH-Heroes/views/redes.html")));



app.use(express.static(path.join(__dirname, 'DH-Heroes')));