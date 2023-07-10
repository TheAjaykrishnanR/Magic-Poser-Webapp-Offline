const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
    console.log("MagicPoser Webapp running at : http://localhost:8080/index.html");
})

