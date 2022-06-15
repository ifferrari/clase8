const express = require ('express')
const app = express()
const puerto = 8090
const rutas = require('./routes/index')

app.use('/api/productos', rutas)

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(puerto, (err) => {
    if (err){
        console.log(`El servidor está escuchando el puerto ${err}`)
    } else {
        console.log(`El servidor está escuchando el puerto ${puerto}`)
    }
})