import HomeController from "../controller/Home.Controller";
import express, {Request, Response} from 'express';

const homeRouter = express.Router();

homeRouter.get('/', HomeController.showHomepage);

export default homeRouter


