const express = require("express")
const bodyParser = require("body-parser")
const app = express()
var items =["buy food", "cook food", "eat food"];
app.set("view engine", 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("publik"))

const port = 3000 || process.evn.PORT

app.get("/", (req,res)=>{

  var today = new Date().getDay()

  var options = {weekday:"long", day:"numeric", month:"long"}
  var day = new Date().toLocaleDateString("zh-CN", options);
  res.render("list", {whatDay:day,itemArray:items});
})

app.post("/", (req,res)=>{
  var item =req.body.newItem
  items.push(item)

  res.redirect("/")


})







app.listen(port, (req,res)=>{
  console.log("sever started on port "+port);
})
