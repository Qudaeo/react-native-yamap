"use strict";

import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { requireNativeComponent, Platform, UIManager, findNodeHandle, Image } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
const COMPONENT_NAME = 'YamapMarker';
const NativeMarkerComponent = requireNativeComponent(COMPONENT_NAME);
const getCommand = cmd => {
  return Platform.OS === 'ios' ? UIManager.getViewManagerConfig(COMPONENT_NAME).Commands[cmd] : cmd;
};
export const Marker = /*#__PURE__*/forwardRef(({
  source,
  ...props
}, ref) => {
  const nativeRef = useRef(null);
  const resolvedSource = useMemo(() => source ? Image.resolveAssetSource(source) : undefined, [source]);
  const animatedMoveTo = useCallback((coords, duration) => {
    UIManager.dispatchViewManagerCommand(findNodeHandle(nativeRef.current), getCommand('animatedMoveTo'), [coords, duration]);
  }, []);
  const animatedRotateTo = useCallback((angle, duration) => {
    UIManager.dispatchViewManagerCommand(findNodeHandle(nativeRef.current), getCommand('animatedRotateTo'), [angle, duration]);
  }, []);
  useImperativeHandle(ref, () => ({
    animatedMoveTo,
    animatedRotateTo
  }), [animatedMoveTo, animatedRotateTo]);
  return /*#__PURE__*/_jsx(NativeMarkerComponent, {
    ...props,
    ref: nativeRef,
    source: resolvedSource?.uri,
    pointerEvents: "none"
  });
});
//# sourceMappingURL=Marker.js.map