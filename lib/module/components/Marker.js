"use strict";

import React, { createElement as _createElement } from 'react';
import { requireNativeComponent, Platform, UIManager, findNodeHandle } from 'react-native';
// @ts-ignore
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
const NativeMarkerComponent = requireNativeComponent('YamapMarker');
export class Marker extends React.Component {
  static defaultProps = {
    rotated: false
  };
  state = {
    recreateKey: false,
    children: this.props.children
  };
  getCommand(cmd) {
    if (Platform.OS === 'ios') {
      return UIManager.getViewManagerConfig('YamapMarker').Commands[cmd];
    } else {
      return cmd;
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (Platform.OS === 'ios') {
      return {
        children: nextProps.children,
        recreateKey: nextProps.children === prevState.children ? prevState.recreateKey : !prevState.recreateKey
      };
    }
    return {
      children: nextProps.children,
      recreateKey: Boolean(nextProps.children)
    };
  }
  resolveImageUri(img) {
    return img ? resolveAssetSource(img).uri : '';
  }
  getProps() {
    return {
      ...this.props,
      source: this.resolveImageUri(this.props.source)
    };
  }
  animatedMoveTo(coords, duration) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('animatedMoveTo'), [coords, duration]);
  }
  animatedRotateTo(angle, duration) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('animatedRotateTo'), [angle, duration]);
  }
  render() {
    return /*#__PURE__*/_createElement(NativeMarkerComponent, {
      ...this.getProps(),
      key: String(this.state.recreateKey),
      pointerEvents: "none"
    });
  }
}
//# sourceMappingURL=Marker.js.map