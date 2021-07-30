import {Manager} from "../../model/Manager";
import {EmployeeRenderer} from "../EmployeeRenderer";
import {Engineer} from "../../model/Engineer";
import {Intern} from "../../model/Intern";
import {Employee} from "../../model/Employee";
import {PageRenderer} from "../PageRenderer";
import * as fs from "fs";

export function checkPageRendering():string {
    let employees:Employee[] = [];

    let manager = new Manager();
    manager.setId(1);
    manager.setOfficeNumber(666);
    manager.setName("Lucifer");
    manager.setEmail("thedevil@facebook.com");

    employees.push(manager);


    let engineer = new Engineer();
    engineer.setId(2);
    engineer.setName("Mephistopheles");
    engineer.setEmail("makessh_thappen@microsoft.com");
    engineer.setGitHubUsername("mephistopheles");

    employees.push(engineer);

    let imp = new Intern();
    imp.setId(3);
    imp.setName("Dogs Body");
    imp.setEmail("cannonfodder@hades.com");
    imp.setSchool("Lost Souls Academy");

    employees.push(imp);

    let pageRenderer = new PageRenderer(employees);

    return pageRenderer.render();
}

let page:string = checkPageRendering();
fs.writeFileSync("./dist/index.html",page);