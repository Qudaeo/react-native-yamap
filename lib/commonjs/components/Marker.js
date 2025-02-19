"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _resolveAssetSource = _interopRequireDefault(require("react-native/Libraries/Image/resolveAssetSource"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// @ts-ignore

const NativeMarkerComponent = (0, _reactNative.requireNativeComponent)('YamapMarker');
class Marker extends _react.default.Component {
  static defaultProps = {
    rotated: false
  };
  state = {
    recreateKey: false,
    children: this.props.children
  };
  getCommand(cmd) {
    if (_reactNative.Platform.OS === 'ios') {
      return _reactNative.UIManager.getViewManagerConfig('YamapMarker').Commands[cmd];
    } else {
      return cmd;
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (_reactNative.Platform.OS === 'ios') {
      return {
        children: nextProps.children,
        recreateKey: nextProps.children === prevState.children ? prevState.recreateKey : !prevState.recreateKey
      };
    }
    return {
      children: nextProps.children,
      recreateKey: Boolean(nextProps.children)
    };
  }
  resolveImageUri(img) {
    return img ? (0, _resolveAssetSource.default)(img).uri : '';
  }
  getProps() {
    return {
      ...this.props,
      source: this.resolveImageUri(this.props.source)
    };
  }
  animatedMoveTo(coords, duration) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('animatedMoveTo'), [coords, duration]);
  }
  animatedRotateTo(angle, duration) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('animatedRotateTo'), [angle, duration]);
  }
  render() {
    return /*#__PURE__*/(0, _react.createElement)(NativeMarkerComponent, {
      ...this.getProps(),
      key: String(this.state.recreateKey),
      pointerEvents: "none"
    });
  }
}
exports.Marker = Marker;
//# sourceMappingURL=Marker.js.map