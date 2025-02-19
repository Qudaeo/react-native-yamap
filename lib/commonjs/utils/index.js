"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guid = guid;
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
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}
//# sourceMappingURL=index.js.map