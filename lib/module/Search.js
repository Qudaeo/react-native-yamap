"use strict";

import { NativeModules } from 'react-native';
const {
  YamapSearch
} = NativeModules;
export let SearchTypes = /*#__PURE__*/function (SearchTypes) {
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
  return SearchTypes;
}({});
export let SearchTypesSnippets = /*#__PURE__*/function (SearchTypesSnippets) {
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
  return SearchTypesSnippets;
}({});
export let GeoFigureType = /*#__PURE__*/function (GeoFigureType) {
  GeoFigureType["POINT"] = "POINT";
  GeoFigureType["BOUNDINGBOX"] = "BOUNDINGBOX";
  GeoFigureType["POLYLINE"] = "POLYLINE";
  GeoFigureType["POLYGON"] = "POLYGON";
  return GeoFigureType;
}({});
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
const geocodePoint = point => {
  return YamapSearch.geoToAddress(point);
};
const geocodeAddress = address => {
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
export default Search;
//# sourceMappingURL=Search.js.map