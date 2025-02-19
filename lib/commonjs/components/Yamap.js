"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YaMap = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _resolveAssetSource = _interopRequireDefault(require("react-native/Libraries/Image/resolveAssetSource"));
var _CallbacksManager = _interopRequireDefault(require("../utils/CallbacksManager"));
var _interfaces = require("../interfaces");
var _utils = require("../utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const {
  yamap: NativeYamapModule
} = _reactNative.NativeModules;
const YaMapNativeComponent = (0, _reactNative.requireNativeComponent)('YamapView');
class YaMap extends _react.default.Component {
  static defaultProps = {
    showUserPosition: true,
    clusterColor: 'red',
    maxFps: 60
  };
  map = /*#__PURE__*/_react.default.createRef();
  static ALL_MASSTRANSIT_VEHICLES = ['bus', 'trolleybus', 'tramway', 'minibus', 'suburban', 'underground', 'ferry', 'cable', 'funicular'];
  static init(apiKey) {
    return NativeYamapModule.init(apiKey);
  }
  static setLocale(locale) {
    return new Promise((resolve, reject) => {
      NativeYamapModule.setLocale(locale, () => resolve(), err => reject(new Error(err)));
    });
  }
  static getLocale() {
    return new Promise((resolve, reject) => {
      NativeYamapModule.getLocale(locale => resolve(locale), err => reject(new Error(err)));
    });
  }
  static resetLocale() {
    return new Promise((resolve, reject) => {
      NativeYamapModule.resetLocale(() => resolve(), err => reject(new Error(err)));
    });
  }
  findRoutes(points, vehicles, callback) {
    this._findRoutes(points, vehicles, callback);
  }
  findMasstransitRoutes(points, callback) {
    this._findRoutes(points, YaMap.ALL_MASSTRANSIT_VEHICLES, callback);
  }
  findPedestrianRoutes(points, callback) {
    this._findRoutes(points, [], callback);
  }
  findDrivingRoutes(points, callback) {
    this._findRoutes(points, ['car'], callback);
  }
  fitAllMarkers() {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('fitAllMarkers'), []);
  }
  setTrafficVisible(isVisible) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('setTrafficVisible'), [isVisible]);
  }
  fitMarkers(points) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('fitMarkers'), [points]);
  }
  setCenter(center, zoom = center.zoom || 10, azimuth = 0, tilt = 0, duration = 0, animation = _interfaces.Animation.SMOOTH) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('setCenter'), [center, zoom, azimuth, tilt, duration, animation]);
  }
  setZoom(zoom, duration = 0, animation = _interfaces.Animation.SMOOTH) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('setZoom'), [zoom, duration, animation]);
  }
  getCameraPosition(callback) {
    const cbId = _CallbacksManager.default.addCallback(callback);
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('getCameraPosition'), [cbId]);
  }
  getVisibleRegion(callback) {
    const cbId = _CallbacksManager.default.addCallback(callback);
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('getVisibleRegion'), [cbId]);
  }
  getScreenPoints(points, callback) {
    const cbId = _CallbacksManager.default.addCallback(callback);
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('getScreenPoints'), [points, cbId]);
  }
  getWorldPoints(points, callback) {
    const cbId = _CallbacksManager.default.addCallback(callback);
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('getWorldPoints'), [points, cbId]);
  }
  _findRoutes(points, vehicles, callback) {
    const cbId = _CallbacksManager.default.addCallback(callback);
    const args = _reactNative.Platform.OS === 'ios' ? [{
      points,
      vehicles,
      id: cbId
    }] : [points, vehicles, cbId];
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('findRoutes'), args);
  }
  getCommand(cmd) {
    return _reactNative.Platform.OS === 'ios' ? _reactNative.UIManager.getViewManagerConfig('YamapView').Commands[cmd] : cmd;
  }
  processRoute(event) {
    const {
      id,
      ...routes
    } = event.nativeEvent;
    _CallbacksManager.default.call(id, routes);
  }
  processCameraPosition(event) {
    const {
      id,
      ...point
    } = event.nativeEvent;
    _CallbacksManager.default.call(id, point);
  }
  processVisibleRegion(event) {
    const {
      id,
      ...visibleRegion
    } = event.nativeEvent;
    _CallbacksManager.default.call(id, visibleRegion);
  }
  processWorldToScreenPointsReceived(event) {
    const {
      id,
      ...screenPoints
    } = event.nativeEvent;
    _CallbacksManager.default.call(id, screenPoints);
  }
  processScreenToWorldPointsReceived(event) {
    const {
      id,
      ...worldPoints
    } = event.nativeEvent;
    _CallbacksManager.default.call(id, worldPoints);
  }
  resolveImageUri(img) {
    return img ? (0, _resolveAssetSource.default)(img).uri : '';
  }
  getProps() {
    const props = {
      ...this.props,
      onRouteFound: this.processRoute,
      onCameraPositionReceived: this.processCameraPosition,
      onVisibleRegionReceived: this.processVisibleRegion,
      onWorldToScreenPointsReceived: this.processWorldToScreenPointsReceived,
      onScreenToWorldPointsReceived: this.processScreenToWorldPointsReceived,
      userLocationIcon: this.props.userLocationIcon ? this.resolveImageUri(this.props.userLocationIcon) : undefined
    };
    (0, _utils.processColorProps)(props, 'clusterColor');
    (0, _utils.processColorProps)(props, 'userLocationAccuracyFillColor');
    (0, _utils.processColorProps)(props, 'userLocationAccuracyStrokeColor');
    return props;
  }
  render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(YaMapNativeComponent, {
      ...this.getProps(),
      ref: this.map
    });
  }
}
exports.YaMap = YaMap;
//# sourceMappingURL=Yamap.js.map