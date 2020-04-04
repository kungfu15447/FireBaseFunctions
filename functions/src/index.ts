import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DependencyFactory} from './dependency-factory';

const difa = new DependencyFactory();

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

exports.renameRoles = functions.firestore
    .document('roles/{roleID}')
    .onUpdate((change, context) => {
        return difa.getRoleController().renameRole(change, context);
    })

exports.addStock = functions.firestore
    .document('products/{productID}')
    .onCreate((snapshot, context) => {
        return difa.getStockController().addStock(snapshot, context);
    })

exports.decreaseStockByAmount = functions.firestore
    .document('orders/{orderID}')
    .onCreate((snapshot, context) => {
        return difa.getStockController().removeStock(snapshot, context);
    })

exports.renameProducts = functions.firestore
    .document('products/{productID}')
    .onUpdate((snapshot, context) => {
        difa.getStockController().renameStock(snapshot, context).then(succes => {
            return difa.getOrderController().renameProductsInOrderLines(snapshot, context);
        }).catch(error => {
            throw new TypeError(error);
        });
    })

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
