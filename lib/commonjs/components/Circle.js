"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NativeCircleComponent = (0, _reactNative.requireNativeComponent)('YamapCircle');
class Circle extends _react.default.Component {
  static defaultProps = {};
  render() {
    const props = {
      ...this.props
    };
    (0, _utils.processColorProps)(props, 'fillColor');
    (0, _utils.processColorProps)(props, 'strokeColor');
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(NativeCircleComponent, {
      ...props
    });
  }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map