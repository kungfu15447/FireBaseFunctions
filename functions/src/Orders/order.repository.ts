import {Product} from "../Models/product.module";

export interface OrderRepository {
    renameProductsInOrderLines(productBefore: Product, productAfter: Product): Promise<any>
}
