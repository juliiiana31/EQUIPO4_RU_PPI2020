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

/* //agregar
router.post('/paneles_solares/agregar',(req,res=>{
   const { codigo } = req.body;
   let codigoArray = { codigo };
   let codigoNuevo = 'INSERT INTO panel(codigo) VALUES (?)';
   mysqlConnection.query(codigoNuevo, codigoArray,(err, result,fields)=>{
      if (err) {
         return console.error(err.message);
      }
      res.json({message:'Panel solar creado', })
   });
}));

//actualizar 
router.put('/paneles_solares/:id', (req,res)=>{
   const { codigo } = req.body;
   const { id } = req.params;
   mysqlConnection.query('UPDATE paneles SET codigo = ? WHERE id = ?',
   [codigo, id], (err,rows, fields) =>{
      if (!err){
         res.json({status: 'Panel solar actualizado'});
      }else{
         console.log(err);
      }
   });
});

router.delete('/paneles_solares/:id', (req,res)=>{
   const { id } = req.params;
   mysqlConnection.query('DELETE FROM paneles WHERE id = ?',
   [id], (err,rows, fields) =>{
      if (!err){
         res.json({status: 'Panel solar eliminado!'});
      }else{
         console.log(err);
      }
   });
}); */

module.exports =router;

