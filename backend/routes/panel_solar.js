const express = require('express');// tabnine
const router = express.Router();
const mysqlConnection = require('../db/db');

// Colocar los middlewares  
router.get('/paneles_solares', (req, res) => {
   mysqlConnection.query('SELECT * from PANELES_SOLARES', (err, rows, fiels) => {
      if (!err) {
         res.json(rows);
      } else {
         console.log(err);
      }
   });
})// fin

// traer un panel
router.get('/paneles_solares/:codigo', (req, res) => {
   const { codigo } = req.params;
   mysqlConnection.query('SELECT * from PANELES_SOLARES  where CODIGO = ' + codigo, (err, rows, fiels) => {
      if (!err) {
         res.json(rows);
      } else {
         console.log(err);
      }
   });
})// fin

//agregar un panel solar
router.post('/paneles_solares/agregar', (req, res) => {
   const { ELECTRODOMESTICO, CANTIDAD, POTENCIA, HORAUSO_DIARIO, CONSUMO_DIARIO, HORAS_PICO_SOLAR, CODIGO } = req.body;
   let codigoArray = [ELECTRODOMESTICO, CANTIDAD, POTENCIA, HORAUSO_DIARIO, CONSUMO_DIARIO, HORAS_PICO_SOLAR, CODIGO];
   let codigoNuevo = `INSERT INTO PANELES_SOLARES(ELECTRODOMESTICO, CANTIDAD, POTENCIA, HORAUSO_DIARIO, CONSUMO_DIARIO, HORAS_PICO_SOLAR, CODIGO) VALUES (?,?,?,?,?,?,?)`;
   mysqlConnection.query(codigoNuevo, codigoArray, (err, result, fields) => {
      if (err) {
         return console.error(err.message);
         res.json({ message:'Error al guardar ' })
      }
      res.json({ message: 'Panel solar creado', })
   });
});

/* ELECTRODOMESTICO varchar(50) NOT NULL,
  CANTIDAD int(20) NOT NULL,
  POTENCIA int(150) NOT NULL,
  HORAUSO_DIARIO int(24) NOT NULL,
  CONSUMO_DIARIO int(24) NOT NULL,
  HORAS_PICO_SOLAR int(20) NOT NULL,
  CODIGO int(20) NOT NULL,
  PRIMARY KEY (CODIGO) */

//actualizar 
router.put('/paneles_solares/:codigo', (req, res) => {
   const { ELECTRODOMESTICO, CANTIDAD, POTENCIA, HORAUSO_DIARIO, CONSUMO_DIARIO, HORAS_PICO_SOLAR, CODIGO } = req.body;

   const { codigo } = req.params;
   mysqlConnection.query(`UPDATE PANELES_SOLARES SET ELECTRODOMESTICO=?, CANTIDAD=?, POTENCIA=?, HORAUSO_DIARIO=?, CONSUMO_DIARIO=?, HORAS_PICO_SOLAR=?, CODIGO=? WHERE CODIGO = ?`,
      [ELECTRODOMESTICO, CANTIDAD, POTENCIA, HORAUSO_DIARIO, CONSUMO_DIARIO, HORAS_PICO_SOLAR, CODIGO, codigo], (err, rows, fields) => {
         if (!err) {
            res.json({ status: 'Panel solar actualizado' });
         } else {
            console.log(err);
         }
      });
});

router.delete('/paneles_solares/:codigo', (req, res) => {
   const { codigo } = req.params;
   mysqlConnection.query('DELETE FROM PANELES_SOLARES WHERE CODIGO= ?',
      [codigo], (err, rows, fields) => {
         if (!err) {
            res.json({ status: 'Panel solar eliminado!' });
         } else {
            console.log(err);
         }
      });
});

module.exports = router;