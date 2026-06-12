import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(" hello world")
})

app.post("/", (req, res) => {
    res.send(" hello world")
})

app.listen(3000, () => {
    console.log("PORT -3000")
})