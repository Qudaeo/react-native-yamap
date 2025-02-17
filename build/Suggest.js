"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestTypes = void 0;
const react_native_1 = require("react-native");
const { YamapSuggests } = react_native_1.NativeModules;
var SuggestTypes;
(function (SuggestTypes) {
    SuggestTypes[SuggestTypes["YMKSuggestTypeUnspecified"] = 0] = "YMKSuggestTypeUnspecified";
    /**
     * Toponyms.
     */
    SuggestTypes[SuggestTypes["YMKSuggestTypeGeo"] = 1] = "YMKSuggestTypeGeo";
    /**
     * Companies.
     */
    SuggestTypes[SuggestTypes["YMKSuggestTypeBiz"] = 2] = "YMKSuggestTypeBiz";
    /**
     * Mass transit routes.
     */
    SuggestTypes[SuggestTypes["YMKSuggestTypeTransit"] = 4] = "YMKSuggestTypeTransit";
})(SuggestTypes = exports.SuggestTypes || (exports.SuggestTypes = {}));
const suggest = (query, options) => {
    if (options) {
        return YamapSuggests.suggestWithOptions(query, options);
    }
    return YamapSuggests.suggest(query);
};
const suggestWithCoords = async (query, options) => {
    const suggests = await suggest(query, options);
    return suggests.map((item) => ({
        ...item,
        ...getCoordsFromSuggest(item),
    }));
};
const reset = () => YamapSuggests.reset();
const getCoordsFromSuggest = (suggest) => {
    const coords = suggest.uri
        ?.split('?')[1]
        ?.split('&')
        ?.find((param) => param.startsWith('ll'))
        ?.split('=')[1];
    if (!coords)
        return;
    const splittedCoords = coords.split('%2C');
    const lon = Number(splittedCoords[0]);
    const lat = Number(splittedCoords[1]);
    return { lat, lon };
};
const Suggest = {
    suggest,
    suggestWithCoords,
    reset,
    getCoordsFromSuggest
};
exports.default = Suggest;
//# sourceMappingURL=Suggest.js.map