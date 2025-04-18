"use strict";

import { processColor } from 'react-native';
export function processColorProps(props, name) {
  if (props[name]) {
    /* eslint-disable no-param-reassign */
    // @ts-ignore
    props[name] = processColor(props[name]);
    /* eslint-enable no-param-reassign */
  }
}
export const getProcessedColors = (props, colorProps) => {
  const _props = {
    ...props
  };
  colorProps.forEach(name => {
    if (_props[name]) {
      _props[name] = processColor(_props[name]);
    }
  });
  return _props;
};
export const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
//# sourceMappingURL=index.js.map