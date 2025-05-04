import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}))

app.set("view engine", "hbs")

app.use("/static", express.static("public"));

app.get('/', (req, res) => {
    res.render("home");
})

app.get("/create", (req, res) => {
    res.render("create")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."))