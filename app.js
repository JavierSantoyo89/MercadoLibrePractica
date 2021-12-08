const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));


/*! ------------------------ Seccion de rutas web dentro del dominio -------------------- 
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});*/
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


/* -------------------------------- Seccion de levantado del servidor -------------------- */
app.listen(process.env.PORT || 5000, function(){
    console.log('Servidor activado en el puerto: http://localhost:5000');
});

