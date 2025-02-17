"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marker = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
// @ts-ignore
const resolveAssetSource_1 = __importDefault(require("react-native/Libraries/Image/resolveAssetSource"));
const NativeMarkerComponent = (0, react_native_1.requireNativeComponent)('YamapMarker');
class Marker extends react_1.default.Component {
    static defaultProps = {
        rotated: false,
    };
    state = {
        recreateKey: false,
        children: this.props.children
    };
    getCommand(cmd) {
        if (react_native_1.Platform.OS === 'ios') {
            return react_native_1.UIManager.getViewManagerConfig('YamapMarker').Commands[cmd];
        }
        else {
            return cmd;
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (react_native_1.Platform.OS === 'ios') {
            return {
                children: nextProps.children,
                recreateKey: nextProps.children === prevState.children
                    ? prevState.recreateKey
                    : !prevState.recreateKey
            };
        }
        return {
            children: nextProps.children,
            recreateKey: Boolean(nextProps.children)
        };
    }
    resolveImageUri(img) {
        return img ? (0, resolveAssetSource_1.default)(img).uri : '';
    }
    getProps() {
        return {
            ...this.props,
            source: this.resolveImageUri(this.props.source)
        };
    }
    animatedMoveTo(coords, duration) {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('animatedMoveTo'), [coords, duration]);
    }
    animatedRotateTo(angle, duration) {
        react_native_1.UIManager.dispatchViewManagerCommand((0, react_native_1.findNodeHandle)(this), this.getCommand('animatedRotateTo'), [angle, duration]);
    }
    render() {
        return (react_1.default.createElement(NativeMarkerComponent, { ...this.getProps(), key: String(this.state.recreateKey), pointerEvents: 'none' }));
    }
}
exports.Marker = Marker;
//# sourceMappingURL=Marker.js.map