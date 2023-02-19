import productRouter from "../router/product.router"
import homeRouter from "../router/home.router";

const route = (app) => {
    app.use('/', homeRouter)
    app.use('/product', productRouter);
}

export default route;
