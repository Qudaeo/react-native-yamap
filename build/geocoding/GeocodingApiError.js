"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocodingApiError = void 0;
class GeocodingApiError extends Error {
    yandexResponse;
    constructor(response) {
        super('api error');
        this.yandexResponse = response;
    }
}
exports.GeocodingApiError = GeocodingApiError;
//# sourceMappingURL=GeocodingApiError.js.map