import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("<h1>Fuck you!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>Kiss My Shit!</p>");
});

app.get("/contact", (req, res) => {
    res.send('<h1>Contact</h1><p>See "About" and then go fuck yourself.</p>');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});