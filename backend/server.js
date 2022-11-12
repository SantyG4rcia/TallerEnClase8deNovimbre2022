const express = require('express')
const app = express()
const conexion = require('./conexion')
app.listen(501, function() {
    console.log('servidor conectado al puerto 501')
})
app.get('/',function(req, res){
    res.send('<h1>servidor en uso</h1>')
})