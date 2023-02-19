import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import route from "./router";
import { AppDataSource } from "./data-source";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static('public'));

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });


route(app);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
