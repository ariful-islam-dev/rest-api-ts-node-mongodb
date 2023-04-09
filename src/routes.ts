import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
function routes(app: Express) {
  app.get("/helth", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/users", validate(createUserSchema), createUserHandler);

  app.get("/api/users", (req, res) => {
    res.send("Ariful islam");
  });
}

export default routes;
