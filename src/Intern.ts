import {Employee, employeeTypes} from "./Employee";

export class Intern extends Employee {
    constructor() {
        super();
        this.role = employeeTypes.Intern;
    }
}