const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");


let app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname ,"dist")));
console.log(path.join(__dirname, "dist"));

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", hbs({
  extname: "handlebars",
  partialsDir: path.join(__dirname, "/views/partials")


}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});


app.listen(port, () => {
  console.log("Server started on port " + port);
})

//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>