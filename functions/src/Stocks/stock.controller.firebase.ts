import {StockController} from "./stock.controller";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {Change, EventContext} from "firebase-functions";
import {StockService} from "./stock.service";
import {Product} from "../Models/product.module";
import {Order} from "../Models/order.module";

export class StockControllerFirebase implements StockController {

    constructor(private stockService: StockService) {}
    addStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any> {
        const product = snapshot.data() as Product;
        product.productID = snapshot.id;
        return this.stockService.addStock(product);
    }

    removeStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any> {
        const order = snapshot.data() as Order;
        return this.stockService.removeStock(order);
    }

    renameStock(snapshot: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
        const productBefore = snapshot.before.data() as Product;
        const productAfter = snapshot.after.data() as Product;
        return this.stockService.renameStocks(productBefore, productAfter);
    }

}
