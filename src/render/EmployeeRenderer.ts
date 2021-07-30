import {Employee, employeeTypes} from "../model/Employee";

export class EmployeeRenderer {
    protected employee:Employee;

    constructor(employee:Employee) {
        this.employee = employee;
    }

    public render():string {
        let buffer:string = ``+
        `<div class="card shadow rounded">\r\n`+
        `  <div class="card-body bg-primary">\r\n`+
        `    ${this.renderTitle()}\r\n`+
        `    ${this.renderType()}\r\n`+
        `    <ul class="list-group bg-secondary mt-3">\r\n`+
        `      ${this.renderId()}\r\n`+
        `      ${this.renderEmail()}\r\n`+
        `      ${this.renderTypeSpecificItem()}\r\n`+
        `    </ul>\r\n`+
        `  </div>\r\n`+
        `</div>\r\n`;
        return buffer;
    }

    private renderIcon():string {
        switch(this.employee.getRoleId()) {
            case employeeTypes.Intern: return '<i class="fas fa-user-graduate"></i>';
            case employeeTypes.Engineer: return '<i class="fas fa-wrench"></i>';
            case employeeTypes.Manager: return '<i class="fas fa-phone"></i>';
            default: return "";
        }
    }

    private renderTitle():string {
        return `<h5 class="card-title text-white">${this.employee.getName()}</h5>`;
    }

    private renderType():string{
        return `<h6 class="card-subtitle text-white">${this.employee.getRole()} ${this.renderIcon()}</h6>`;
    }

    private renderId():string {
        return `<li class="list-group-item"><strong>Id:</strong> ${this.employee.getId()} </li>`;
    }

    private renderEmail():string {
        return `<li class="list-group-item"><strong>Email:</strong> <a href="mailto:${this.employee.getEmail()}">${this.employee.getEmail()}</a></li>`;
    }

    private renderTypeSpecificValue():string {
        let value = this.employee.getSubTypeAttributeValue();

        switch (this.employee.getRoleId()) {
            case employeeTypes.Engineer: return `<a href="https://github.com/${value}" target="_blank">${value}</a>`;
            default: return value;
        }
    }


    private renderTypeSpecificItem():string {
        return `<li class="list-group-item"><strong>${this.employee.getSubTypeAttributeName()}:</strong> ${this.renderTypeSpecificValue()}</li>`;
    }
}

