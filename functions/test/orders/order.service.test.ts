import {OrderRepository} from "../../src/Orders/order.repository";
import {IMock, Mock, Times} from 'moq.ts';
import {OrderService} from "../../src/Orders/order.service";
import {Product} from "../../src/Models/product.module";
import {OrderRepositoryFirebase} from "../../src/Orders/order.repository.firebase";

describe('OrderService', () => {
    let orderRepository: IMock<OrderRepository>;
    let orderService: OrderService;
    let productBefore: Product = { productID: 'ert45', name: 'soap', price: 500};
    let productAfter: Product = { productID: 'ert45', name: 'hand soap', price: 500};
    beforeEach( () => {
        orderRepository = new Mock<OrderRepositoryFirebase>()
            .setup(or => or.renameProductsInOrderLines(productBefore, productAfter))
            .returns(Promise.resolve());
        orderService = new OrderService(orderRepository.object());
    })
})
