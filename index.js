import express from "express";
import bodyParser from "body-parser";
import carsRoutes from "./routes/cars.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/cars", carsRoutes);
app.get("/", (req, res) => res.send("Hello From home Page."));

app.listen(PORT, () =>
  console.log(`Server Running on Port : http://localhost:${PORT}`)
);
export default app;
