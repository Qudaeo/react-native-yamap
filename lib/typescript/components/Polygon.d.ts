import { FC } from 'react';
import { Point } from '../interfaces';
export interface PolygonProps {
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    zIndex?: number;
    onPress?: () => void;
    points: Point[];
    innerRings?: (Point[])[];
    handled?: boolean;
}
export declare const Polygon: FC<PolygonProps>;
//# sourceMappingURL=Polygon.d.ts.map