const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const myModule = require(__dirname+"/myModule.js")
var items =["buy food", "cook food", "eat food"];
var workItems=[];
app.set("view engine", 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("publik"))

const port = 3000 || process.evn.PORT

app.get("/", (req,res)=>{
//here!!!!!!!!!!!!!!!

const day = myModule.getDay()
  res.render("list", {whatDay:day,itemArray:items});
})

app.get("/work", (req,res)=>{
  res.render("list", {whatDay:"Work", itemArray:workItems})
})


app.post("/", (req,res)=>{
  console.log(req.body);

  var item =req.body.newItem
  if (req.body.button==="Work"){

    workItems.push(item)
    res.redirect("/work")

  } else{
    items.push(item)

    res.redirect("/")

  }




})

app.get("/about", (req,res)=>{
  res.render("about")
})

app.get("/story", (req,res)=>{
  res.render("story")
})


app.listen(port, (req,res)=>{
  console.log("sever started on port "+port);
})
