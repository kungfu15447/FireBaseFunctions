import {Role} from "../Models/role.module";

export interface RoleRepository {
    setRenamedRoleOnUsers(roleBefore: Role, roleAfter: Role): Promise<any>;
}
