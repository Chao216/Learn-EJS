const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = 3000 || process.evn.PORT

app.get("/", (req,res)=>{

  var today = new Date()
  if (today.getDay()===6 || today.getDay()===0){
    res.send("Haha, it's weekend")

  } else{
    res.write("<p>hard working man!</p>");
    res.write("<h1>girls in town have fair skin</h1>")
    res.send()
  }

})







app.listen(port, (req,res)=>{
  console.log("sever started on port "+port);
})
