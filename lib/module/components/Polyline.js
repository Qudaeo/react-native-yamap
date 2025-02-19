"use strict";

import React from 'react';
import { requireNativeComponent } from 'react-native';
import { processColorProps } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const NativePolylineComponent = requireNativeComponent('YamapPolyline');
export class Polyline extends React.Component {
  render() {
    const props = {
      ...this.props
    };
    processColorProps(props, 'fillColor');
    processColorProps(props, 'strokeColor');
    processColorProps(props, 'outlineColor');
    return /*#__PURE__*/_jsx(NativePolylineComponent, {
      ...props
    });
  }
}
//# sourceMappingURL=Polyline.js.map