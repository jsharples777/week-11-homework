export enum employeeTypes {
    Employee,
    Manager,
    Engineer,
    Intern
}


export abstract class Employee {
    protected id: number;
    protected name: string;
    protected email: string;
    protected role: employeeTypes;

    protected constructor() {
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
}
