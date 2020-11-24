const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

   // Colocar los middlewares  
router.get('/electrodomestico', (req, res) => {
   mysqlConnection.query('SELECT * from ELECTRODOMESTICOS', (err, rows, fiels) => {
      if (!err) {
         res.json(rows);
      } else {
         console.log(err);
      }
   });
})// fin

   //agregar un electrodomestico
router.post('/electrodomestico/agregar', (req, res) => {
   const { CODIGO, Nombre } = req.body;
   let codigoArray = [ CODIGO, Nombre ];
   let codigoNuevo = `INSERT INTO ELECTRODOMESTICOS ( CODIGO, Nombre ) VALUES (?,?)`;
   mysqlConnection.query(codigoNuevo, codigoArray, (err, result, fields) => {
      if (err) {
         return console.error(err.message);
      }
      res.json({ message: 'Electrodomestico creado', })
   });
});

// traer un electrodomestico
router.get('/electrodomestico/:codigo', (req, res) => {
   const { codigo } = req.params;
   mysqlConnection.query('SELECT * from ELECTRODOMESTICOS  where CODIGO = ' + codigo, (err, rows, fiels) => {
      if (!err) {
         res.json(rows);
      } else {
         console.log(err);
      }
   });
})// fin
        
    //actualizar electrodomestico
router.put('/electrodomestico/:codigo', (req, res) => {
   const { CODIGO, Nombre } = req.body;

   const { codigo } = req.params;
   mysqlConnection.query(`UPDATE ELECTRODOMESTICOS SET CODIGO=?, Nombre=? WHERE CODIGO = ?`,
      [ CODIGO, Nombre, codigo ], (err, rows, fields) => {
         if (!err) {
            res.json({ status: 'Electrodomestico actualizado' });
         } else {
            console.log(err);
         }
      });
});

   //borrar el electrodomestico
router.delete('/electrodomestico/:codigo', (req, res) => {
   const { codigo } = req.params;
   mysqlConnection.query('DELETE FROM ELECTRODOMESTICOS WHERE CODIGO= ?',
      [codigo], (err, rows, fields) => { 
         if (!err) {
            res.json({ status: '¡Electrodomestico eliminado!' });
         } else {
            console.log(err);
         }
      });
});

module.exports =router;

