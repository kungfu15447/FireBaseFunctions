import {StockRepository} from "./stock.repository";
import {Stock} from "../Models/stock.module";
import * as admin from "firebase-admin";

export class StockRepositoryFirebase implements StockRepository {

    addStock(stock: Stock): Promise<any> {
        const stockCollection = this.db().collection('stocks');
        return stockCollection.add(stock);
    }

    db(): FirebaseFirestore.Firestore {
        return admin.firestore();
    }

}
