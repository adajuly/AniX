"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CssXClass = /** @class */ (function () {
    function CssXClass() {
        this.pfObj = {};
        this.div = document.createElement("div");
    }
    //is support css transition
    CssXClass.prototype.hasTransition = function () {
        var b = document.body || document.documentElement;
        var s = b.style;
        var p = 'transition';
        if (typeof s[p] == 'string') {
            return true;
        }
        var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
        p = p.charAt(0).toUpperCase() + p.substr(1);
        for (var i = 0; i < v.length; i++) {
            if (typeof s[v[i] + p] == 'string') {
                return true;
            }
        }
        return false;
    };
    //is support css 3d
    CssXClass.prototype.has3d = function () {
        var has3d;
        var transforms = {
            'webkitTransform': '-webkit-transform',
            'OTransform': '-o-transform',
            'msTransform': '-ms-transform',
            'MozTransform': '-moz-transform',
            'transform': 'transform'
        };
        var ele = document.createElement('p');
        document.body.insertBefore(ele, null);
        for (var t in transforms) {
            if (ele.style[t] !== undefined) {
                ele.style[t] = "translate3d(1px, 1px, 1px)";
                has3d = window.getComputedStyle(ele).getPropertyValue(transforms[t]);
            }
        }
        document.body.removeChild(ele);
        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    };
    //get transtion end
    CssXClass.prototype.getTranstionEndEvent = function () {
        var transitionend = '';
        var prefix = this.getPrefix(1);
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
    };
    //get prefix
    CssXClass.prototype.getPrefix = function (mode) {
        if (mode === void 0) { mode = 1; }
        if (this.pfObj[mode])
            return this.pfObj[mode];
        var PFS1 = ["Moz", 'Webkit', 'ms', 'O', 'o', ''];
        var PFS2 = ["-moz-", '-webkit-', '-ms-', '-o-', '-o-', ''];
        var prefixs = mode == 1 ? PFS1 : PFS2;
        for (var i = 0, length_1 = prefixs.length; i < length_1; i++) {
            if ((PFS1[i] + "Transition") in this.div.style) {
                this.pfObj[mode] = prefixs[i];
                break;
            }
        }
        return this.pfObj[mode];
    };
    CssXClass.prototype.css = function (ele, props, type) {
        for (var key in props) {
            if (type == 3)
                this.css3(ele, key, props[key]);
            else
                this.css2(ele, key, props[key]);
        }
    };
    CssXClass.prototype.css2 = function (ele, style, value) {
        if (style.indexOf('-') > -1)
            style = this.convertStyleMode(style, "js");
        ele.style[style] = value;
    };
    CssXClass.prototype.css3 = function (ele, style, value) {
        style = style.charAt(0).toUpperCase() + style.substr(1);
        ele.style['Webkit' + style] = value;
        ele.style['Moz' + style] = value;
        ele.style['ms' + style] = value;
        ele.style['O' + style] = value;
        ele.style['o' + style] = value;
        ele.style['' + style] = value;
    };
    CssXClass.prototype.setOriginCenter = function (ele) {
        this.css3(ele, 'transformOrigin', "center center");
    };
    /**
    * backgroundColor <-> background-color
    */
    CssXClass.prototype.convertStyleMode = function (style, mode) {
        if (mode == "js") {
            return style.replace(/\-[a-zA-Z0-9]/g, function (c) {
                if (c == '-m')
                    return c.substr(1, 1).toLowerCase();
                else
                    return c.substr(1, 1).toUpperCase();
            });
        }
        else {
            return style.replace(/[A-Z]/g, function (c, i) {
                if (i == 0)
                    return c.toLowerCase();
                else
                    return '-' + c.toLowerCase();
            });
        }
    };
    CssXClass.prototype.addClass = function (ele, newClass) {
        var oldClass = ele.className;
        var blank = (oldClass != '') ? ' ' : '';
        if (!this.hasClass(ele, newClass))
            ele.className = oldClass + blank + newClass;
    };
    CssXClass.prototype.removeClass = function (ele, className) {
        if (this.hasClass(ele, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            ele.className = ele.className.replace(reg, '');
        }
    };
    CssXClass.prototype.hasClass = function (ele, className) {
        return ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };
    CssXClass.prototype.addEventListener = function (ele, event, handler) {
        if (ele['addEventListener'])
            ele['addEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['attachEvent']("on" + event.toLowerCase(), handler);
        else
            ele["on" + event] = handler;
    };
    CssXClass.prototype.removeEventListener = function (ele, event, handler) {
        if (ele['removeEventListener'])
            ele['removeEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['detachEvent']("on" + event.toLowerCase(), handler);
        else
            delete ele["on" + event];
    };
    return CssXClass;
}());
exports.CssXClass = CssXClass;
//export instance
var CssX = new CssXClass();
exports.CssX = CssX;
//# sourceMappingURL=cssx.js.map