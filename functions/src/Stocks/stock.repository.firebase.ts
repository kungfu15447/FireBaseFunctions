import {StockRepository} from "./stock.repository";
import {Stock} from "../Models/stock.module";
import * as admin from "firebase-admin";

export class StockRepositoryFirebase implements StockRepository {

    addStock(stock: Stock): Promise<any> {
        const stockCollection = this.db().collection('stocks');
        return stockCollection.doc().set({
            productName: stock.productName,
            stockAmount: stock.stockAmount,
            productID: stock.productID
        });
    }

    db(): FirebaseFirestore.Firestore {
        return admin.firestore();
    }

    async getStockByID(productID: string): Promise<Stock> {
        let stock = undefined as any;
        const docRef = this.db().collection('stocks').doc(productID);
        await docRef.get().then( doc => {
            if (doc.exists) {
                stock = doc.data() as Stock;
            }
        }).catch(error => {
            throw new TypeError('Could not retrieve document');
        });
        return Promise.resolve(stock);
    }

    async updateStock(productID: string, stock: Stock): Promise<any> {
        const stockRef = this.db().collection('stock').doc(productID);
        await stockRef.update(stock);
        return Promise.resolve();
    }

}
