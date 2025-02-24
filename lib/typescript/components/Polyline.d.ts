import { FC } from 'react';
import { Point } from '../interfaces';
export interface PolylineProps {
    strokeColor?: string;
    outlineColor?: string;
    strokeWidth?: number;
    outlineWidth?: number;
    dashLength?: number;
    dashOffset?: number;
    gapLength?: number;
    zIndex?: number;
    onPress?: () => void;
    points: Point[];
    handled?: boolean;
}
export declare const Polyline: FC<PolylineProps>;
//# sourceMappingURL=Polyline.d.ts.map