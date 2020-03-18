import {RoleRepository} from "./role.repository";
import {Role} from "../Models/role.module";
import * as admin from "firebase-admin";
import {User} from "../Models/user.module";

export class RoleRepositoryFirebase implements RoleRepository{

    setRenamedRoleOnUsers(roleBefore: Role, roleAfter: Role): Promise<any> {
        const userCollection = this.db().collection('users');
        return userCollection.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const user = doc.data() as User;
                    if (user.role === roleBefore.name) {
                        user.role = roleAfter.name
                        return doc.ref.update(user);
                    }else {
                        return null;
                    }
                })
            })
    }

    db(): FirebaseFirestore.Firestore{
        return admin.firestore();
    }

}
