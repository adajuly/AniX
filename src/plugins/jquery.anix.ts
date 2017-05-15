import { AniX } from '../';
declare var jQuery: any;
declare var Zepto: any;

(function ($) {
    $.extend({
        AniX: AniX
    })

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

    $.fn.getTransform = function (param: any) {
        return AniX.getTransform(param);
    };

    $.fn.hasTransition = function () {
        return AniX.support;
    };

})(jQuery || Zepto);