import {Employee, employeeTypes} from "./Employee";

export class Intern extends Employee {
    protected school:string = "";

    constructor() {
        super();
        this.role = employeeTypes.Intern;
    }

    public getSchool():string {
        return this.school;
    }

    public setSchool(school:string) {
        this.school = school;
    }
}