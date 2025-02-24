"use strict";

import React, { useMemo } from 'react';
import { requireNativeComponent } from 'react-native';
import { getProcessedColors } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const NativePolylineComponent = requireNativeComponent('YamapPolyline');
export const Polyline = props => {
  const processedProps = useMemo(() => getProcessedColors(props, ['fillColor', 'strokeColor', 'outlineColor']), [props]);
  return /*#__PURE__*/_jsx(NativePolylineComponent, {
    ...processedProps
  });
};
//# sourceMappingURL=Polyline.js.map