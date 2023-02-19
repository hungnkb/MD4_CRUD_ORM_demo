import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

class HomeController {
  showHomepage(req: Request, res: Response) {
    res.send("Home");
  }
}

export default new HomeController();
