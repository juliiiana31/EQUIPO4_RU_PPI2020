const express = require('express');// tabnine
const router = express.Router();
const mysqlConnection = require('../db/db');

// Colocar los middlewares  
router.get('/registro_usuario', (req, res) => {
   mysqlConnection.query('SELECT * from REGISTRO_USUARIO', (err, rows, fiels) => {
      if (!err) {
         res.json(rows);
      } else {
         console.log(err);
      }
   });
});// fin


router.get('/registro_usuario/:codigo', (req, res) => {
   const { codigo } = req.params;
   mysqlConnection.query('SELECT * FROM REGISTRO_USUARIO  where codigo = ?', [codigo], (err, rows, fiels) => {
      if (!err) {
         res.json(rows);
      } else {
         console.log(err);
      }
   });
})// fin

//agregar
router.post('/registro_usuario/agregar', (req, res) => {
   const { CEDULA, NOMBRE, APELLIDO, USUARIO} = req.body;
   let codigoArray = [ CEDULA, NOMBRE, APELLIDO, USUARIO ];
   let codigoNuevo = 'INSERT INTO REGISTRO_USUARIO(CEDULA, NOMBRE, APELLIDO, USUARIO) VALUES (?,?,?,?)';
   mysqlConnection.query(codigoNuevo, codigoArray, (err, result, fields) => {
      if (err) {
         return console.error({message: 'error al guardar '+err.message});
         console.log(codigoNuevo+" "+codigoArray)
      }
      res.json({ message: 'usuario creado', })
   });
});

//actualizar 
router.put('/modificar/:CODIGO', (req, res) => {
   const { CEDULA, NOMBRE, APELLIDO, USUARIO } = req.body;

   const { CODIGO } = req.params;
   mysqlConnection.query(`UPDATE REGISTRO_USUARIO SET CEDULA=?, NOMBRE=?, APELLIDO=?, USUARIO=? WHERE CODIGO = ?`,
      [CEDULA, NOMBRE, APELLIDO, USUARIO, CODIGO], (err, rows, fields) => {
         if (!err) {
            res.json({ status: 'usuario actualizado' });
         } else {
            console.log(err);
         }
      });
   });

      //borrar un usuario
router.delete('/eliminar/:CODIGO', (req, res) => {
   const { CODIGO } = req.params;
   mysqlConnection.query('DELETE FROM REGISTRO_USUARIO WHERE CODIGO= ?',
      [CODIGO], (err, rows, fields) => { 
         if (!err) {
            res.json({ status: '¡usuario eliminado!' });
         } else {
            console.log(err);
         }
      });
});




module.exports = router; 

