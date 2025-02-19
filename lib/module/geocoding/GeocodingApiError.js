"use strict";

export class GeocodingApiError extends Error {
  constructor(response) {
    super('api error');
    this.yandexResponse = response;
  }
}
//# sourceMappingURL=GeocodingApiError.js.map