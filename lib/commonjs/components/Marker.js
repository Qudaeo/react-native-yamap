"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const COMPONENT_NAME = 'YamapMarker';
const NativeMarkerComponent = (0, _reactNative.requireNativeComponent)(COMPONENT_NAME);
const getCommand = cmd => {
  return _reactNative.Platform.OS === 'ios' ? _reactNative.UIManager.getViewManagerConfig(COMPONENT_NAME).Commands[cmd] : cmd;
};
const Marker = exports.Marker = /*#__PURE__*/(0, _react.forwardRef)(({
  source,
  ...props
}, ref) => {
  const nativeRef = (0, _react.useRef)(null);
  const resolvedSource = (0, _react.useMemo)(() => source ? _reactNative.Image.resolveAssetSource(source) : undefined, [source]);
  const animatedMoveTo = (0, _react.useCallback)((coords, duration) => {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(nativeRef.current), getCommand('animatedMoveTo'), [coords, duration]);
  }, []);
  const animatedRotateTo = (0, _react.useCallback)((angle, duration) => {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(nativeRef.current), getCommand('animatedRotateTo'), [angle, duration]);
  }, []);
  (0, _react.useImperativeHandle)(ref, () => ({
    animatedMoveTo,
    animatedRotateTo
  }), [animatedMoveTo, animatedRotateTo]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(NativeMarkerComponent, {
    ...props,
    ref: nativeRef,
    source: resolvedSource?.uri,
    pointerEvents: "none"
  });
});
//# sourceMappingURL=Marker.js.map