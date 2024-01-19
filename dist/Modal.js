"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
/**
 * The modal shown when an employe is created.
 * @component
 * @example
 *
 * const open = True;
 * const onClose = function();
 * const message = "Employé créé !";
 *
 * return (
 *  <Modal open={open} onClose={onClose} message={message}  />
 * )
 */

function Modal(_ref) {
  let {
    open,
    onClose,
    message
  } = _ref;
  if (!open) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, message), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "Close")));
}
;