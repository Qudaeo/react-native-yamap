"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoFigureType = exports.SearchTypesSnippets = exports.SearchTypes = void 0;
const react_native_1 = require("react-native");
const { YamapSearch } = react_native_1.NativeModules;
var SearchTypes;
(function (SearchTypes) {
    SearchTypes[SearchTypes["YMKSearchTypeUnspecified"] = 0] = "YMKSearchTypeUnspecified";
    /**
     * Toponyms.
     */
    SearchTypes[SearchTypes["YMKSearchTypeGeo"] = 1] = "YMKSearchTypeGeo";
    /**
     * Companies.
     */
    SearchTypes[SearchTypes["YMKSearchTypeBiz"] = 2] = "YMKSearchTypeBiz";
    /**
     * Mass transit routes.
     */
})(SearchTypes || (exports.SearchTypes = SearchTypes = {}));
var SearchTypesSnippets;
(function (SearchTypesSnippets) {
    SearchTypesSnippets[SearchTypesSnippets["YMKSearchTypeUnspecified"] = 0] = "YMKSearchTypeUnspecified";
    /**
     * Toponyms.
     */
    SearchTypesSnippets[SearchTypesSnippets["YMKSearchTypeGeo"] = 1] = "YMKSearchTypeGeo";
    /**
     * Companies.
     */
    SearchTypesSnippets[SearchTypesSnippets["YMKSearchTypeBiz"] = 1] = "YMKSearchTypeBiz";
    /**
     * Mass transit routes.
     */
})(SearchTypesSnippets || (exports.SearchTypesSnippets = SearchTypesSnippets = {}));
var GeoFigureType;
(function (GeoFigureType) {
    GeoFigureType["POINT"] = "POINT";
    GeoFigureType["BOUNDINGBOX"] = "BOUNDINGBOX";
    GeoFigureType["POLYLINE"] = "POLYLINE";
    GeoFigureType["POLYGON"] = "POLYGON";
})(GeoFigureType || (exports.GeoFigureType = GeoFigureType = {}));
const searchText = (query, figure, options) => {
    return YamapSearch.searchByAddress(query, figure, options);
};
const searchPoint = (point, zoom, options) => {
    return YamapSearch.searchByPoint(point, zoom, options);
};
const resolveURI = (uri, options) => {
    return YamapSearch.resolveURI(uri, options);
};
const searchByURI = (uri, options) => {
    return YamapSearch.searchByURI(uri, options);
};
const geocodePoint = (point) => {
    return YamapSearch.geoToAddress(point);
};
const geocodeAddress = (address) => {
    return YamapSearch.addressToGeo(address);
};
const Search = {
    searchText,
    searchPoint,
    geocodePoint,
    geocodeAddress,
    resolveURI,
    searchByURI
};
exports.default = Search;
//# sourceMappingURL=Search.js.map