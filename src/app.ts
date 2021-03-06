import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import requireKey from "./middleware/requireKey";

const port = process.env.PORT || config.get<number>("port");
const host = config.get<number>("hostname");

const app = express();

app.use(express.json());

app.use(requireKey);

app.listen(port, async () => {
  logger.info(`App is running at http://${host}:${port}`);

  await connect();

  routes(app);
});
