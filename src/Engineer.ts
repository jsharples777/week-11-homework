import {Employee,employeeTypes} from "./Employee";

export class Engineer extends Employee {
    protected gitHubUsername:string = "";

    constructor() {
        super();
        this.role = employeeTypes.Engineer;
    }

    public getGitHubUsername():string {
        return this.gitHubUsername;
    }

    public setGitHubUsername(name:string) {
        this.gitHubUsername = name;
    }

}