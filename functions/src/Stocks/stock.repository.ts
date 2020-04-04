import {Stock} from '../Models/stock.module';
import {Product} from '../Models/product.module';

export interface StockRepository {
    addStock(stock: Stock): Promise<any>;
    getStockByID(productID: string): Promise<Stock>;
    updateStock(productID: string, stock: Stock): Promise<any>;
    renameStocks(productBefore: Product, productAfter: Product): Promise<any>;
}
