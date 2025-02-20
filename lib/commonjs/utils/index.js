"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guid = exports.getProcessedColors = void 0;
exports.processColorProps = processColorProps;
var _reactNative = require("react-native");
function processColorProps(props, name) {
  if (props[name]) {
    /* eslint-disable no-param-reassign */
    // @ts-ignore
    props[name] = (0, _reactNative.processColor)(props[name]);
    /* eslint-enable no-param-reassign */
  }
}
const getProcessedColors = (props, colorProps) => {
  const _props = {
    ...props
  };
  colorProps.forEach(name => {
    if (_props[name]) {
      _props[name] = (0, _reactNative.processColor)(_props[name]);
    }
  });
  return _props;
};
exports.getProcessedColors = getProcessedColors;
const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
exports.guid = guid;
//# sourceMappingURL=index.js.map