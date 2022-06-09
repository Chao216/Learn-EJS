const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = 3000 || process.evn.PORT

app.get("/", (req,res)=>{

  var today = new Date()
  if (today.getDay()===6 || today.getDay()===0){
    res.sendFile(__dirname+"/index.html")

  } else{
  
    res.sendFile(__dirname+"/index.html")

  }

})







app.listen(port, (req,res)=>{
  console.log("sever started on port "+port);
})
