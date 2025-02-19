"use strict";

import Query from './Query';
import { GeocodingApiError } from './GeocodingApiError';
export class Geocoder {
  static API_KEY = '';
  static init(apiKey) {
    Geocoder.API_KEY = apiKey;
  }
  static async requestWithQuery(query) {
    const res = await fetch('https://geocode-maps.yandex.ru/1.x?' + query.toQueryString(), {
      method: 'get',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      }
    });
    if (res.status !== 200) {
      throw new GeocodingApiError(res);
    }
    return res.json();
  }
  static getFirst(response) {
    // @ts-ignore
    return Object.values(response.GeoObjectCollection.featureMember[0])[0];
  }
  static async geocode(geocode, kind, results, skip, lang) {
    const query = new Query({
      apikey: Geocoder.API_KEY,
      geocode: `${geocode.lat},${geocode.lon}`,
      sco: 'latlong',
      kind,
      format: 'json',
      results,
      skip,
      lang
    });
    return Geocoder.requestWithQuery(query);
  }
  static reverseGeocode(geocode, kind, results, skip, lang, rspn, ll, spn, bbox) {
    const query = new Query({
      apikey: Geocoder.API_KEY,
      geocode,
      format: 'json',
      results,
      skip,
      lang,
      rspn,
      ll: ll ? `${ll.lat},${ll.lon}` : undefined,
      spn: spn ? `${spn[0]},${spn[1]}` : undefined,
      bbox: bbox ? `${bbox[0].lat},${bbox[0].lon}-${bbox[1].lat},${bbox[1].lon}` : undefined
    });
    return Geocoder.requestWithQuery(query);
  }
  static async addressToGeo(address) {
    const {
      response
    } = await Geocoder.reverseGeocode(address);
    if (response.GeoObjectCollection && response.GeoObjectCollection.featureMember && response.GeoObjectCollection.featureMember.length > 0) {
      const obj = Geocoder.getFirst(response);
      if (obj.Point) {
        const [lon, lat] = obj.Point.pos.split(' ').map(Number);
        return {
          lon,
          lat
        };
      }
    }
    return undefined;
  }
  static async geoToAddress(geo, lang, kind) {
    const {
      response
    } = await Geocoder.geocode(geo, kind, 1, 0, lang);
    if (response.GeoObjectCollection && response.GeoObjectCollection.featureMember && response.GeoObjectCollection.featureMember.length > 0) {
      const obj = Geocoder.getFirst(response);
      return obj.metaDataProperty.GeocoderMetaData.Address;
    }
    return undefined;
  }
}
//# sourceMappingURL=index.js.map