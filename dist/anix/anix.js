"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dic_1 = require("./dic");
var ease_1 = require("./ease");
var cssx_1 = require("./cssx");
var gethtmlelement_1 = require("./gethtmlelement");
var gettransform_1 = require("./gettransform");
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
var AniXClass = /** @class */ (function () {
    function AniXClass() {
        this.KEYWORDS = ['nokill', 'ease', 'delay', 'all', 'class', 'onStart', 'onUpdate', 'onComplete'];
        this.anis = {};
        this.useTranstionEvent = false;
        this.debug = false;
        this.compatible = true;
        this.ease = ease_1.EASE;
    }
    Object.defineProperty(AniXClass.prototype, "support", {
        get: function () {
            return cssx_1.CssX.hasTransition();
        },
        enumerable: true,
        configurable: true
    });
    /**
    * to
    * AniX.to(a,.3,{height:"100px"});
    */
    AniXClass.prototype.to = function (ele, time, args) {
        args = this.pretreatment(args);
        var transition = '';
        var styles = this.getPureStyleKeys(args);
        for (var i = 0; i < styles.length; i++) {
            if (i > 0)
                transition += ', ';
            var style = styles[i];
            if (/transform/ig.test(style)) {
                if (!/transform/ig.test(transition)) {
                    var prefix = cssx_1.CssX.getPrefix(2);
                    transition += prefix + "transform";
                }
            }
            else {
                transition += cssx_1.CssX.convertStyleMode(styles[i], "css");
            }
            //transition += CssX.convertStyleMode(styles[i], "css");
            transition += " " + time + "s";
            if (args.ease)
                transition += " " + args.ease;
            if (args.delay)
                transition += " " + args.delay + "s";
        }
        if (this.compatible && !this.support)
            return this.noAniStart(ele, transition, time, args);
        else
            return this.start(ele, transition, time, args);
    };
    /**
    * fromTo
    * AniX.fromTo(a,.3,{height:"200px"},{height:"100px"});
    */
    AniXClass.prototype.fromTo = function (ele, time, fromArgs, toArgs) {
        var _this = this;
        this.kill(ele);
        fromArgs = this.pretreatment(fromArgs);
        this.setStyle(ele, fromArgs);
        setTimeout(function () { _this.to(ele, time, toArgs); }, 22.2);
    };
    /**
    * kill
    * AniX.kill(a);
    */
    AniXClass.prototype.kill = function (ele, complete) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        cssx_1.CssX.css3(ele, 'transition', 'none !important');
        cssx_1.CssX.css3(ele, 'transition', 'none');
        dic_1.Dic.get(ele).id && clearTimeout(dic_1.Dic.get(ele).id);
        dic_1.Dic.get(ele).event && cssx_1.CssX.removeEventListener(ele, dic_1.Dic.get(ele).event, dic_1.Dic.get(ele).handler);
    };
    AniXClass.prototype.getTransform = function (param) {
        return gettransform_1.getTransform(param);
    };
    AniXClass.prototype.get = function (param) {
        return gettransform_1.getTransform(param);
    };
    AniXClass.prototype.set = function (ele, args) {
        this.setStyle(ele, args);
    };
    AniXClass.prototype.start = function (ele, transition, time, args) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        var id = dic_1.Dic.setId(ele);
        (!args.nokill) && this.kill(ele);
        //set ani
        cssx_1.CssX.css3(ele, 'transition', transition);
        this.setStyle(ele, args);
        this.addCallback(ele, time, args);
        this.debug && console.trace(ele, ele.__nxid, transition);
        return id;
    };
    /**
    * no animation
    */
    AniXClass.prototype.noAniStart = function (ele, transition, time, args) {
        var _this = this;
        ele = gethtmlelement_1.getHTMLElement(ele);
        var id = dic_1.Dic.setId(ele);
        (!args.nokill) && this.kill(ele);
        this.useTranstionEvent = false;
        setTimeout(function () {
            args.delay = 0;
            _this.setStyle(ele, args);
            _this.addCallback(ele, 0, args);
        }, 50);
        this.debug && console.trace(ele, ele.__nxid, transition);
        return id;
    };
    /**
    * Set the style set style or add class
    */
    AniXClass.prototype.setStyle = function (ele, args) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        if (!isNull(args)) {
            cssx_1.CssX.css(ele, this.getNormalStyles(args));
            //add class
            args.className && cssx_1.CssX.addClass(ele, args.className);
        }
    };
    /**
    * add callbacks
    */
    AniXClass.prototype.addCallback = function (ele, time, args) {
        var delay = args.delay || 0;
        var allTime = (time + delay) * 1000;
        if (args.onStart)
            setTimeout(args.onStart, delay * 1000);
        if (args.onComplete) {
            if (this.useTranstionEvent) {
                dic_1.Dic.get(ele).event = cssx_1.CssX.getTranstionEndEvent();
                dic_1.Dic.get(ele).fun = args.onComplete;
                dic_1.Dic.get(ele).handler = (function (ele) {
                    dic_1.Dic.get(ele).fun();
                    cssx_1.CssX.removeEventListener(ele, dic_1.Dic.get(ele).event, dic_1.Dic.get(ele).handler);
                }).bind(null, ele);
                cssx_1.CssX.addEventListener(ele, dic_1.Dic.get(ele).event, dic_1.Dic.get(ele).handler);
            }
            else {
                dic_1.Dic.get(ele).id = setTimeout(args.onComplete, allTime);
            }
        }
    };
    /**
    * get style key name
    */
    AniXClass.prototype.getPureStyleKeys = function (args) {
        if (args.all || args.css || args.className)
            return ['all'];
        var keys = [];
        this.each(args, function (key) { return keys.push(key); });
        return keys;
    };
    /**
    * get pure css2 style
    */
    AniXClass.prototype.getNormalStyles = function (args) {
        var styles = {};
        this.each(args, function (key) { return styles[key] = args[key]; });
        return styles;
    };
    AniXClass.prototype.notKeyWords = function (key) {
        return this.KEYWORDS.indexOf(key) < 0;
    };
    AniXClass.prototype.each = function (args, func) {
        for (var key in args) {
            if (this.notKeyWords(key))
                func(key);
            ;
        }
    };
    AniXClass.prototype.pretreatment = function (args) {
        var cArgs = {};
        var transformArgs = {};
        for (var key in args) {
            if (!gettransform_1.isTransformStyle(key))
                cArgs[key] = args[key];
            else
                transformArgs[key] = args[key];
        }
        if (!isNull(transformArgs))
            cArgs = __assign({}, cArgs, gettransform_1.getTransform(transformArgs));
        return cArgs;
    };
    return AniXClass;
}());
exports.AniXClass = AniXClass;
var isNull = function (styles) {
    if (!styles)
        return true;
    var index = 0;
    for (var key in styles) {
        index++;
    }
    return index == 0;
};
//export instance
var AniX = new AniXClass();
exports.AniX = AniX;
//# sourceMappingURL=anix.js.map