import express, { Request } from "express";
import ProductController from "../controller/Product.Controller";
import upload from "../config/uploadFileConfig";

const productRouter = express.Router();

productRouter.route("/create").get(ProductController.showCreateProduct);
productRouter.route("/create").post(upload.single("image"), ProductController.createProduct);

productRouter.route("/list").get(ProductController.showProduct);

productRouter.route("/edit").get(ProductController.showEditProduct);
productRouter.route("/edit").post(upload.single("image"), ProductController.editProduct);


export default productRouter;
