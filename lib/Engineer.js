"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
const Employee_1 = require("./Employee");
class Engineer extends Employee_1.Employee {
    constructor() {
        super();
        this.role = Employee_1.employeeTypes.Engineer;
    }
}
exports.Engineer = Engineer;
//# sourceMappingURL=Engineer.js.map