import {employeeTypes} from "../Employee";
import {Intern} from "../Intern";

describe('Intern Test: constructing', function () {
    it("Should return an 'empty' Manager with an empty email, empty name, -1 for id, empty school, and a role of Intern",() => {
        let employee = new Intern();
        expect(employee.getId()).toBe(-1);
        expect(employee.getName()).toBe("");
        expect(employee.getEmail()).toBe("");
        expect(employee.getSchool()).toBe("");
        expect(employee.getRoleId()).toBe(employeeTypes.Intern);
    });
});

describe('Intern Test: setting attributes', function () {
    it("Set engineer attributes ",() => {
        let employee = new Intern();
        employee.setSchool("Test School");
        expect(employee.getSchool()).toBe("Test School");
        expect(employee.getRoleId()).toBe(employeeTypes.Intern);
    });
});