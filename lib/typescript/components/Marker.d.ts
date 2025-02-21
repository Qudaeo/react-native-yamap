import React from 'react';
import { type ImageSourcePropType } from 'react-native';
import type { Point, Anchor } from '../interfaces';
export interface MarkerProps {
    children?: React.ReactElement;
    zIndex?: number;
    scale?: number;
    rotated?: boolean;
    onPress?: () => void;
    point: Point;
    source?: ImageSourcePropType;
    anchor?: Anchor;
    visible?: boolean;
    handled?: boolean;
}
export interface MarkerRef {
    animatedMoveTo: (coords: Point, duration: number) => void;
    animatedRotateTo: (angle: number, duration: number) => void;
}
export declare const Marker: React.ForwardRefExoticComponent<MarkerProps & React.RefAttributes<MarkerRef>>;
//# sourceMappingURL=Marker.d.ts.map