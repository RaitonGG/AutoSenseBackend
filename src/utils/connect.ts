import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = "mongodb+srv://autosense:admin@cluster0.io8xv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"//config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    logger.error(error);
    process.exit(1);
  }
}

export default connect;
