"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class CallbacksManager {
    static callbacks = {};
    static addCallback(callback) {
        const id = (0, index_1.guid)();
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