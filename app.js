const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", 'ejs')

const port = 3000 || process.evn.PORT

app.get("/", (req,res)=>{

  var today = new Date().getDay()

  switch (today){
    case 1:
    day ="Monday"
    break;
    case 2:
    day ="Tuesday"
    break;
    case 3:
    day ="Wednesday"
    break;
    case 4:
    day ="Thursday"
    break;
    case 5:
    day ="Friday"
    break;
    case 6:
    day ="Saturday"
    break;
    case 0:
    day ="Sunday"
    break;


  }

  // if (today.getDay()===6 || today.getDay()===0){
  //   day ="weekend"
  //
  // } else{
  //
  //   day = "weekday"
  //
  // }
 res.render("list", {whatDay:day})
})







app.listen(port, (req,res)=>{
  console.log("sever started on port "+port);
})
