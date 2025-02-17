"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusteredYamap = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
// @ts-ignore
const resolveAssetSource_1 = __importDefault(require("react-native/Libraries/Image/resolveAssetSource"));
const CallbacksManager_1 = __importDefault(require("../utils/CallbacksManager"));
const interfaces_1 = require("../interfaces");
const utils_1 = require("../utils");
const Yamap_1 = require("./Yamap");
const { yamap: NativeYamapModule } = react_native_1.NativeModules;
const YaMapNativeComponent = (0, react_native_1.requireNativeComponent)('ClusteredYamapView');
class ClusteredYamap extends react_1.default.Component {
    static defaultProps = {
        showUserPosition: true,
        clusterColor: 'red',
        maxFps: 60
    };
    map = react_1.default.createRef();
    static ALL_MASSTRANSIT_VEHICLES = [
        'bus',
        'trolleybus',
        'tramway',
        'minibus',
        'suburban',
        'underground',
        'ferry',
        'cable',
        'funicular',
    ];
    static init(apiKey) {
        return NativeYamapModule.init(apiKey);
    }
    static setLocale(locale) {
        return new Promise((resolve, reject) => {
            NativeYamapModule.setLocale(locale, () => resolve(), (err) => reject(new Error(err)));
        });
    }
    static getLocale() {
        return new Promise((resolve, reject) => {
            NativeYamapModule.getLocale((locale) => resolve(locale), (err) => reject(new Error(err)));
        });
    }
    static resetLocale() {
        return new Promise((resolve, reject) => {
            NativeYamapModule.resetLocale(() => resolve(), (err) => reject(new Error(err)));
        });
    }
    findRoutes(points, vehicles, callback) {
        this._findRoutes(points, vehicles, callback);
    }
    findMasstransitRoutes(points, callback) {
        this._findRoutes(points, Yamap_1.YaMap.ALL_MASSTRANSIT_VEHICLES, callback);
    }
    findPedestrianRoutes(points, callback) {
        this._findRoutes(points, [], callback);
    }
    findDrivingRoutes(points, callback) {
        this._findRoutes(points, ['car'], callback);
    }
    fitAllMarkers() {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('fitAllMarkers'), []);
    }
    setTrafficVisible(isVisible) {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('setTrafficVisible'), [isVisible]);
    }
    fitMarkers(points) {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('fitMarkers'), [points]);
    }
    setCenter(center, zoom = center.zoom || 10, azimuth = 0, tilt = 0, duration = 0, animation = interfaces_1.Animation.SMOOTH) {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('setCenter'), [center, zoom, azimuth, tilt, duration, animation]);
    }
    setZoom(zoom, duration = 0, animation = interfaces_1.Animation.SMOOTH) {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('setZoom'), [zoom, duration, animation]);
    }
    getCameraPosition(callback) {
        const cbId = CallbacksManager_1.default.addCallback(callback);
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('getCameraPosition'), [cbId]);
    }
    getVisibleRegion(callback) {
        const cbId = CallbacksManager_1.default.addCallback(callback);
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('getVisibleRegion'), [cbId]);
    }
    getScreenPoints(points, callback) {
        const cbId = CallbacksManager_1.default.addCallback(callback);
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('getScreenPoints'), [points, cbId]);
    }
    getWorldPoints(points, callback) {
        const cbId = CallbacksManager_1.default.addCallback(callback);
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('getWorldPoints'), [points, cbId]);
    }
    _findRoutes(points, vehicles, callback) {
        const cbId = CallbacksManager_1.default.addCallback(callback);
        const args = react_native_1.Platform.OS === 'ios' ? [{ points, vehicles, id: cbId }] : [points, vehicles, cbId];
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('findRoutes'), args);
    }
    getCommand(cmd) {
        return react_native_1.Platform.OS === 'ios' ? react_native_1.UIManager.getViewManagerConfig('ClusteredYamapView').Commands[cmd] : cmd;
    }
    processRoute(event) {
        const { id, ...routes } = event.nativeEvent;
        CallbacksManager_1.default.call(id, routes);
    }
    processCameraPosition(event) {
        const { id, ...point } = event.nativeEvent;
        CallbacksManager_1.default.call(id, point);
    }
    processVisibleRegion(event) {
        const { id, ...visibleRegion } = event.nativeEvent;
        CallbacksManager_1.default.call(id, visibleRegion);
    }
    processWorldToScreenPointsReceived(event) {
        const { id, ...screenPoints } = event.nativeEvent;
        CallbacksManager_1.default.call(id, screenPoints);
    }
    processScreenToWorldPointsReceived(event) {
        const { id, ...worldPoints } = event.nativeEvent;
        CallbacksManager_1.default.call(id, worldPoints);
    }
    resolveImageUri(img) {
        return img ? (0, resolveAssetSource_1.default)(img).uri : '';
    }
    getProps() {
        const props = {
            ...this.props,
            clusteredMarkers: this.props.clusteredMarkers.map(mark => mark.point),
            children: this.props.clusteredMarkers.map(this.props.renderMarker),
            onRouteFound: this.processRoute,
            onCameraPositionReceived: this.processCameraPosition,
            onVisibleRegionReceived: this.processVisibleRegion,
            onWorldToScreenPointsReceived: this.processWorldToScreenPointsReceived,
            onScreenToWorldPointsReceived: this.processScreenToWorldPointsReceived,
            userLocationIcon: this.props.userLocationIcon ? this.resolveImageUri(this.props.userLocationIcon) : undefined
        };
        (0, utils_1.processColorProps)(props, 'clusterColor');
        (0, utils_1.processColorProps)(props, 'userLocationAccuracyFillColor');
        (0, utils_1.processColorProps)(props, 'userLocationAccuracyStrokeColor');
        return props;
    }
    render() {
        return (react_1.default.createElement(YaMapNativeComponent, { ...this.getProps(), ref: this.map }));
    }
}
exports.ClusteredYamap = ClusteredYamap;
//# sourceMappingURL=ClusteredYamap.js.map