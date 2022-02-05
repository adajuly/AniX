import { IEase } from './ease';
import { ITransform } from './cssx';
import { InputValue } from './gettransform';
/**
* AniX
*
* use
* --CODE: AniX.to(a,.3,{height:"100px",ease: AniX['easeOutBack']});
* --CODE: AniX.fromTo(a,.3,{height:"200px"},{height:"100px"});
*
* property
* --CODE: AniX.useTranstionEvent=false;  Whether to use the native transtionend event - there are compatibility issues with the default settimeout
* --CODE: AniX.compatible=true;  Compatible with old browsers, old browsers do not have animation
* --CODE: AniX.debug=true;  debug mode
*
* @langversion TypeScript 2.0
* @tiptext
*
*/
export declare class AniXClass {
    private KEYWORDS;
    private anis;
    useTranstionEvent: boolean;
    debug: boolean;
    compatible: boolean;
    ease: IEase;
    constructor();
    readonly support: boolean;
    /**
    * to
    * AniX.to(a,.3,{height:"100px"});
    */
    to(ele: any, time: number, args: {
        ease?: string;
        delay?: number;
        [propName: string]: any;
    }): string;
    /**
    * fromTo
    * AniX.fromTo(a,.3,{height:"200px"},{height:"100px"});
    */
    fromTo(ele: any, time: number, fromArgs: Object, toArgs: Object): void;
    /**
    * kill
    * AniX.kill(a);
    */
    kill(ele: any, complete?: boolean): void;
    getTransform(param: InputValue): ITransform;
    get(param: InputValue): ITransform;
    set(ele: any, args: {
        className?: string;
        [propName: string]: any;
    }): void;
    private start(ele, transition, time, args);
    /**
    * no animation
    */
    private noAniStart(ele, transition, time, args);
    /**
    * Set the style set style or add class
    */
    private setStyle(ele, args);
    /**
    * add callbacks
    */
    private addCallback(ele, time, args);
    /**
    * get style key name
    */
    private getPureStyleKeys(args);
    /**
    * get pure css2 style
    */
    private getNormalStyles(args);
    private notKeyWords(key);
    private each(args, func);
    private pretreatment(args);
}
declare let AniX: AniXClass;
export { AniX };
