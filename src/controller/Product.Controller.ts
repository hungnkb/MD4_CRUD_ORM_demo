import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entity";

class ProductController {
  async showCreateProduct(req: Request, res: Response) {
    res.render("./product/createProduct.ejs");
  }

  async createProduct(req: Request, res: Response) {
    let name = req.body.name;
    let price = req.body.price;
    let author = req.body.author;
    let image = req.file.filename;
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values([{ name: name, image: image, price: price, author: author }])
      .execute();
    res.redirect("/product/list");
  }

  async showProduct(req: Request, res: Response) {
    const product = await AppDataSource.getRepository(Product)
      .createQueryBuilder("product")
      .getMany();

    res.render("./product/listProduct.ejs", { product });
  }

  async showEditProduct(req: Request, res: Response) {
    let editIdProduct = req.query.id;
    const editProduct = await AppDataSource.getRepository(Product)
      .createQueryBuilder("product")
      .where("product.id = :id", { id: editIdProduct })
      .getOne();

    res.render("./product/editProduct.ejs", { p: editProduct });
  }

  async editProduct(req: Request, res: Response) {
    let idEditProduct = req.body.id;
    let nameEditProduct = req.body.name;
    let priceEditProduct = req.body.price;
    let authorEditProduct = req.body.author;
    if (req.file) {
      let imageEditProduct = req.file.filename;
      await AppDataSource.createQueryBuilder()
        .update(Product)
        .set({
          name: nameEditProduct,
          image: imageEditProduct,
          price: priceEditProduct,
          author: authorEditProduct,
        })
        .where("id = :id", { id: idEditProduct })
        .execute();
    } else {
      await AppDataSource.createQueryBuilder()
        .update(Product)
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

export default new ProductController();

// id: 1,
// name: 'iphone',
// image: '1676710040982.png',
// price: 100,
// author: 'apple'
