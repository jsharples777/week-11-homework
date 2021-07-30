export enum employeeTypes {
    Employee,
    Manager,
    Engineer,
    Intern
}

export interface EmployeeSubType {
    getSubTypeAttributeName():string;
    getSubTypeAttributeValue():string;
}


export class Employee implements EmployeeSubType {
    protected id: number;
    protected name: string;
    protected email: string;
    protected role: employeeTypes;

    constructor() {
        this.email = "";
        this.id = -1;
        this.name = "";
        this.role = employeeTypes.Employee;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getRoleId(): employeeTypes {
        return this.role;
    }

    public getRole(): string {
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

    public setEmail(email:string) {
        this.email = email;
    }

    public getEmail():string {
        return this.email;
    }

    public getSubTypeAttributeName(): string {
        return "";
    }

    public getSubTypeAttributeValue(): string {
        return "";
    }
}
