import {RoleRepository} from "../../src/Roles/role.repository";
import {IMock, Mock, Times} from 'moq.ts';
import {RoleService} from "../../src/Roles/role.service";
import {Role} from "../../src/Models/role.module";

describe('RoleService', () => {
    let roleRepository: IMock<RoleRepository>;
    let roleService: RoleService;
    let roleBefore: Role = {name: 'default', isDefault: true}
    let roleAfter: Role = {name: 'defaulty', isDefault: true}
    beforeEach(() => {
        roleRepository = new Mock<RoleRepository>()
            .setup(rr => rr.setRenamedRoleOnUsers(roleBefore, roleAfter))
            .returns(Promise.resolve(roleAfter));
        roleService = new RoleService(roleRepository.object());
    });

    it('repoRepository method setRenamedRoleOnUsers get called once in RoleService', async () => {
        await roleService.renameRole(roleBefore, roleAfter);
        roleRepository.verify(rr => rr.setRenamedRoleOnUsers(roleBefore, roleAfter)
            , Times.Exactly(1));
        /*return roleService.renameRole(roleBefore, roleAfter).then(value => {
            expect(value).toBe(Promise);
        });*/
    })

    it('renameRole method in RoleService returns a promise with undefined if roleBefore or roleAfter is null/undefined', async () => {
        const undefinedRoleBefore = undefined as any;
        const undefindRoleAfter = undefined as any;
        const role = await roleService.renameRole(undefinedRoleBefore, undefindRoleAfter);
        expect(role).toBeUndefined();
    })
});
