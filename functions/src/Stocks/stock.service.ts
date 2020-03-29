import {Product} from "../Models/product.module";
import {Stock} from "../Models/stock.module";
import {StockRepository} from "./stock.repository";

export class StockService {

    private defaultStockAmount = 5;

    constructor(private stockRepository: StockRepository) {}

    addStock(product: Product): Promise<any> {
        if (product) {
            const stock: Stock = this.createStockWithAmount(product)
            return this.stockRepository.addStock(stock);
        }else {
            return Promise.resolve(undefined as any);
        }
    }

    createStockWithAmount(product: Product): Stock {
        const stock: Stock = {
            productName: product.name,
            stockAmount: this.defaultStockAmount
        };
        return stock;
    }
}
