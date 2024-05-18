const express = require('express');
const bodyParser =require('body-parser');
const cors=require('cors');
const port=5000;
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.post('/add',(req,res)=>{
    const {num1,num2 }=req.body;
    const sum=num1+num2;
    res.json({result:sum});
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

});