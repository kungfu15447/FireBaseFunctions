import {RoleController} from "./Roles/role.controller";
import {RoleRepository} from "./Roles/role.repository";
import {RoleRepositoryFirebase} from "./Roles/role.repository.firebase";
import {RoleService} from "./Roles/role.service";
import {RoleControllerFirebase} from "./Roles/role.controller.firebase";

export class DependencyFactory {
    getRoleController(): RoleController {
        const repo: RoleRepository = new RoleRepositoryFirebase();
        const service: RoleService = new RoleService(repo);
        return new RoleControllerFirebase(service);
    }
}
