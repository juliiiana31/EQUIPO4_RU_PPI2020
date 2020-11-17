const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../../../db/db');

// Colocar los middlewares  
router.get('/electrodomesticos',(req,res)=>{
    mysqlConnection.query('SELECT * from ELECTRODOMESTICOS',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    // traer un electrodomestico

    router.get('/electrodomestico/:codigo',(req,res)=>{
        const { codigo } = req.params; 
        mysqlConnection.query('SELECT * from ELECTRODOMESTICOS  where codigo = ?',[codigo], (err,rows,fiels)=>{
        if(!err){
           res.json(rows); 
        }else{
        console.log(err);
        }});
        })// fin
    

module.exports =router;

