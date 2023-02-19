import { Request, Response } from "express";
declare class ProductController {
    showCreateProduct(req: Request, res: Response): Promise<void>;
    createProduct(req: Request, res: Response): Promise<void>;
    showProduct(req: Request, res: Response): Promise<void>;
    showEditProduct(req: Request, res: Response): Promise<void>;
    editProduct(req: Request, res: Response): Promise<void>;
}
declare const _default: ProductController;
export default _default;
