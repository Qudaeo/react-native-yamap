"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("./index");
class CallbacksManager {
  static callbacks = {};
  static addCallback(callback) {
    const id = (0, _index.guid)();
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
exports.default = CallbacksManager;
//# sourceMappingURL=CallbacksManager.js.map