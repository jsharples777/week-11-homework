import {Employee,employeeTypes} from "./Employee";

export class Manager extends Employee {
    protected officeNumber:number = -1;

    constructor() {
        super();
        this.role = employeeTypes.Manager;
    }

    public setOfficeNumber(officeNumber:number) {
        this.officeNumber = officeNumber;
    }

    public getOfficeNumber():number {
        return this.officeNumber;
    }
}