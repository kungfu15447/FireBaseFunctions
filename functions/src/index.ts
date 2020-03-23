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

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
