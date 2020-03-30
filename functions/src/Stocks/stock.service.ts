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
        order.orderLines.forEach(orderLine => {
            const stockPromise = this.stockRepository.getStockByID(orderLine.productID);
            stockPromise.then(stock => {
                if (stock) {
                    this.subtrackAmountfromStock(stock, orderLine.amount);
                    return this.stockRepository.updateStock(orderLine.productID, stock);
                }else {
                    return null;
                }
            }).catch(error => {
                throw new TypeError('Could not retrieve Promise with stock');
            })
        });
        return Promise.resolve();
    }

    createStockWithAmount(product: Product): Stock {
        const stock: Stock = {
            productID: product.productID,
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
