export class CssXClass {

    private div: HTMLElement;
    private pfObj: any = {};

    constructor() {
        this.div = document.createElement("div");
    }

    //is support css transition
    hasTransition(): boolean {
        let b: HTMLElement = document.body || document.documentElement;
        let s: any = b.style;
        let p: string = 'transition';

        if (typeof s[p] == 'string') { return true; }

        let v: string[] = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
        p = p.charAt(0).toUpperCase() + p.substr(1);

        for (let i: number = 0; i < v.length; i++) {
            if (typeof s[v[i] + p] == 'string') { return true; }
        }

        return false;
    }

    //is support css 3d
    has3d(): boolean {
        let has3d: any;

        let transforms: ITransform2 = {
            'webkitTransform': '-webkit-transform',
            'OTransform': '-o-transform',
            'msTransform': '-ms-transform',
            'MozTransform': '-moz-transform',
            'transform': 'transform'
        };

        let ele: HTMLElement = document.createElement('p');
        document.body.insertBefore(ele, null);

        for (let t in transforms) {
            if ((<any>ele.style)[t] !== undefined) {
                (<any>ele.style)[t] = "translate3d(1px, 1px, 1px)";
                has3d = window.getComputedStyle(ele).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(ele);
        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    }

    //get transtion end
    getTranstionEndEvent(): string {
        let transitionend: string = '';
        let prefix: string = this.getPrefix(1);

        switch (prefix) {
            case 'Webkit':
                transitionend = 'webkitTransitionEnd';
                break;
            case 'ms':
                transitionend = 'MSTransitionEnd';
                break;
            case 'O':
                transitionend = 'oTransitionEnd';
                break;
            case 'Moz':
                transitionend = 'transitionend';
                break;
            default:
                transitionend = 'transitionend';
        }

        return transitionend;
    }

    //get prefix
    getPrefix(mode: number = 1): string {
        if (this.pfObj[mode]) return this.pfObj[mode];

        let PFS1: string[] = ["Moz", 'Webkit', 'ms', 'O', 'o', ''];
        let PFS2: string[] = ["-moz-", '-webkit-', '-ms-', '-o-', '-o-', ''];
        let prefixs: string[] = mode == 1 ? PFS1 : PFS2;

        for (let i: number = 0, length = prefixs.length; i < length; i++) {
            if ((PFS1[i] + "Transition") in this.div.style) {
                this.pfObj[mode] = prefixs[i];
                break;
            }
        }

        return this.pfObj[mode];
    }

    css(ele: HTMLElement, props: any, type?: number) {
        for (let key in props) {
            if (type == 3)
                this.css3(ele, key, props[key]);
            else
                this.css2(ele, key, props[key]);
        }
    }

    css2(ele: HTMLElement, style: string, value: any) {
        if (style.indexOf('-') > -1)
            style = this.convertStyleMode(style, "js");

        (<any>ele.style)[style] = value;
    }

    css3(ele: HTMLElement, style: string, value: any) {
        style = style.charAt(0).toUpperCase() + style.substr(1);

        (<any>ele.style)['Webkit' + style] = value;
        (<any>ele.style)['Moz' + style] = value;
        (<any>ele.style)['ms' + style] = value;
        (<any>ele.style)['O' + style] = value;
        (<any>ele.style)['o' + style] = value;
        (<any>ele.style)['' + style] = value;
    }

    setOriginCenter(ele: HTMLElement) {
        this.css3(ele, 'transformOrigin', "center center");
    }

    /**
    * backgroundColor <-> background-color
    */
    convertStyleMode(style: string, mode?: string): string {
        if (mode == "js") {
            return style.replace(/\-[a-zA-Z0-9]/g, function (c) {
                if (c == '-m')
                    return c.substr(1, 1).toLowerCase();
                else
                    return c.substr(1, 1).toUpperCase();
            });
        } else {
            return style.replace(/[A-Z]/g, function (c, i) {
                if (i == 0)
                    return c.toLowerCase();
                else
                    return '-' + c.toLowerCase();
            });
        }
    }

    addClass(ele: HTMLElement, newClass: string) {
        let oldClass: string = ele.className;
        let blank: string = (oldClass != '') ? ' ' : '';

        if (!this.hasClass(ele, newClass))
            ele.className = oldClass + blank + newClass;
    }

    removeClass(ele: HTMLElement, className: string) {
        if (this.hasClass(ele, className)) {
            let reg: RegExp = new RegExp('(\\s|^)' + className + '(\\s|$)');
            ele.className = ele.className.replace(reg, '');
        }
    }

    hasClass(ele: HTMLElement, className: string): any {
        return ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    addEventListener(ele: any, event: string, handler: any) {
        if (ele['addEventListener'])
            ele['addEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['attachEvent']("on" + event.toLowerCase(), handler);
        else
            ele["on" + event] = handler;
    }

    removeEventListener(ele: any, event: string, handler: any) {
        if (ele['removeEventListener'])
            ele['removeEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['detachEvent']("on" + event.toLowerCase(), handler);
        else
            delete ele["on" + event];
    }
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


//export instance
let CssX: CssXClass = new CssXClass();
export { CssX };