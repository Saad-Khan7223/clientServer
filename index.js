const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const path=require('path')

require('dotenv').config();

const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json())


mongoose.set('strictQuery', false);


const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Connected to MongoDB")
})

const excercisesRouter=require('./routes/excercises')


app.use('/excercises',excercisesRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(port,()=>{
    console.log('server is starting at'+port)
})