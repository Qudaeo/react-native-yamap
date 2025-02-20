"use strict";

import React, { useMemo } from 'react';
import { requireNativeComponent } from 'react-native';
import { getProcessedColors } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const NativeCircleComponent = requireNativeComponent('YamapCircle');
export const Circle = props => {
  const processedProps = useMemo(() => getProcessedColors(props, ['fillColor', 'strokeColor']), [props]);
  return /*#__PURE__*/_jsx(NativeCircleComponent, {
    ...processedProps
  });
};
//# sourceMappingURL=Circle.js.map