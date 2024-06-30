const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const cors = require("cors");
app.use(cors());

app.get("/", (req , res) => {
    res.send("hello world")
})

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`)
})