import {Employee} from "../model/Employee";
import {EmployeeRenderer} from "./EmployeeRenderer";

export class PageRenderer {
    private employees: Employee[];

    constructor(employees: Employee[]) {
        this.employees = employees;
    }

    private renderHead():string {
        let buffer:string = ``+
        `<head>\r\n`+
        `    <meta charset="utf-8" />\r\n`+
        `    <meta name="viewport" content="width=device-width, initial-scale=1" />\r\n`+
        `    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">\r\n`+
        `    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">\r\n`+
        `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> \r\n`+
        `    <title>Team Profile</title>\r\n`+
        `</head>\r\n`;
        return buffer;
    }

    private renderPageHeader():string {
        let buffer:string = ``+
            `<div class="jumbotron bg-dark text-white">\r\n`+
            `  <h1 class="display-4">Team Profile</h1>\r\n`+
            `</div>\r\n`;
        return buffer;
    }

    private renderBody():string {
        let buffer:string = ``+
            `<body class="bg-light">\r\n`+
            `  ${this.renderPageHeader()}\r\n`+
            `  <div class="container-fluid">\r\n` +
            `    <div class="row justify-content-around">\r\n`;

        this.employees.forEach((employee) => {
            let employeeRenderer = new EmployeeRenderer(employee);

            buffer += ``+
                `  <div class="col-sm-12 col-md-6 col-lg-3 h-100 d-inline-block mb-4">\r\n`+
                `    ${employeeRenderer.render()}\r\n`+
                `  </div>\r\n`;
        });

        buffer += ``+
            `    </div>\r\n`+
            `  </div>\r\n`+
            `</body>\r\n`;

        return buffer;
    }

    public render():string {
        let buffer = ``+
            `<!DOCTYPE html>\r\n`+
            `<html lang="en">\r\n`+
            this.renderHead() + `\r\n` +
            this.renderBody() + `\r\n` +
            `</html>\r\n`;

        return buffer;
    }
}