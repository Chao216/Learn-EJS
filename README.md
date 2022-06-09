# this is a repository for learning EJS in Node development.

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
