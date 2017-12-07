/*
 * jQuery PlugIn, Polygon Drawing, By KEVIN SHEEP
 * Based On SVG.js jQuery.js
 * 
 */
;
"use strict";

(function($){
  $.fn.extend({
    defaults : {
         version    : 1.1
        ,debug      : ""
        ,SWIDTH     : 1200
        ,SHEIGHT    : 700
        ,STOKEWIDTH : 2
        ,DOTSIZE    : 8
        ,OPACITY    : .4
        ,COLORARRAY : ['#c00', '#0c0', '#00c', '#990', '#909', '#099', '#000']
        ,stageCls   : "drawbox"
        ,oDraw      : {}
        ,activeDraw : ""
    }//defaults
    ,initDraw : function(options){
      var opts = $.extend(this.defaults, options);
      return this.each(function(index, ele){//使每一个窗口都初始化，能载入或画图
        if (! SVG.supported) {
          console.log('SVG NOT Supported');
        }else{
          var $ele = $(ele);
          var $container = $ele.parent();
          if($container.siblings().find("." + opts.stageCls).length == 0) {
            var obj = document.createElement("div");
            var $obj = $(obj);
            $obj.addClass(opts.stageCls);
            opts.activeDraw = $ele.attr("id");
            $container.append($obj);
          }

          console.log('SVG Initialazed on ' + opts.activeDraw);
        }//SVG.supported
      });//each
    }//init
    ,loadPolygon : function(polyStr){
      console.log(polyStr);
    }
  });//extend    
})(jQuery);
