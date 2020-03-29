import {Product} from "../Models/product.module";
import {Stock} from "../Models/stock.module";
import {StockRepository} from "./stock.repository";

export class StockService {

    private defaultStockAmount = 5;

    constructor(private stockRepository: StockRepository) {}

    addStock(product: Product): Promise<Stock> {
        this.stockRepository;
        return Promise.resolve(undefined as any);
    }

    createStockWithAmount(product: Product): Stock {
        const stock: Stock = {
            productName: product.name,
            stock: this.defaultStockAmount
        };
        return stock;
    }
}
