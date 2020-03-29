import {Product} from "../Models/product.module";
import {Stock} from "../Models/stock.module";
import {StockRepository} from "./stock.repository";
import {Order} from "../Models/order.module";

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

    removeStock(order: Order): Promise<any> {
        order.orderLines.forEach( product => {
            this.stockRepository.getStockByName(product.productName).then(stock => {
                if (stock) {
                    this.subtrackAmountfromStock(stock, product.amount);
                    this.stockRepository.updateStockAmount(stock);
                }
            });
        });
        return Promise.resolve();
    }

    createStockWithAmount(product: Product): Stock {
        const stock: Stock = {
            productName: product.name,
            stockAmount: this.defaultStockAmount
        };
        return stock;
    }

    subtrackAmountfromStock(stock: Stock, amount: number): void {
        const newAmount = stock.stockAmount - amount;
        if (newAmount >= 0) {
            stock.stockAmount = newAmount
        } else {
            stock.stockAmount = 0;
        }
    }
}
