import {Employee,employeeTypes} from "./Employee";

export class Manager extends Employee {
    constructor() {
        super();
        this.role = employeeTypes.Manager;
    }
}