"use strict";

import React from 'react';
import { requireNativeComponent } from 'react-native';
import { processColorProps } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const NativePolygonComponent = requireNativeComponent('YamapPolygon');
export class Polygon extends React.Component {
  static defaultProps = {
    innerRings: []
  };
  render() {
    const props = {
      ...this.props
    };
    processColorProps(props, 'fillColor');
    processColorProps(props, 'strokeColor');
    return /*#__PURE__*/_jsx(NativePolygonComponent, {
      ...props
    });
  }
}
//# sourceMappingURL=Polygon.js.map