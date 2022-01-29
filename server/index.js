const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const routesHandler = require("./routes/handler.js");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use("/", routesHandler)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));