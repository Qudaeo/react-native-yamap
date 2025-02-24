"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polygon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NativePolygonComponent = (0, _reactNative.requireNativeComponent)('YamapPolygon');
const Polygon = props => {
  const processedProps = (0, _react.useMemo)(() => (0, _utils.getProcessedColors)(props, ['fillColor', 'strokeColor']), [props]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(NativePolygonComponent, {
    ...processedProps
  });
};
exports.Polygon = Polygon;
//# sourceMappingURL=Polygon.js.map