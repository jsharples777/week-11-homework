"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkHTMLEmployeeRendering = checkHTMLEmployeeRendering;

var _Manager = require("../../model/Manager");

var _EmployeeRenderer = require("../EmployeeRenderer");

var _Engineer = require("../../model/Engineer");

var _Intern = require("../../model/Intern");

function checkHTMLEmployeeRendering() {
  var manager = new _Manager.Manager();
  manager.setId(1);
  manager.setOfficeNumber(666);
  manager.setName("Lucifer");
  manager.setEmail("thedevil@facebook.com");
  console.log(new _EmployeeRenderer.EmployeeRenderer(manager).render());
  var engineer = new _Engineer.Engineer();
  engineer.setId(2);
  engineer.setName("Mephistopheles");
  engineer.setEmail("makessh_thappen@microsoft.com");
  engineer.setGitHubUsername("mephistopheles");
  console.log(new _EmployeeRenderer.EmployeeRenderer(engineer).render());
  var imp = new _Intern.Intern();
  imp.setId(3);
  imp.setName("Dogs Body");
  imp.setEmail("cannonfodder@hades.com");
  imp.setSchool("Lost Souls Academy");
  console.log(new _EmployeeRenderer.EmployeeRenderer(imp).render());
}

checkHTMLEmployeeRendering();