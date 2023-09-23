const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const FormModel = require("./model/FormModel");
const app= express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/portfoliodb").then(() => {
  console.log("MongoDB is connected successfully!!!!!");
});

app.get("/getdata", async(req,res)=>{
    const result = await FormModel.find({})
    res.json(result)
})

app.post("/adddata", async(req,res)=>{
    const newData = new FormModel({...req.body})
    await newData.save();
    res.json("Succefully added new data")
})

app.listen(2023, ()=>{
    console.log("connected to port: 2023");
})