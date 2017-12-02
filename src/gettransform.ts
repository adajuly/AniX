import { CssX, ITransform } from './cssx';

const KEYWORDS: string[] = [
    'x', 'y', 'z',
    'scaleX', 'scaleY', 'scaleZ', 'scale',
    'rotateX', 'rotateY', 'rotateZ', 'rotate',
    'skewX', 'skewY'
];

export function getTransform(param: InputValue): ITransform {
    let transform: string = ``;

    /** translate */
    if (param.z === undefined) {
        if (param.x !== undefined || param.y !== undefined) {
            let x: string = getPX(param, 'x');
            let y: string = getPX(param, 'y');
            transform += ` translate(${x}, ${y})`;
        }
    } else {
        if (param.x !== undefined) transform += ` translateX(${getPX(param, 'x')})`;
        if (param.y !== undefined) transform += ` translateY(${getPX(param, 'y')})`;
        if (param.z !== undefined) transform += ` translateZ(${getPX(param, 'z')})`;
    }

    /** scale */
    if (param.scale !== undefined) {
        transform += ` scale(${param.scale}, ${param.scale})`;
    } else {
        if (param.scaleX !== undefined) transform += ` scaleX(${param.scaleX})`;
        if (param.scaleY !== undefined) transform += ` scaleY(${param.scaleY})`;
        if (param.scaleZ !== undefined) transform += ` scaleZ(${param.scaleZ})`;
    }

    /** rotate */
    if (param.rotate !== undefined) {
        transform += ` rotate(${param.rotate}deg)`;
    } else {
        if (param.rotateX !== undefined) transform += ` rotateX(${param.rotateX}deg)`;
        if (param.rotateY !== undefined) transform += ` rotateY(${param.rotateY}deg)`;
        if (param.rotateZ !== undefined) transform += ` rotateZ(${param.rotateZ}deg)`;
    }

    /** skew */
    if (param.skewX !== undefined) transform += ` skewX(${param.skewX}deg)`;
    if (param.skewY !== undefined) transform += ` skewY(${param.skewY}deg)`;

    /** perspective */
    if (param.perspective !== undefined) {
        transform += ` perspective(${param.perspective})`;
    }

    /** pre */
    if (param.pre) transform = `${param.pre} ` + transform;

    let css: ITransform = {
        "transform": transform,
        "-webkit-transform": transform,
        "-ms-transform": transform,
        "-o-transform": transform,
        "-moz-transform": transform
    };

    if (param.normal) {
        for (let key in param.normal) {
            css[key] = param.normal[key];
        }
    }

    return css;
}

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

export function isTransformStyle(key: string): boolean {
    return KEYWORDS.indexOf(key) > -1;
}

export function hasTransformStyle(args: any): boolean {
    let has: boolean = false;
    for (let key in args) {
        if (isTransformStyle(key)) has = true;
    }

    return has;
}

function getPX(param: any, key: string) {
    let px: string = typeof param[key] === "string" ? param[key] : (param[key] || 0) + 'px';
    return px;
}