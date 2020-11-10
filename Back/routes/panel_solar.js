const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/paneles_solares',(req,res)=>{
    mysqlConnection.query('SELECT * from PANELES_SOLARES',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    // traer un panel

    router.get('/paneles_solares/:codigo',(req,res)=>{
        const { codigo } = req.params; 
        mysqlConnection.query('SELECT * from PANELES_SOLARES  where codigo = ?',[codigo], (err,rows,fiels)=>{
        if(!err){
           res.json(rows); 
        }else{
        console.log(err);
        }});
        })// fin
    

module.exports =router;

