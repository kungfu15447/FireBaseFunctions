export interface Order {
    orderLines:
        { productID: string, productName: string; price: number; amount: number;}[];
    totalPrice: number;
}
