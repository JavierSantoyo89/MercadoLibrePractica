const express = require('Express');
const app = express();
const path = require('path');


app.use(express.static('public'));


/*! ------------------------ Seccion de rutas web dentro del dominio -------------------- 
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});*/
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


/* -------------------------------- Seccion de levantado del servidor -------------------- */
app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor activado en el puerto: http://localhost:3000');
});

