"use strict";

import { guid } from './index';
export default class CallbacksManager {
  static callbacks = {};
  static addCallback(callback) {
    const id = guid();
    CallbacksManager.callbacks[id] = (...args) => {
      callback(...args);
      delete CallbacksManager.callbacks[id];
    };
    return id;
  }
  static call(id, ...args) {
    if (CallbacksManager.callbacks[id]) {
      CallbacksManager.callbacks[id](...args);
    }
  }
}
//# sourceMappingURL=CallbacksManager.js.map