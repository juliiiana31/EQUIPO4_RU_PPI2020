const express=require('express');
const app=express();
//const electrodomesticos=require('./routes/electrodomesticos'); // defino todos los middleware de los modulo
//const usuario=require('./routes/usuario'); 
const paneles_solares=require('./routes/panel_solar');

// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api',paneles_solares);
//app.use('/api/electrodomesticos',electrodomesticos); 
//app.use('/api/usuario',usuario);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});



