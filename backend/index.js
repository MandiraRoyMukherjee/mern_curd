const express = require('express')
const app = express()
const cors=require('cors');
const port=process.env.PORT ||5000;
const exercisesRouter = require('./routes/ex');
const usersRouter = require('./routes/user');



//mongo db connection



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mern_curd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(()=>console.log("connection sucess"))
.catch((err)=> console.log(err));


app.use(express.json());
app.use(cors());


app.use('/ex', exercisesRouter);
app.use('/user', usersRouter);

app.get('/home', function (req, res) {
    res.send('Hello World')
  })
 
app.listen(port,()=>{
    console.log('server is running on port: ${port}');
})
 
