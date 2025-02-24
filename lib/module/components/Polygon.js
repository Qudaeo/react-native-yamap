"use strict";

import React, { useMemo } from 'react';
import { requireNativeComponent } from 'react-native';
import { getProcessedColors } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const NativePolygonComponent = requireNativeComponent('YamapPolygon');
export const Polygon = props => {
  const processedProps = useMemo(() => getProcessedColors(props, ['fillColor', 'strokeColor']), [props]);
  return /*#__PURE__*/_jsx(NativePolygonComponent, {
    ...processedProps
  });
};
//# sourceMappingURL=Polygon.js.map