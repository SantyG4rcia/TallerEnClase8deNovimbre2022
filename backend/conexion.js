const mongose = require('mongoose')
mongose.connect('mongodb://localhost:27017/DbLigasFutbol')
const conexion = mongose.connection
conexion.on('connected', ()=>{
    console.log('Conexion exitosa')
})
conexion.on('error', ()=>{
    console.log('conexion erronea')
})
module.exports=mongose