const express = require('express');
const app = express();

app.use("/hi",(req,res)=> {
    res.send("Hello World! You are on server")
})

app.listen(3000, () => {
    console.log("server is started on port 3000");
});