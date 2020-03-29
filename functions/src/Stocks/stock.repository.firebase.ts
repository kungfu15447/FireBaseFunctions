import {StockRepository} from "./stock.repository";
import {Stock} from "../Models/stock.module";
import * as admin from "firebase-admin";
import {Order} from "../Models/order.module";

export class StockRepositoryFirebase implements StockRepository {

    addStock(stock: Stock): Promise<any> {
        const stockCollection = this.db().collection('stocks');
        return stockCollection.add(stock);
    }

    db(): FirebaseFirestore.Firestore {
        return admin.firestore();
    }

    async getAllStocks(): Promise<Stock[]> {
        const stocks: Stock[] = [];
        const stockCollection = this.db().collection('stocks');
        const snapshot = await stockCollection.get();
        snapshot.forEach(doc => {
           const stock = doc.data() as Stock;
           stocks.push(stock);
        });
        return Promise.resolve(stocks);
    }

    async getStockByName(name: string): Promise<Stock> {
        let stock = undefined as any;
        const stockCollection = this.db().collection('stocks');
        const snapshot = await stockCollection.get();
        snapshot.forEach(doc => {
            const stockDoc = doc.data() as Stock;
            if (stockDoc.productName === name) {
                stock = stockDoc;
            }
        });
        return Promise.resolve(stock);
    }

    async updateStockFromOrder(order: Order): Promise<any> {
        const stockCollection = this.db().collection('stocks');
        const snapshot = await stockCollection.get();
        snapshot.forEach(doc => {
            const stock = doc.data() as Stock;
            order.orderLines.forEach(function (orderLine) {
                if (stock.productName === orderLine.productName) {
                    const newAmount = stock.stockAmount - orderLine.amount;
                    stock.stockAmount = newAmount;
                }
            });
            return doc.ref.update(stock);
        });
        return Promise.resolve();
    }

}
