require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Edson MR",
    titulo: "aprendiendo",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Edson MR",
    titulo: "aprendiendo",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Edson MR",
    titulo: "aprendiendo",
  });
});
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
  console.log(`web server ejecutandose en la ruta: http://localhost:${port}`);
});
