import { AniX } from '../';

(function ($) {
    
    $.fn.to = function (time: number, args: {
        ease?: string;
        delay?: number;
        [propName: string]: any;
    }) {
        return AniX.to(this, time, args);
    };

    $.fn.fromTo = function (time: number, fromArgs: Object, toArgs: Object) {
        return AniX.fromTo(this, time, fromArgs, toArgs);
    };

    $.fn.kill = function (complete?: boolean) {
        return AniX.kill(this, complete);
    };

    $.fn.getTransform = function (param) {
        return AniX.getTransform(param);
    };

    $.fn.hasTransition = function (param) {
        return AniX.support;
    };

})(window['jQuery'] || window['Zepto']);