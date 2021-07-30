"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intern = void 0;
const Employee_1 = require("./Employee");
class Intern extends Employee_1.Employee {
    constructor() {
        super();
        this.role = Employee_1.employeeTypes.Intern;
    }
}
exports.Intern = Intern;
//# sourceMappingURL=Intern.js.map