import {Product} from "../Models/product.module";
import {OrderRepository} from "./order.repository";

export class OrderService {

    constructor(private orderRepo: OrderRepository) {}

    renameProductsInOrderLines(productBefore: Product, productAfter: Product): Promise<any> {
        return this.orderRepo.renameProductsInOrderLines(productBefore, productAfter);
    }
}
