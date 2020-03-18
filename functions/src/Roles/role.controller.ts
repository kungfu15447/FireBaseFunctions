import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {Change, EventContext} from "firebase-functions";

export interface RoleController {
    renameRole(snap: Change<DocumentSnapshot>, context: EventContext): Promise<any>;
}
