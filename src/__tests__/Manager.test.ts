import {employeeTypes} from "../Employee";
import {Manager} from "../Manager";

describe('Manager Test: constructing', function () {
    it("Should return an 'empty' Manager with an empty email, empty name, -1 for id, -1 for office, and a role of Manager",() => {
        let employee = new Manager();
        expect(employee.getId()).toBe(-1);
        expect(employee.getName()).toBe("");
        expect(employee.getEmail()).toBe("");
        expect(employee.getRoleId()).toBe(employeeTypes.Manager);
        expect(employee.getOfficeNumber()).toBe(-1);
    });
});

describe('Manager Test: setting attributes', function () {
    it("Set manager attributes ",() => {
        let employee = new Manager();
        employee.setOfficeNumber(6);
        expect(employee.getOfficeNumber()).toBe(6);
        expect(employee.getRoleId()).toBe(employeeTypes.Manager);
    });
});