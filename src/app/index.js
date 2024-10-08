const express = require("express");

app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("servidor is running!");
});

app.listen(PORT, () => {
    console.log('Servidor running on 3000')
})

//add new comentario
