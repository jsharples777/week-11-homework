"use strict";

var _Employee = require("../Employee");

var _Intern = require("../Intern");

describe('Intern Test: constructing', function () {
  it("Should return an 'empty' Manager with an empty email, empty name, -1 for id, empty school, and a role of Intern", function () {
    var employee = new _Intern.Intern();
    expect(employee.getId()).toBe(-1);
    expect(employee.getName()).toBe("");
    expect(employee.getEmail()).toBe("");
    expect(employee.getSchool()).toBe("");
    expect(employee.getRoleId()).toBe(_Employee.employeeTypes.Intern);
  });
});
describe('Intern Test: setting attributes', function () {
  it("Set engineer attributes ", function () {
    var employee = new _Intern.Intern();
    employee.setSchool("Test School");
    expect(employee.getSchool()).toBe("Test School");
    expect(employee.getRoleId()).toBe(_Employee.employeeTypes.Intern);
  });
});