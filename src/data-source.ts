import { DataSource } from "typeorm"
import { Product } from "./entity/product"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "TH_CRUD_ORM",
    entities: [Product],
    synchronize: false,
})
