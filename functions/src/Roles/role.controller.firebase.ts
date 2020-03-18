import {RoleController} from "./role.controller";
import {Change, EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {RoleService} from "./role.service";
import {Role} from "../Models/role.module";

export class RoleControllerFirebase implements RoleController {

    constructor(private roleService: RoleService) {}

    renameRole(snap: Change<DocumentSnapshot>, context: EventContext): Promise<any> {
        const roleBefore = snap.before.data() as Role;
        const roleAfter = snap.after.data() as Role;
        return this.roleService.renameRole(roleBefore, roleAfter);
    }

}
