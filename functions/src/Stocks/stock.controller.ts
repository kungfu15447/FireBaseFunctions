import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {EventContext} from "firebase-functions";

export interface StockController {
    addStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any>;
}
