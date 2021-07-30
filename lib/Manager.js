"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
class Manager extends Employee_1.Employee {
    constructor() {
        super();
        this.role = Employee_1.employeeTypes.Manager;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map