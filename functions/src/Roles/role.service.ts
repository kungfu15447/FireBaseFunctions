import {Role} from "../Models/role.module";
import {RoleRepository} from "./role.repository";


export class RoleService {
    constructor(private roleRepo: RoleRepository) {}

    renameRole(roleBefore: Role,
               roleAfter: Role): Promise<Role> {
        if (roleAfter && roleBefore) {
            return this.roleRepo.setRenamedRoleOnUsers(roleBefore, roleAfter);
        }else {
            return Promise.resolve(undefined as any);
        }
    }
}
