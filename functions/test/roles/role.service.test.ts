import {RoleRepository} from "../../src/Roles/role.repository";
import {IMock, Mock} from 'moq.ts';
import {RoleService} from "../../src/Roles/role.service";
import {Role} from "../../src/Models/role.module";

describe('RoleService', () => {
    let roleRepository: IMock<RoleRepository>;
    let roleService: RoleService;
    let roleBefore: Role = {name: 'default', isDefault: true}
    let roleAfter: Role = {name: 'defaulty', isDefault: true}
    beforeEach(() => {
        roleRepository = new Mock<RoleRepository>()
            /*.setup(rr => rr.setRenamedRoleOnUsers(roleBefore, roleAfter))
            .returns(new Promise((resolve, reject) => {resolve()}));*/
        roleService = new RoleService(roleRepository.object());
    });

    it('renameRole method in RoleService returns a promise', async () => {
        expect(roleService.renameRole(roleBefore, roleAfter)).toBe(Promise);
    })
});
