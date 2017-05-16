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