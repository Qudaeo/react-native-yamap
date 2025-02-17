"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const utils_1 = require("../utils");
const NativeCircleComponent = (0, react_native_1.requireNativeComponent)('YamapCircle');
class Circle extends react_1.default.Component {
    static defaultProps = {};
    render() {
        const props = { ...this.props };
        (0, utils_1.processColorProps)(props, 'fillColor');
        (0, utils_1.processColorProps)(props, 'strokeColor');
        return react_1.default.createElement(NativeCircleComponent, { ...props });
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map