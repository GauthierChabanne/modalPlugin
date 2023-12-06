'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body.active-modal{overflow-y:hidden}.modal,.overlay{bottom:0;height:100vh;left:0;position:fixed;right:0;top:0;width:100vw}.overlay{background:#313131cc}.modal-content{background:#f1f1f1;border-radius:3px;left:50%;line-height:1.4;max-width:600px;min-width:300px;padding:14px 28px;position:absolute;top:40%;transform:translate(-50%,-50%)}.close-modal{padding:5px 7px;position:absolute;right:10px;top:10px}";
styleInject(css_248z);

function Modal({
  open,
  onClose
}) {
  console.log("hello how u doing");
  if (!open) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "Employee Created !"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "Close")));
}

exports.Modal = Modal;
