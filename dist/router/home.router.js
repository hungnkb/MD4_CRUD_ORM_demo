"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_Controller_1 = __importDefault(require("../controller/Home.Controller"));
const express_1 = __importDefault(require("express"));
const homeRouter = express_1.default.Router();
homeRouter.get('/', Home_Controller_1.default.showHomepage);
exports.default = homeRouter;
//# sourceMappingURL=home.router.js.map