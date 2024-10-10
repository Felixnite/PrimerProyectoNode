const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 9000;
//GET, POST, DELETE, UPDATE
//CRUD = CREATE, READ, UPDATE, DELETE
app.listen(port, ()=> console.log('server listen on port', port))

app.get('/',(req,res)=>{
    res.send('Bienvenido al servidor')
})
// Conexion a mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((error)=>console.error(error))