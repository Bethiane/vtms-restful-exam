const express = require("express");
const cors = require("cors");
// const { Swaggiffy } = require('swaggiffy');
const bodyParser = require("body-parser");
const connectToDb = require("./config/db");
const ownersRoute = require("./routes/owner.route");
const userRoute = require("./routes/user.route");
const vehiclesRoute = require("./routes/vehicle.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectToDb();
// new Swaggiffy().setupExpress(app).swaggiffy();

app.use("/api/owners", ownersRoute);
app.use("/api/user", userRoute);
app.use("/api/vehicles", vehiclesRoute);
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
