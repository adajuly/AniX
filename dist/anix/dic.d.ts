export interface IDic {
    id?: any;
    event?: string;
    fun?: any;
    handler?: any;
    [propName: string]: any;
}
export declare class Dic {
    static setId(ele: {
        __nxid?: any;
        [propName: string]: any;
    }): string;
    static get(ele: {
        __nxid?: any;
        [propName: string]: any;
    }): IDic;
    static delete(ele: string | {
        __nxid?: any;
        [propName: string]: any;
    }): void;
    private static id;
    private static map;
}
