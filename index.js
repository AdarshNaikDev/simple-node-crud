require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes');

const cors = require('cors')



const mongoString = process.env.DATABASE_URL
//console.log(mongoString)

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors())
// app.get('/', (req, res) => {
//     console.log('Hellooooooooooooooooo!')
//     res.send("Hi adarsh")
//   })
 //app.use(express.json)

app.use('/api', routes)


app.listen(4002, ()=>{
    console.log("Macha I'm your server!!" + 4001)
    
    //console.log(process.env.DATABASE_URL)
    //console.log(routes)
})
