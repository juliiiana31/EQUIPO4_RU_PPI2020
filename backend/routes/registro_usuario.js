const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('..//db/db');

// Colocar los middlewares  
router.get('/registro_usuario',(req,res)=>{
    mysqlConnection.query('SELECT * from REGISTRO_USUARIO',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin


    router.get('/registro_usuario/:codigo',(req,res)=>{
        const { codigo } = req.params; 
        mysqlConnection.query('SELECT * FROM REGISTRO_USUARIO  where codigo = ?',[codigo], (err,rows,fiels)=>{
        if(!err){
           res.json(rows); 
        }else{
        console.log(err);
        }});
        })// fin
    

module.exports =router;

