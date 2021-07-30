"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeRenderer = void 0;

var _Employee = require("../model/Employee");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EmployeeRenderer = /*#__PURE__*/function () {
  function EmployeeRenderer(employee) {
    _classCallCheck(this, EmployeeRenderer);

    _defineProperty(this, "employee", void 0);

    this.employee = employee;
  }

  _createClass(EmployeeRenderer, [{
    key: "render",
    value: function render() {
      var buffer = "" + "<div class=\"card shadow rounded\">\r\n" + "  <div class=\"card-body bg-primary\">\r\n" + "    ".concat(this.renderTitle(), "\r\n") + "    ".concat(this.renderType(), "\r\n") + "    <ul class=\"list-group bg-secondary mt-3\">\r\n" + "      ".concat(this.renderId(), "\r\n") + "      ".concat(this.renderEmail(), "\r\n") + "      ".concat(this.renderTypeSpecificItem(), "\r\n") + "    </ul>\r\n" + "  </div>\r\n" + "</div>\r\n";
      return buffer;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      switch (this.employee.getRoleId()) {
        case _Employee.employeeTypes.Intern:
          return '<i class="fas fa-user-graduate"></i>';

        case _Employee.employeeTypes.Engineer:
          return '<i class="fas fa-wrench"></i>';

        case _Employee.employeeTypes.Manager:
          return '<i class="fas fa-phone"></i>';

        default:
          return "";
      }
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return "<h5 class=\"card-title text-white\">".concat(this.employee.getName(), "</h5>");
    }
  }, {
    key: "renderType",
    value: function renderType() {
      return "<h6 class=\"card-subtitle text-white\">".concat(this.employee.getRole(), " ").concat(this.renderIcon(), "</h6>");
    }
  }, {
    key: "renderId",
    value: function renderId() {
      return "<li class=\"list-group-item\"><strong>Id:</strong> ".concat(this.employee.getId(), " </li>");
    }
  }, {
    key: "renderEmail",
    value: function renderEmail() {
      return "<li class=\"list-group-item\"><strong>Email:</strong> <a href=\"mailto:".concat(this.employee.getEmail(), "\">").concat(this.employee.getEmail(), "</a></li>");
    }
  }, {
    key: "renderTypeSpecificValue",
    value: function renderTypeSpecificValue() {
      var value = this.employee.getSubTypeAttributeValue();

      switch (this.employee.getRoleId()) {
        case _Employee.employeeTypes.Engineer:
          return "<a href=\"https://github.com/".concat(value, "\" target=\"_blank\">").concat(value, "</a>");

        default:
          return value;
      }
    }
  }, {
    key: "renderTypeSpecificItem",
    value: function renderTypeSpecificItem() {
      return "<li class=\"list-group-item\"><strong>".concat(this.employee.getSubTypeAttributeName(), ":</strong> ").concat(this.renderTypeSpecificValue(), "</li>");
    }
  }]);

  return EmployeeRenderer;
}();

exports.EmployeeRenderer = EmployeeRenderer;