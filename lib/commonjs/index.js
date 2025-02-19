"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Suggest: true,
  Search: true
};
Object.defineProperty(exports, "Search", {
  enumerable: true,
  get: function () {
    return _Search.default;
  }
});
Object.defineProperty(exports, "Suggest", {
  enumerable: true,
  get: function () {
    return _Suggest.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Yamap.YaMap;
  }
});
var _Yamap = require("./components/Yamap");
Object.keys(_Yamap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Yamap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Yamap[key];
    }
  });
});
var _Marker = require("./components/Marker");
Object.keys(_Marker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Marker[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Marker[key];
    }
  });
});
var _Polygon = require("./components/Polygon");
Object.keys(_Polygon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Polygon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Polygon[key];
    }
  });
});
var _Polyline = require("./components/Polyline");
Object.keys(_Polyline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Polyline[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Polyline[key];
    }
  });
});
var _Circle = require("./components/Circle");
Object.keys(_Circle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Circle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Circle[key];
    }
  });
});
var _ClusteredYamap = require("./components/ClusteredYamap");
Object.keys(_ClusteredYamap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ClusteredYamap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ClusteredYamap[key];
    }
  });
});
var _geocoding = require("./geocoding");
Object.keys(_geocoding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _geocoding[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _geocoding[key];
    }
  });
});
var _interfaces = require("./interfaces");
Object.keys(_interfaces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interfaces[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interfaces[key];
    }
  });
});
var _Suggest = _interopRequireWildcard(require("./Suggest"));
Object.keys(_Suggest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Suggest[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Suggest[key];
    }
  });
});
var _Search = _interopRequireDefault(require("./Search"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//# sourceMappingURL=index.js.map