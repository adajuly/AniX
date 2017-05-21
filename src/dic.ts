import { getHTMLElement } from './gethtmlelement';

export interface IDic {
    id?: any;
    event?: string;
    fun?: any;
    handler?: any;
    [propName: string]: any;
}

export class Dic {
    static setId(ele: { __nxid?: any;[propName: string]: any; }): string {
        let id = this.id();
        ele = getHTMLElement(ele);
        ele.__nxid = ele.__nxid || id;
        this.map[id] = this.map[id] || {};
        return id;
    }

    static get(ele: { __nxid?: any;[propName: string]: any; }): IDic {
        ele = getHTMLElement(ele);
        let id = ele.__nxid;

        if ((!id || !this.map[id]))
            this.setId(ele);

        return this.map[ele.__nxid];
    }

    static delete(ele: string | { __nxid?: any;[propName: string]: any; }) {
        if (typeof ele == "string") {
            delete this.map[ele];
        } else {
            let nele = getHTMLElement(ele);
            delete this.map[nele.__nxid];
            delete nele.__nxid;
        }
    }

    private static id(): string {
        return 'xxxx-xxx-xxxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    private static map: any = {};
};
