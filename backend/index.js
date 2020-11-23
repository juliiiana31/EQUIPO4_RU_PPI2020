const express=require('express');
const app=express();
const electrodomestico=require('./routes/electrodomestico'); // defino todos los middleware de los modulo
const usuario=require('./routes/usuario'); 
const panel_solar=require('./routes/panel_solar');

// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api',panel_solar);
app.use('/api',electrodomestico); 
app.use('/api/usuario',usuario);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});



