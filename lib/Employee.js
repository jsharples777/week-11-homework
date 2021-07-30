"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Employee = exports.employeeTypes = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var employeeTypes;
exports.employeeTypes = employeeTypes;

(function (employeeTypes) {
  employeeTypes[employeeTypes["Employee"] = 0] = "Employee";
  employeeTypes[employeeTypes["Manager"] = 1] = "Manager";
  employeeTypes[employeeTypes["Engineer"] = 2] = "Engineer";
  employeeTypes[employeeTypes["Intern"] = 3] = "Intern";
})(employeeTypes || (exports.employeeTypes = employeeTypes = {}));

var Employee = /*#__PURE__*/function () {
  function Employee() {
    _classCallCheck(this, Employee);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "role", void 0);

    this.email = "";
    this.id = -1;
    this.name = "";
    this.role = employeeTypes.Employee;
  }

  _createClass(Employee, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
  }, {
    key: "getRoleId",
    value: function getRoleId() {
      return this.role;
    }
  }, {
    key: "getRole",
    value: function getRole() {
      switch (this.role) {
        case employeeTypes.Employee:
          return "Employee";

        case employeeTypes.Engineer:
          return "Engineer";

        case employeeTypes.Intern:
          return "Intern";

        case employeeTypes.Manager:
          return "Manager";

        default:
          return "Unknown";
      }
    }
  }, {
    key: "setEmail",
    value: function setEmail(email) {
      this.email = email;
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      return this.email;
    }
  }]);

  return Employee;
}();

exports.Employee = Employee;