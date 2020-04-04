import {OrderRepository} from "./order.repository";
import {Product} from "../Models/product.module";
import * as admin from "firebase-admin";
import {Order} from "../Models/order.module";

export class OrderRepositoryFirebase implements OrderRepository {

    async renameProductsInOrderLines(productBefore: Product, productAfter: Product): Promise<any> {
        const orderCollection = this.db().collection('orders');
        const snapshot = await orderCollection.get();
        snapshot.forEach( doc => {
            const order = doc.data() as Order;
            order.orderLines.forEach(orderLine => {
                if (orderLine.productName === productBefore.name) {
                    orderLine.productName = productAfter.name
                }
            });
            return doc.ref.update(order);
        });
        return Promise.resolve();
    }

    db(): FirebaseFirestore.Firestore{
        return admin.firestore();
    }
}
