import React from 'react';
import { ViewProps, ImageSourcePropType, NativeSyntheticEvent, ListRenderItemInfo, NativeMethods } from 'react-native';
import { Animation, Point, DrivingInfo, MasstransitInfo, RoutesFoundEvent, Vehicles, CameraPosition, VisibleRegion, ScreenPoint, MapLoaded, InitialRegion, YandexLogoPosition, YandexLogoPadding } from '../interfaces';
export interface ClusteredYaMapProps<T = any> extends ViewProps {
    userLocationIcon?: ImageSourcePropType;
    userLocationIconScale?: number;
    clusteredMarkers: ReadonlyArray<{
        point: Point;
        data: T;
    }>;
    renderMarker: (info: {
        point: Point;
        data: ListRenderItemInfo<T>;
    }, index: number) => React.ReactElement;
    clusterColor?: string;
    showUserPosition?: boolean;
    nightMode?: boolean;
    mapStyle?: string;
    onCameraPositionChange?: (event: NativeSyntheticEvent<CameraPosition>) => void;
    onCameraPositionChangeEnd?: (event: NativeSyntheticEvent<CameraPosition>) => void;
    onMapPress?: (event: NativeSyntheticEvent<Point>) => void;
    onMapLongPress?: (event: NativeSyntheticEvent<Point>) => void;
    onMapLoaded?: (event: NativeSyntheticEvent<MapLoaded>) => void;
    userLocationAccuracyFillColor?: string;
    userLocationAccuracyStrokeColor?: string;
    userLocationAccuracyStrokeWidth?: number;
    scrollGesturesEnabled?: boolean;
    zoomGesturesEnabled?: boolean;
    tiltGesturesEnabled?: boolean;
    rotateGesturesEnabled?: boolean;
    fastTapEnabled?: boolean;
    initialRegion?: InitialRegion;
    maxFps?: number;
    followUser?: boolean;
    logoPosition?: YandexLogoPosition;
    logoPadding?: YandexLogoPadding;
}
export declare class ClusteredYamap extends React.Component<ClusteredYaMapProps> {
    static defaultProps: {
        showUserPosition: boolean;
        clusterColor: string;
        maxFps: number;
    };
    map: React.RefObject<(React.Component<Omit<ClusteredYaMapProps<any>, "clusteredMarkers"> & {
        clusteredMarkers: Point[];
    }, {}, any> & Readonly<NativeMethods>) | null>;
    static ALL_MASSTRANSIT_VEHICLES: Vehicles[];
    static init(apiKey: string): Promise<void>;
    static setLocale(locale: string): Promise<void>;
    static getLocale(): Promise<string>;
    static resetLocale(): Promise<void>;
    findRoutes(points: Point[], vehicles: Vehicles[], callback: (event: RoutesFoundEvent<DrivingInfo | MasstransitInfo>) => void): void;
    findMasstransitRoutes(points: Point[], callback: (event: RoutesFoundEvent<MasstransitInfo>) => void): void;
    findPedestrianRoutes(points: Point[], callback: (event: RoutesFoundEvent<MasstransitInfo>) => void): void;
    findDrivingRoutes(points: Point[], callback: (event: RoutesFoundEvent<DrivingInfo>) => void): void;
    fitAllMarkers(): void;
    setTrafficVisible(isVisible: boolean): void;
    fitMarkers(points: Point[]): void;
    setCenter(center: {
        lon: number;
        lat: number;
        zoom?: number;
    }, zoom?: number, azimuth?: number, tilt?: number, duration?: number, animation?: Animation): void;
    setZoom(zoom: number, duration?: number, animation?: Animation): void;
    getCameraPosition(callback: (position: CameraPosition) => void): void;
    getVisibleRegion(callback: (VisibleRegion: VisibleRegion) => void): void;
    getScreenPoints(points: Point[], callback: (screenPoint: ScreenPoint) => void): void;
    getWorldPoints(points: ScreenPoint[], callback: (point: Point) => void): void;
    private _findRoutes;
    private getCommand;
    private processRoute;
    private processCameraPosition;
    private processVisibleRegion;
    private processWorldToScreenPointsReceived;
    private processScreenToWorldPointsReceived;
    private resolveImageUri;
    private getProps;
    render(): React.JSX.Element;
}
//# sourceMappingURL=ClusteredYamap.d.ts.map