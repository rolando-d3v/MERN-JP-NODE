const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config()



const app = express()
const port = process.env.PORT

app.listen(port, ()=> {
    console.log('server conected');
})

//connected a db
require('./db')

//*middleware
app.use(cors())

//para recibir datos de postman para hacer pruebas
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//routes
app.use('/' , require('./routers/clientesRouter'))
app.use('/' , require('./routers/productosRouter'))
app.use('/' , require('./routers/pedidosRouter'))