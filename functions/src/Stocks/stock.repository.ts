import {Stock} from "../Models/stock.module"

export interface StockRepository {
    addStock(stock: Stock): Promise<any>;
    getStockByID(productID: string): Promise<Stock>;
    updateStock(productID: string, stock: Stock): Promise<any>;
}
