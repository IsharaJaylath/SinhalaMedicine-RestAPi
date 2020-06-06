require('dotenv').config()
const express = require ('express');
const app = express()
const mongoose = require ('mongoose');

mongoose.connect(process.env.DATABASE_URL,
{useNewUrlParser:true}
)
const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once('open',() => console.log('Database Connect Successfully'))

app.use(express.json())

const mealRouter = require('./routes/meals')
app.use('/meals',mealRouter)

const medRouter = require('./routes/med')
app.use('/med',medRouter)

const userRouter = require('./routes/user')
app.use('/user',userRouter)


app.listen(3000, () => console.log('Server is Started')); 