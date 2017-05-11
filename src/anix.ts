import { CssX, ITransform } from './cssx';
import { Dic } from './dic';
import { EASE, IEase } from './ease';
import { getHTMLElement } from './gethtmlelement';

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

export class AniXClass {

    private keyword: string[] = ['nokill', 'ease', 'delay', 'all', 'class', 'onStart', 'onUpdate', 'onComplete'];
    private anis: any = {};

    useTranstionEvent: boolean = false;
    debug: boolean = false;
    compatible: boolean = true;

    ease: IEase = EASE;

    constructor() {

    }

    get support(): boolean {
        return CssX.hasTransition();
    }

    /**
    * to
    * AniX.to(a,.3,{height:"100px"});
    */
    to(ele: any, time: number, args: {
        ease?: string;
        delay?: number;
        [propName: string]: any;
    }): string {
        let transition: string = '';
        let styles: string[] = this.getPureStyleKeys(args);

        for (let i: number = 0; i < styles.length; i++) {
            if (i > 0) transition += ', ';

            let style: string = styles[i];

            if (/transform/ig.test(style)) {
                if (!/transform/ig.test(transition)) {
                    var prefix = CssX.getPrefix(2);
                    transition += prefix + 'transform';
                }
            } else {
                transition += CssX.convertStyleMode(styles[i], "css");
            }

            //transition += CssX.convertStyleMode(styles[i], "css");
            transition += ' ' + time + 's';
            if (args.ease) transition += ' ' + args.ease;
            if (args.delay) transition += ' ' + args.delay + 's';
        }

        if (this.compatible && !this.support)
            return this.noAniStart(ele, transition, time, args);
        else
            return this.start(ele, transition, time, args);
    }

    /**
    * fromTo
    * AniX.fromTo(a,.3,{height:"200px"},{height:"100px"});
    */
    fromTo(ele: any, time: number, fromArgs: Object, toArgs: Object) {
        this.kill(ele);
        this.setStyle(ele, fromArgs);
        setTimeout(() => { this.to(ele, time, toArgs) }, 22.2);
    }

    /**
    * kill
    * AniX.kill(a);
    */
    kill(ele: any, complete?: boolean) {
        ele = getHTMLElement(ele);
        CssX.css3(ele, 'transition', 'none !important');
        CssX.css3(ele, 'transition', 'none');

        Dic.get(ele).id && clearTimeout(Dic.get(ele).id);
        Dic.get(ele).event && CssX.removeEventListener(ele, Dic.get(ele).event, Dic.get(ele).handler);
    }

    getTransform(param: {
        x?: string | number;
        y?: string | number;
        scale?: string | number;
        rotate?: string | number;
        pre?: string | Object;
        no?: Object;
        [propName: string]: any;
    }): ITransform {
        let transform: string = ``;

        if (param.x !== undefined || param.y !== undefined) {
            let x = typeof param.x == "string" ? param.x : (param.x || 0) + 'px';
            let y = typeof param.y == "string" ? param.y : (param.y || 0) + 'px';
            transform += ` translate(${x}, ${y})`;
        }

        if (param.scale) transform += ` scale(${param.scale}, ${param.scale})`;
        if (param.rotate) transform += ` rotate(${param.rotate}deg)`;

        if (param.pre) transform = `${param.pre} ` + transform;
        let css = {
            "transform": transform,
            "-webkit-transform": transform,
            "-ms-transform": transform,
            "-o-transform": transform,
            "-moz-transform": transform
        };

        if (param.no) {
            for (let key in param.no) {
                css[key] = param.no[key];
            }
        }

        return css;
    }

    private start(ele: any, transition: string, time: number, args: { nokill?: boolean;[propName: string]: any; }): string {
        ele = getHTMLElement(ele);
        let id = Dic.setId(ele);
        (!args.nokill) && this.kill(ele);

        //set ani
        CssX.css3(ele, 'transition', transition);
        this.setStyle(ele, args);
        this.addCallback(ele, time, args);

        this.debug && console.trace(ele, ele.__nxid, transition);

        return id;
    }

    /**
    * no animation
    */
    private noAniStart(ele: any, transition: string, time: number, args: { nokill?: boolean; delay?: number;[propName: string]: any; }): string {
        ele = getHTMLElement(ele);
        let id = Dic.setId(ele);
        (!args.nokill) && this.kill(ele);

        this.useTranstionEvent = false;
        setTimeout(() => {
            args.delay = 0;
            this.setStyle(ele, args);
            this.addCallback(ele, 0, args);
        }, 50);

        this.debug && console.trace(ele, ele.__nxid, transition);
        return id;
    }

    /**
    * Set the style set style or add class
    */
    private setStyle(ele: any, args: {
        className?: string;
        [propName: string]: any;
    }) {
        ele = getHTMLElement(ele);
        //add style
        CssX.css(ele, this.getPureStyle(args));
        //add class
        args.className && CssX.addClass(ele, args.className);
    }

    /**
    * add callbacks
    */
    private addCallback(ele: HTMLElement, time: number, args: {
        delay?: number;
        onStart?: any;
        onComplete?: any;
        [propName: string]: any;
    }) {
        let delay: number = args.delay || 0;
        let allTime: number = (time + delay) * 1000;

        if (args.onStart)
            setTimeout(args.onStart, delay * 1000);

        if (args.onComplete) {
            if (this.useTranstionEvent) {
                Dic.get(ele).event = CssX.getTranstionEndEvent();
                Dic.get(ele).fun = args.onComplete;
                Dic.get(ele).handler = ((ele: any) => {
                    Dic.get(ele).fun();
                    CssX.removeEventListener(ele, Dic.get(ele).event, Dic.get(ele).handler);
                }).bind(null, ele);

                CssX.addEventListener(ele, Dic.get(ele).event, Dic.get(ele).handler);
            } else {
                Dic.get(ele).id = setTimeout(args.onComplete, allTime);
            }
        }
    }

    //get style key name
    private getPureStyleKeys(args: {
        all?: any;
        css?: any;
        className?: any;
        onComplete?: any;
        [propName: string]: any;
    }): string[] {
        if (args.all || args.css || args.className) return ['all'];

        let keys = [];
        for (let key in args) {
            if (this.keyword.indexOf(key) < 0)
                keys.push(key);
        }

        return keys;
    }

    /**
    * get pure style
    */
    private getPureStyle(args: Object): Object {
        let obj = {};
        for (let key in args) {
            if (this.keyword.indexOf(key) < 0)
                obj[key] = args[key];
        }

        return obj;
    }

}

//export instance
let AniX = new AniXClass();
export { AniX };