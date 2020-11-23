const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
host: 'b5zwsxiqok47idifsojm-mysql.services.clever-cloud.com',
user: 'uucc6qvk0mbliyhj', 
password: '0lc3w0YuwqCrCbAVrf34', 
database: 'b5zwsxiqok47idifsojm', 
multipleStatements:true

});
//Establecer la conexión a la bd
mysqlConnection.connect(function(err){
if(err){
    console.log(err);
    return;
}else{
    console.log('Base de datos conectado');
}// fin si
})// fin connect

// al final de las funciones , callbacks, middleware
module.exports =mysqlConnection;




