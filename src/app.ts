import config from "config";
import express from "express";
import routes from "./routes";
import connect from "./utils/connect";
import log from "./utils/logger";

const port = config.get<number>("port");
const app = express();
app.use(express.json());

app.listen(port, async () => {
  log.info(`App is running at http://locahost:${port}`);

  await connect();
  routes(app);
});
