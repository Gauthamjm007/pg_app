const express = require("express");
const router = require("./config/routes");
const setupDB = require("./config/database");
const app = express();
const port = 3044;
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use("/", router);
setupDB();

app.listen(port, () => {
  console.log(`listening to port ${port} ..........`);
});
