import {Stock} from "../Models/stock.module"

export interface StockRepository {
    addStock(stock: Stock): Promise<any>;
    getAllStocks(): Promise<Stock[]>;
    getStockByName(name: string): Promise<Stock>;
    updateStockAmount(stock: Stock): Promise<any>;
}
