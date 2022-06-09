const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", 'ejs')

const port = 3000 || process.evn.PORT

app.get("/", (req,res)=>{

  var today = new Date()
  if (today.getDay()===6 || today.getDay()===0){
    day ="weekend"

  } else{

    day = "weekday"

  }
 res.render("list", {whatDay:day})
})







app.listen(port, (req,res)=>{
  console.log("sever started on port "+port);
})
