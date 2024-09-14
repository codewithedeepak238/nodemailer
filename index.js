const express = require("express");
const router = require("./routes/appController")

const app = express();

const PORT = 8000;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, ()=>console.log("Server Started on Port: 8000"));