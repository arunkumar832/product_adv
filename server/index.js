const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
app.use(cors({
  origin: "https://laughing-sammet-8939ab.netlify.app:4000"
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const routesHandler = require("./routes/handler.js");
app.use("/", routesHandler)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));