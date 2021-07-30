"use strict";

var _Employee = require("../Employee");

var _Engineer = require("../Engineer");

describe('Engineer Test: constructing', function () {
  it("Should return an 'empty' Manager with an empty email, empty name, -1 for id, and a role of Engineer", function () {
    var employee = new _Engineer.Engineer();
    expect(employee.getId()).toBe(-1);
    expect(employee.getName()).toBe("");
    expect(employee.getEmail()).toBe("");
    expect(employee.getGitHubUsername()).toBe("");
    expect(employee.getRoleId()).toBe(_Employee.employeeTypes.Engineer);
  });
});
describe('Engineer Test: setting attributes', function () {
  it("Set engineer attributes ", function () {
    var employee = new _Engineer.Engineer();
    employee.setGitHubUsername("testusername");
    expect(employee.getGitHubUsername()).toBe("testusername");
    expect(employee.getRoleId()).toBe(_Employee.employeeTypes.Engineer);
  });
});