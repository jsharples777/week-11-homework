"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.employeeTypes = void 0;
var employeeTypes;
(function (employeeTypes) {
    employeeTypes[employeeTypes["Employee"] = 0] = "Employee";
    employeeTypes[employeeTypes["Manager"] = 1] = "Manager";
    employeeTypes[employeeTypes["Engineer"] = 2] = "Engineer";
    employeeTypes[employeeTypes["Intern"] = 3] = "Intern";
})(employeeTypes = exports.employeeTypes || (exports.employeeTypes = {}));
class Employee {
    constructor() {
        this.email = "";
        this.id = -1;
        this.name = "";
        this.role = employeeTypes.Employee;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getRoleId() {
        return this.role;
    }
    getRole() {
        switch (this.role) {
            case employeeTypes.Employee:
                return "Employee";
            case employeeTypes.Engineer:
                return "Engineer";
            case employeeTypes.Intern:
                return "Intern";
            case employeeTypes.Manager:
                return "Manager";
            default:
                return "Unknown";
        }
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map