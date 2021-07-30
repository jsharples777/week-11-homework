import {employeeTypes} from "../Employee";
import {Engineer} from "../Engineer";

describe('Engineer Test: constructing', function () {
    it("Should return an 'empty' Manager with an empty email, empty name, -1 for id, and a role of Engineer",() => {
        let employee = new Engineer();
        expect(employee.getId()).toBe(-1);
        expect(employee.getName()).toBe("");
        expect(employee.getEmail()).toBe("");
        expect(employee.getGitHubUsername()).toBe("");
        expect(employee.getRoleId()).toBe(employeeTypes.Engineer);
    });
});

describe('Engineer Test: setting attributes', function () {
    it("Set engineer attributes ",() => {
        let employee = new Engineer();
        employee.setGitHubUsername("testusername");
        expect(employee.getGitHubUsername()).toBe("testusername");
        expect(employee.getRoleId()).toBe(employeeTypes.Engineer);
    });
});