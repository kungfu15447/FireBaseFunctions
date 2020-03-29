import {Stock} from "../Models/stock.module"
import {Order} from "../Models/order.module";

export interface StockRepository {
    addStock(stock: Stock): Promise<any>;
    getAllStocks(): Promise<Stock[]>;
    getStockByName(name: string): Promise<Stock>;
    updateStockFromOrder(order: Order): Promise<any>;
}
