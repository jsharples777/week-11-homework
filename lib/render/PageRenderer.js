"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageRenderer = void 0;

var _EmployeeRenderer = require("./EmployeeRenderer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PageRenderer = /*#__PURE__*/function () {
  function PageRenderer(employees) {
    _classCallCheck(this, PageRenderer);

    _defineProperty(this, "employees", void 0);

    this.employees = employees;
  }

  _createClass(PageRenderer, [{
    key: "renderHead",
    value: function renderHead() {
      var buffer = "" + "<head>\r\n" + "    <meta charset=\"utf-8\" />\r\n" + "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n" + "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n" + "    <link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\">\r\n" + "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css\"> \r\n" + "    <title>Team Profile</title>\r\n" + "</head>\r\n";
      return buffer;
    }
  }, {
    key: "renderPageHeader",
    value: function renderPageHeader() {
      var buffer = "" + "<div class=\"jumbotron bg-dark text-white\">\r\n" + "  <h1 class=\"display-4\">Team Profile</h1>\r\n" + "</div>\r\n";
      return buffer;
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var buffer = "" + "<body class=\"bg-light\">\r\n" + "  ".concat(this.renderPageHeader(), "\r\n") + "  <div class=\"container-fluid\">\r\n" + "    <div class=\"row justify-content-around\">\r\n";
      this.employees.forEach(function (employee) {
        var employeeRenderer = new _EmployeeRenderer.EmployeeRenderer(employee);
        buffer += "" + "  <div class=\"col-sm-12 col-md-6 col-lg-3 h-100 d-inline-block mb-4\">\r\n" + "    ".concat(employeeRenderer.render(), "\r\n") + "  </div>\r\n";
      });
      buffer += "" + "    </div>\r\n" + "  </div>\r\n" + "</body>\r\n";
      return buffer;
    }
  }, {
    key: "render",
    value: function render() {
      var buffer = "" + "<!DOCTYPE html>\r\n" + "<html lang=\"en\">\r\n" + this.renderHead() + "\r\n" + this.renderBody() + "\r\n" + "</html>\r\n";
      return buffer;
    }
  }]);

  return PageRenderer;
}();

exports.PageRenderer = PageRenderer;