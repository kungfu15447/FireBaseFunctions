import {StockController} from "./stock.controller";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {EventContext} from "firebase-functions";
import {StockService} from "./stock.service";
import {Product} from "../Models/product.module";

export class StockControllerFirebase implements StockController {

    constructor(private stockService: StockService) {}
    addStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any> {
        const product = snapshot.data() as Product;
        return this.stockService.addStock(product);
    }

}
