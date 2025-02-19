"use strict";

import React from 'react';
import { Platform, requireNativeComponent, NativeModules, UIManager, findNodeHandle } from 'react-native';
// @ts-ignore
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import CallbacksManager from '../utils/CallbacksManager';
import { Animation } from '../interfaces';
import { processColorProps } from '../utils';
import { jsx as _jsx } from "react/jsx-runtime";
const {
  yamap: NativeYamapModule
} = NativeModules;
const YaMapNativeComponent = requireNativeComponent('YamapView');
export class YaMap extends React.Component {
  static defaultProps = {
    showUserPosition: true,
    clusterColor: 'red',
    maxFps: 60
  };
  map = /*#__PURE__*/React.createRef();
  static ALL_MASSTRANSIT_VEHICLES = ['bus', 'trolleybus', 'tramway', 'minibus', 'suburban', 'underground', 'ferry', 'cable', 'funicular'];
  static init(apiKey) {
    return NativeYamapModule.init(apiKey);
  }
  static setLocale(locale) {
    return new Promise((resolve, reject) => {
      NativeYamapModule.setLocale(locale, () => resolve(), err => reject(new Error(err)));
    });
  }
  static getLocale() {
    return new Promise((resolve, reject) => {
      NativeYamapModule.getLocale(locale => resolve(locale), err => reject(new Error(err)));
    });
  }
  static resetLocale() {
    return new Promise((resolve, reject) => {
      NativeYamapModule.resetLocale(() => resolve(), err => reject(new Error(err)));
    });
  }
  findRoutes(points, vehicles, callback) {
    this._findRoutes(points, vehicles, callback);
  }
  findMasstransitRoutes(points, callback) {
    this._findRoutes(points, YaMap.ALL_MASSTRANSIT_VEHICLES, callback);
  }
  findPedestrianRoutes(points, callback) {
    this._findRoutes(points, [], callback);
  }
  findDrivingRoutes(points, callback) {
    this._findRoutes(points, ['car'], callback);
  }
  fitAllMarkers() {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('fitAllMarkers'), []);
  }
  setTrafficVisible(isVisible) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('setTrafficVisible'), [isVisible]);
  }
  fitMarkers(points) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('fitMarkers'), [points]);
  }
  setCenter(center, zoom = center.zoom || 10, azimuth = 0, tilt = 0, duration = 0, animation = Animation.SMOOTH) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('setCenter'), [center, zoom, azimuth, tilt, duration, animation]);
  }
  setZoom(zoom, duration = 0, animation = Animation.SMOOTH) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('setZoom'), [zoom, duration, animation]);
  }
  getCameraPosition(callback) {
    const cbId = CallbacksManager.addCallback(callback);
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('getCameraPosition'), [cbId]);
  }
  getVisibleRegion(callback) {
    const cbId = CallbacksManager.addCallback(callback);
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('getVisibleRegion'), [cbId]);
  }
  getScreenPoints(points, callback) {
    const cbId = CallbacksManager.addCallback(callback);
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('getScreenPoints'), [points, cbId]);
  }
  getWorldPoints(points, callback) {
    const cbId = CallbacksManager.addCallback(callback);
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('getWorldPoints'), [points, cbId]);
  }
  _findRoutes(points, vehicles, callback) {
    const cbId = CallbacksManager.addCallback(callback);
    const args = Platform.OS === 'ios' ? [{
      points,
      vehicles,
      id: cbId
    }] : [points, vehicles, cbId];
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('findRoutes'), args);
  }
  getCommand(cmd) {
    return Platform.OS === 'ios' ? UIManager.getViewManagerConfig('YamapView').Commands[cmd] : cmd;
  }
  processRoute(event) {
    const {
      id,
      ...routes
    } = event.nativeEvent;
    CallbacksManager.call(id, routes);
  }
  processCameraPosition(event) {
    const {
      id,
      ...point
    } = event.nativeEvent;
    CallbacksManager.call(id, point);
  }
  processVisibleRegion(event) {
    const {
      id,
      ...visibleRegion
    } = event.nativeEvent;
    CallbacksManager.call(id, visibleRegion);
  }
  processWorldToScreenPointsReceived(event) {
    const {
      id,
      ...screenPoints
    } = event.nativeEvent;
    CallbacksManager.call(id, screenPoints);
  }
  processScreenToWorldPointsReceived(event) {
    const {
      id,
      ...worldPoints
    } = event.nativeEvent;
    CallbacksManager.call(id, worldPoints);
  }
  resolveImageUri(img) {
    return img ? resolveAssetSource(img).uri : '';
  }
  getProps() {
    const props = {
      ...this.props,
      onRouteFound: this.processRoute,
      onCameraPositionReceived: this.processCameraPosition,
      onVisibleRegionReceived: this.processVisibleRegion,
      onWorldToScreenPointsReceived: this.processWorldToScreenPointsReceived,
      onScreenToWorldPointsReceived: this.processScreenToWorldPointsReceived,
      userLocationIcon: this.props.userLocationIcon ? this.resolveImageUri(this.props.userLocationIcon) : undefined
    };
    processColorProps(props, 'clusterColor');
    processColorProps(props, 'userLocationAccuracyFillColor');
    processColorProps(props, 'userLocationAccuracyStrokeColor');
    return props;
  }
  render() {
    return /*#__PURE__*/_jsx(YaMapNativeComponent, {
      ...this.getProps(),
      ref: this.map
    });
  }
}
//# sourceMappingURL=Yamap.js.map