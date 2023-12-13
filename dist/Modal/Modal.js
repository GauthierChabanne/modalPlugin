"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    open,
    onClose
  } = _ref;
  console.log("hello how u doing");
  if (!open) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Employee Created !"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "Close")));
}
;
var _default = exports.default = Modal;