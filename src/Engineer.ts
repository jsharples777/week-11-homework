import {Employee,employeeTypes} from "./Employee";

export class Engineer extends Employee {
    constructor() {
        super();
        this.role = employeeTypes.Engineer;
    }

}