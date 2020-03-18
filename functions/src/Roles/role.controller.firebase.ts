import {RoleController} from "./role.controller";
import {Change, EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {RoleService} from "./role.service";

export class RoleControllerFirebase implements RoleController {

    constructor(private roleService: RoleService) {}

    renameRole(snap: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
        this.roleService;
        //TODO
        // @ts-ignore
        return;
    }

}
