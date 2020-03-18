import {Role} from "../Models/role.module";
import {RoleRepository} from "./role.repository";


export class RoleService {
    constructor(private roleRepo: RoleRepository) {}

    renameRole(roleBefore: Role,
               roleAfter: Role): Promise<any> {
        if (roleAfter && roleBefore) {
            return this.roleRepo.setRenamedRoleOnUsers(roleBefore, roleAfter);
        }else {
            return new Promise<any>(resolve => {
                resolve(undefined);
            })
        }
    }
}
