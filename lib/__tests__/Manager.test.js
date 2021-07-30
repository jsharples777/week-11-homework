"use strict";

var _Employee = require("../Employee");

var _Manager = require("../Manager");

describe('Manager Test: constructing', function () {
  it("Should return an 'empty' Manager with an empty email, empty name, -1 for id, -1 for office, and a role of Manager", function () {
    var employee = new _Manager.Manager();
    expect(employee.getId()).toBe(-1);
    expect(employee.getName()).toBe("");
    expect(employee.getEmail()).toBe("");
    expect(employee.getRoleId()).toBe(_Employee.employeeTypes.Manager);
    expect(employee.getOfficeNumber()).toBe(-1);
  });
});
describe('Manager Test: setting attributes', function () {
  it("Set manager attributes ", function () {
    var employee = new _Manager.Manager();
    employee.setOfficeNumber(6);
    expect(employee.getOfficeNumber()).toBe(6);
    expect(employee.getRoleId()).toBe(_Employee.employeeTypes.Manager);
  });
});