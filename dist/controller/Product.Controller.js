"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const entity_1 = require("../entity");
class ProductController {
    async showCreateProduct(req, res) {
        res.render("./product/createProduct.ejs");
    }
    async createProduct(req, res) {
        let name = req.body.name;
        let price = req.body.price;
        let author = req.body.author;
        let image = req.file.filename;
        await data_source_1.AppDataSource.createQueryBuilder()
            .insert()
            .into(entity_1.Product)
            .values([{ name: name, image: image, price: price, author: author }])
            .execute();
        res.redirect("/product/list");
    }
    async showProduct(req, res) {
        const product = await data_source_1.AppDataSource.getRepository(entity_1.Product)
            .createQueryBuilder("product")
            .getMany();
        res.render("./product/listProduct.ejs", { product });
    }
    async showEditProduct(req, res) {
        let editIdProduct = req.query.id;
        const editProduct = await data_source_1.AppDataSource.getRepository(entity_1.Product)
            .createQueryBuilder("product")
            .where("product.id = :id", { id: editIdProduct })
            .getOne();
        res.render("./product/editProduct.ejs", { p: editProduct });
    }
    async editProduct(req, res) {
        let idEditProduct = req.body.id;
        let nameEditProduct = req.body.name;
        let priceEditProduct = req.body.price;
        let authorEditProduct = req.body.author;
        if (req.file) {
            let imageEditProduct = req.file.filename;
            await data_source_1.AppDataSource.createQueryBuilder()
                .update(entity_1.Product)
                .set({
                name: nameEditProduct,
                image: imageEditProduct,
                price: priceEditProduct,
                author: authorEditProduct,
            })
                .where("id = :id", { id: idEditProduct })
                .execute();
        }
        else {
            await data_source_1.AppDataSource.createQueryBuilder()
                .update(entity_1.Product)
                .set({
                name: nameEditProduct,
                price: priceEditProduct,
                author: authorEditProduct,
            })
                .where("id = :id", { id: idEditProduct })
                .execute();
        }
        res.redirect("/product/list");
    }
}
exports.default = new ProductController();
//# sourceMappingURL=Product.Controller.js.map