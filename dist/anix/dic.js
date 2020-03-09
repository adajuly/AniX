"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gethtmlelement_1 = require("./gethtmlelement");
var Dic = /** @class */ (function () {
    function Dic() {
    }
    Dic.setId = function (ele) {
        var id = this.id();
        ele = gethtmlelement_1.getHTMLElement(ele);
        ele.__nxid = ele.__nxid || id;
        this.map[id] = this.map[id] || {};
        return id;
    };
    Dic.get = function (ele) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        var id = ele.__nxid;
        if ((!id || !this.map[id]))
            this.setId(ele);
        return this.map[ele.__nxid];
    };
    Dic.delete = function (ele) {
        if (typeof ele == "string") {
            delete this.map[ele];
        }
        else {
            var nele = gethtmlelement_1.getHTMLElement(ele);
            delete this.map[nele.__nxid];
            delete nele.__nxid;
        }
    };
    Dic.id = function () {
        return 'xxxx-xxx-xxxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Dic.map = {};
    return Dic;
}());
exports.Dic = Dic;
;
//# sourceMappingURL=dic.js.map