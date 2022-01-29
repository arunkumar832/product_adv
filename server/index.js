const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const routesHandler = require("./routes/handler.js");


const app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://laughing-sammet-8939ab.netlify.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use("/", routesHandler)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));