"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("./entity/product");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "TH_CRUD_ORM",
    entities: [product_1.Product],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map