const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS"){
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
      return res.status(200).json({});
    }
    next();
  });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
const routesHandler = require("./routes/handler.js");
app.use("/", routesHandler)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));