import {RoleController} from "./Roles/role.controller";
import {RoleRepository} from "./Roles/role.repository";
import {RoleRepositoryFirebase} from "./Roles/role.repository.firebase";
import {RoleService} from "./Roles/role.service";
import {RoleControllerFirebase} from "./Roles/role.controller.firebase";
import {StockController} from "./Stocks/stock.controller";
import {StockRepository} from "./Stocks/stock.repository";
import {StockRepositoryFirebase} from "./Stocks/stock.repository.firebase";
import {StockService} from "./Stocks/stock.service";
import {StockControllerFirebase} from "./Stocks/stock.controller.firebase";

export class DependencyFactory {
    getRoleController(): RoleController {
        const repo: RoleRepository = new RoleRepositoryFirebase();
        const service: RoleService = new RoleService(repo);
        return new RoleControllerFirebase(service);
    }

    getStockController(): StockController {
        const repo: StockRepository = new StockRepositoryFirebase();
        const service: StockService = new StockService(repo);
        return new StockControllerFirebase(service);
    }
}
