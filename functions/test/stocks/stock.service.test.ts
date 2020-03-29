import {StockRepository} from "../../src/Stocks/stock.repository";
import {IMock, Mock, Times} from 'moq.ts';
import {StockService} from "../../src/Stocks/stock.service";
import {Product} from "../../src/Models/product.module";
import {Stock} from "../../src/Models/stock.module";

describe('StockService', () => {
   let stockRepository: IMock<StockRepository>;
   let stockService: StockService;
   let product: Product = { name: 't-shirt', price: 250};
   let stock: Stock = { productName: 't-shirt', stockAmount: 5};
   beforeEach(() => {
      stockRepository = new Mock<StockRepository>()
          .setup(sr => sr.addStock(stock))
          .returns(Promise.resolve(stock));
      stockService = new StockService(stockRepository.object());
   });

   it('Create stock out of product with a stock count of 5', async () => {
       const stock = stockService.createStockWithAmount(product);
       expect(stock.stockAmount).toBe(5);
    })

    it('StockRepository method addStock is called only once in StockService addStock method', async () => {
        await stockService.addStock(product);
        stockRepository.verify(sr => sr.addStock(stock),
            Times.Exactly(1));
    })
});
