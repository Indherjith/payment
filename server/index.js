const express = require("express");
const app = express();
const cors = require("cors");
const {connection} = require("./db");
const {order} = require("./Controllers/order.controller");


app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Payment Server");
});

app.post("/order", order);


app.listen(PORT, async() => {
    try{
        await connection;
        console.log("Server connected to DataBase");
    }
    catch(err){
        console.log(err);
    }
  console.log(`Payment Server listening on port ${PORT}!`);
});