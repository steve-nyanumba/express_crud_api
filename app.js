require('dotenv/config')
const express = require('express')
const mongo = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const Router = require('./Routes/web')

app.use(bodyParser.json())
app.use(Router)

const CON = process.env.DB_CONNECTION
const PORT = process.env.PORT

mongo.connect(CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log('====================================');
    console.log('Successfully in Mongo');
    console.log('====================================');
})

app.listen(PORT, ()=>{
    console.log('====================================');
    console.log(`Successfully started the server on http://127.0.0.1:${PORT}`);
    console.log('====================================');
})