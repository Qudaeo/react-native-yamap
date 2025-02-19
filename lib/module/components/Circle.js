"use strict";

import React from 'react';
import { requireNativeComponent } from 'react-native';
import { processColorProps } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const NativeCircleComponent = requireNativeComponent('YamapCircle');
export class Circle extends React.Component {
  static defaultProps = {};
  render() {
    const props = {
      ...this.props
    };
    processColorProps(props, 'fillColor');
    processColorProps(props, 'strokeColor');
    return /*#__PURE__*/_jsx(NativeCircleComponent, {
      ...props
    });
  }
}
//# sourceMappingURL=Circle.js.map