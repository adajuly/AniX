/**
* AniX JQuery Plugins
* 
  $('.class1').to(.5, {
      'left': Math.random() * $(window).width() + 'px',
      'background-color': getRandomColor(),
      'ease': $.ease.easeOutCubic
  });

  $('h2').fromTo(.5, {color:'#ffcc00'}, {color:'#000'});
* 
* @tiptext
*
*/

import { AniX } from '../';
declare var jQuery: any;
declare var Zepto: any;

(function ($) {
    $.extend({
        AniX: AniX,
        ease: AniX.ease
    })

    $.AniX = AniX;

    $.fn.to = function (time: number, args: {
        ease?: string;
        delay?: number;
        [propName: string]: any;
    }) {
        this.each((i: number, ele: any) => AniX.to(ele, time, args));
        return this;
    };

    $.fn.fromTo = function (time: number, fromArgs: Object, toArgs: Object) {
        this.each((i: number, ele: any) => AniX.fromTo(ele, time, fromArgs, toArgs));
        return this;
    };

    $.fn.kill = function (complete?: boolean) {
        this.each((i: number, ele: any) => AniX.kill(ele, complete));
        return this;
    };

    $.fn.getTransform = function (param: any) {
        return AniX.getTransform(param);
    };

    $.fn.hasTransition = function () {
        AniX.support;
        return this;
    };

})(jQuery || Zepto);