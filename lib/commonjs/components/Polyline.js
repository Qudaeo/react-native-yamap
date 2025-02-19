"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polyline = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NativePolylineComponent = (0, _reactNative.requireNativeComponent)('YamapPolyline');
class Polyline extends _react.default.Component {
  render() {
    const props = {
      ...this.props
    };
    (0, _utils.processColorProps)(props, 'fillColor');
    (0, _utils.processColorProps)(props, 'strokeColor');
    (0, _utils.processColorProps)(props, 'outlineColor');
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(NativePolylineComponent, {
      ...props
    });
  }
}
exports.Polyline = Polyline;
//# sourceMappingURL=Polyline.js.map