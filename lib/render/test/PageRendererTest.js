"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPageRendering = checkPageRendering;

var _Manager = require("../../model/Manager");

var _Engineer = require("../../model/Engineer");

var _Intern = require("../../model/Intern");

var _PageRenderer = require("../PageRenderer");

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function checkPageRendering() {
  var employees = [];
  var manager = new _Manager.Manager();
  manager.setId(1);
  manager.setOfficeNumber(666);
  manager.setName("Lucifer");
  manager.setEmail("thedevil@facebook.com");
  employees.push(manager);
  var engineer = new _Engineer.Engineer();
  engineer.setId(2);
  engineer.setName("Mephistopheles");
  engineer.setEmail("makessh_thappen@microsoft.com");
  engineer.setGitHubUsername("mephistopheles");
  employees.push(engineer);
  var imp = new _Intern.Intern();
  imp.setId(3);
  imp.setName("Dogs Body");
  imp.setEmail("cannonfodder@hades.com");
  imp.setSchool("Lost Souls Academy");
  employees.push(imp);
  var pageRenderer = new _PageRenderer.PageRenderer(employees);
  return pageRenderer.render();
}

var page = checkPageRendering();
fs.writeFileSync("./dist/index.html", page);