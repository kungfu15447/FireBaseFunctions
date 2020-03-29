import {StockController} from "./stock.controller";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {EventContext} from "firebase-functions";
import {StockService} from "./stock.service";

export class StockControllerFirebase implements StockController {

    constructor(private stockService: StockService) {}
    addStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any> {
        this.stockService;
        return Promise.resolve(undefined  as any);
    }

}
