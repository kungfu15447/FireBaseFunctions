import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {Change, EventContext} from "firebase-functions";

export interface StockController {
    addStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any>;
    removeStock(snapshot: DocumentSnapshot, context: EventContext): Promise<any>;
    renameStock(snapshot: Change<DocumentSnapshot>, context: EventContext): Promise<any>
}
