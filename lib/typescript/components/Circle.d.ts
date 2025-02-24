import { FC } from 'react';
import { Point } from '../interfaces';
export interface CircleProps {
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    zIndex?: number;
    onPress?: () => void;
    center: Point;
    radius: number;
    handled?: boolean;
}
export declare const Circle: FC<CircleProps>;
//# sourceMappingURL=Circle.d.ts.map