import {Stock} from "../Models/stock.module";

export interface StockRepository {
    addStock(stock: Stock): Promise<any>;
}
