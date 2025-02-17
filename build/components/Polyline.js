"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polyline = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const utils_1 = require("../utils");
const NativePolylineComponent = (0, react_native_1.requireNativeComponent)('YamapPolyline');
class Polyline extends react_1.default.Component {
    render() {
        const props = { ...this.props };
        (0, utils_1.processColorProps)(props, 'fillColor');
        (0, utils_1.processColorProps)(props, 'strokeColor');
        (0, utils_1.processColorProps)(props, 'outlineColor');
        return react_1.default.createElement(NativePolylineComponent, { ...props });
    }
}
exports.Polyline = Polyline;
//# sourceMappingURL=Polyline.js.map