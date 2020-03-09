export declare class CssXClass {
    private div;
    private pfObj;
    constructor();
    hasTransition(): boolean;
    has3d(): boolean;
    getTranstionEndEvent(): string;
    getPrefix(mode?: number): string;
    css(ele: HTMLElement, props: any, type?: number): void;
    css2(ele: HTMLElement, style: string, value: any): void;
    css3(ele: HTMLElement, style: string, value: any): void;
    setOriginCenter(ele: HTMLElement): void;
    /**
    * backgroundColor <-> background-color
    */
    convertStyleMode(style: string, mode?: string): string;
    addClass(ele: HTMLElement, newClass: string): void;
    removeClass(ele: HTMLElement, className: string): void;
    hasClass(ele: HTMLElement, className: string): any;
    addEventListener(ele: any, event: string, handler: any): void;
    removeEventListener(ele: any, event: string, handler: any): void;
}
export interface ITransform {
    "transform": string;
    "-webkit-transform": string;
    "-ms-transform": string;
    "-o-transform": string;
    "-moz-transform": string;
    [prop: string]: any;
}
export interface ITransform2 {
    'webkitTransform': string;
    'OTransform': string;
    'msTransform': string;
    'MozTransform': string;
    'transform': string;
    [prop: string]: any;
}
declare let CssX: CssXClass;
export { CssX };
