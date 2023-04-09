import config from "config";
import mongoose from "mongoose";
import log from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);

    log.info("Connected to DB");
  } catch (error) {
    log.error("Could not connect to DB");
    process.exit(1);
  }
}

export default connect;
