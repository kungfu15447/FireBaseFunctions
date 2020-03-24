import {RoleRepository} from "./role.repository";
import {Role} from "../Models/role.module";
import * as admin from "firebase-admin";
import {User} from "../Models/user.module";

export class RoleRepositoryFirebase implements RoleRepository{

    async setRenamedRoleOnUsers(roleBefore: Role, roleAfter: Role): Promise<Role> {
        const userCollection = this.db().collection('users');
        const snapshot = await userCollection.get();
        snapshot.forEach(doc => {
            const user = doc.data() as User;
            if (user.role === roleBefore.name) {
                user.role = roleAfter.name
                return doc.ref.update(user);
            }else {
                return null;
            }
        });
        return Promise.resolve(roleAfter);
    }

    db(): FirebaseFirestore.Firestore{
        return admin.firestore();
    }

}
