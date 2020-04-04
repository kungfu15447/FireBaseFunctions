import {OrderController} from "./order.controller";
import {Change, EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {OrderService} from "./order.service";
import {Product} from "../Models/product.module";

export class OrderControllerFirebase implements OrderController{

    constructor(private orderService: OrderService) {}

    renameProductsInOrderLines(snapshot: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
        const productBefore = snapshot.before.data() as Product;
        const productAfter = snapshot.after.data() as Product;
        return this.orderService.renameProductsInOrderLines(productBefore, productAfter);
    }

}
