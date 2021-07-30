import {Manager} from "../../model/Manager";
import {EmployeeRenderer} from "../EmployeeRenderer";
import {Engineer} from "../../model/Engineer";
import {Intern} from "../../model/Intern";

export function checkHTMLEmployeeRendering():void {
    let manager = new Manager();
    manager.setId(1);
    manager.setOfficeNumber(666);
    manager.setName("Lucifer");
    manager.setEmail("thedevil@facebook.com");

    console.log(new EmployeeRenderer(manager).render());

    let engineer = new Engineer();
    engineer.setId(2);
    engineer.setName("Mephistopheles");
    engineer.setEmail("makessh_thappen@microsoft.com");
    engineer.setGitHubUsername("mephistopheles");

    console.log(new EmployeeRenderer(engineer).render());

    let imp = new Intern();
    imp.setId(3);
    imp.setName("Dogs Body");
    imp.setEmail("cannonfodder@hades.com");
    imp.setSchool("Lost Souls Academy");

    console.log(new EmployeeRenderer(imp).render());
}

checkHTMLEmployeeRendering();