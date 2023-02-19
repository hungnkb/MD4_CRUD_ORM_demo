"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_Controller_1 = __importDefault(require("../controller/Product.Controller"));
const uploadFileConfig_1 = __importDefault(require("../config/uploadFileConfig"));
const productRouter = express_1.default.Router();
productRouter.route("/create").get(Product_Controller_1.default.showCreateProduct);
productRouter.route("/create").post(uploadFileConfig_1.default.single("image"), Product_Controller_1.default.createProduct);
productRouter.route("/list").get(Product_Controller_1.default.showProduct);
productRouter.route("/edit").get(Product_Controller_1.default.showEditProduct);
productRouter.route("/edit").post(uploadFileConfig_1.default.single("image"), Product_Controller_1.default.editProduct);
exports.default = productRouter;
//# sourceMappingURL=product.router.js.map