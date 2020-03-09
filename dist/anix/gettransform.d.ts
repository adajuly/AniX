import { ITransform } from './cssx';
export declare function getTransform(param: InputValue): ITransform;
export interface InputValue {
    x?: string | number;
    y?: string | number;
    z?: string | number;
    scale?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    scaleZ?: string | number;
    rotate?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    skewX?: number;
    skewY?: number;
    pre?: string | Object;
    normal?: any;
    [propName: string]: any;
}
export declare function isTransformStyle(key: string): boolean;
export declare function hasTransformStyle(args: any): boolean;
