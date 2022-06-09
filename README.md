# this is a repository for learning EJS in Node development.
![EJS](https://ejs.bootcss.com/assets/images/ejs-logo.png)

to send multiple line of message, you can
```
res.write("<p>hard working man!</p>");
res.write("<h1>girls in town have fair skin</h1>")
res.send()
```
to avoid repetition, we use **templates** for HTML with *conditional rendering*

check out the documentation at [EJS](https://ejs.co/)

more precisely [work with express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)

a marker of ejs looks like `<%= EJS %>`


inside ejs, you can copy paste the html templates. and leave a marker `<%= Variable %>`
and in app.js, you can use `res.render("list", {Variable:dataToPass})` to pass the data from app js to ejs

when you have more than 5 conditions, use `switch` instead of `if else if ... else`

```
<% if (whatDay ==="Saturday"|| whatDay==="Sunday"){%>
  <h1 style="color:purple"> <%= whatDay%> list </h1>
<% }else {%>
    <h1 style="color:blue"> <%= whatDay%> list </h1>
  <%}%>
```
remember you need to wrap all code on each line with `<%  %>`

to add an item use `res.redirect("/")`
-----

## Scope of Variable

when created inside a function block, `var let const` all create local scoped variables

when created inside none function block such as `if for while` blocks, `var` creates global scoped variable, `let const` create local scoped variables.

-------------
you can cut an entire page into re-usable modules by put them in different `ejs files`, and include them later
```
<%- include("header"); -%>
<%- include("footer"); -%>
```
------------------
You can create your own modules as below
```
const options = {weekday:"long", day:"numeric", month:"long"}


const getDate= function(){

  const options = {weekday:"long", day:"numeric", month:"long"}
  return new Date().toLocaleDateString("en-US", options)
}


const getDay= function(){

  const options = {weekday:"long"}
  return new Date().toLocaleDateString("en-US", options)
}


module.exports={getDate, getDay}
```

when you want to import in somewhere else use

```
const myModule = require(__dirname+"/myModule.js")

const day = myModule.getDay()

const day = myModule.getDate()

```
----------------------
