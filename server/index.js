const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
app.use(cors({
  origin: "*",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS"
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const routesHandler = require("./routes/handler.js");
app.use("/", routesHandler)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));