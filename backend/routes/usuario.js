const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/usuario',(req,res)=>{
    mysqlConnection.query('SELECT * from USUARIO',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin


    router.get('/usuario/:codigo',(req,res)=>{
        const { codigo } = req.params; 
        mysqlConnection.query('SELECT * FROM USUARIO  where codigo = ?',[codigo], (err,rows,fiels)=>{
        if(!err){
           res.json(rows); 
        }else{
        console.log(err);
        }});
        })// fin
    

module.exports =router;

