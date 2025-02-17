"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Query {
    _data;
    constructor(data) {
        this._data = JSON.parse(JSON.stringify(data));
    }
    toQueryString() {
        let res = '';
        for (const key in this._data) {
            const AMPERSAND = res.length > 0 ? '&' : '';
            res = `${res}${AMPERSAND}${encodeURIComponent(key)}=${encodeURIComponent(this._data[key])}`;
        }
        return res;
    }
}
exports.default = Query;
//# sourceMappingURL=Query.js.map