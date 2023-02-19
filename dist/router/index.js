"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_router_1 = __importDefault(require("../router/product.router"));
const home_router_1 = __importDefault(require("../router/home.router"));
const route = (app) => {
    app.use('/', home_router_1.default);
    app.use('/product', product_router_1.default);
};
exports.default = route;
//# sourceMappingURL=index.js.map