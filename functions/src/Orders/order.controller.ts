import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {Change, EventContext} from "firebase-functions";

export interface OrderController {
    renameProductsInOrderLines(snapshot: Change<DocumentSnapshot>, context: EventContext): Promise<any>;
}
