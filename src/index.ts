import * as dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import { createConnection } from "typeorm";
import App from "./server";

const app = new App(5000);

createConnection()
  .then(async (connection) => {
    app.listen();
  })
  .catch((error) => console.log(error));
