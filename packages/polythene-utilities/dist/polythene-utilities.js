!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"])}(this,function(e,t,n){"use strict";t.isClient&&!window.WebFontConfig&&(window.WebFontConfig={},function(){var e=document.createElement("script");e.src=("https:"===document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t&&t.parentNode.insertBefore(e,t)}());var o=function(e,n,o){if(!t.isServer){var l=window.WebFontConfig[e]||{};l.families=l.families||[],l.families.push(n),o&&(l.key=o),window.WebFontConfig[e]=l}},l={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=[{".layout, .layout.horizontal":n.flex.layout,".layout.horizontal.inline, .layout.vertical.inline":n.flex.layoutInline,".layout.horizontal":n.flex.layoutHorizontal,".layout.horizontal.reverse":n.flex.layoutHorizontalReverse,".layout.vertical":n.flex.layoutVertical,".layout.vertical.reverse":n.flex.layoutVerticalReverse,".layout.wrap":n.flex.layoutWrap,".layout.wrap.reverse":n.flex.layoutWrapReverse,".flex":n.flex.flex(1),".span.flex":{display:"block"},".flex.auto-vertical":n.flex.flexAutoVertical,".flex.auto":n.flex.flexAuto,".flex.none":n.flex.flexIndex("none"),".flex.one":n.flex.flexIndex(1),".flex.two":n.flex.flexIndex(2),".flex.three":n.flex.flexIndex(3),".flex.four":n.flex.flexIndex(4),".flex.five":n.flex.flexIndex(5),".flex.six":n.flex.flexIndex(6),".flex.seven":n.flex.flexIndex(7),".flex.eight":n.flex.flexIndex(8),".flex.nine":n.flex.flexIndex(9),".flex.ten":n.flex.flexIndex(10),".flex.eleven":n.flex.flexIndex(11),".flex.twelve":n.flex.flexIndex(12),".layout.start":n.flex.layoutStart,".layout.center, .layout.center-center":n.flex.layoutCenter,".layout.end":n.flex.layoutEnd,".layout.start-justified":n.flex.layoutStartJustified,".layout.center-justified, .layout.center-center":n.flex.layoutCenterJustified,".layout.end-justified":n.flex.layoutEndJustified,".layout.around-justified":n.flex.layoutAroundJustified,".layout.justified":n.flex.layoutJustified,".self-start":n.flex.selfStart,".self-center":n.flex.selfCenter,".self-end":n.flex.selfEnd,".self-stretch":n.flex.selfStretch}],r=[{".pe-block":{display:"block"},".pe-inline-block":{display:"inline-block"},".pe-hidden":{display:"none !important"},".pe-relative":{position:"relative"},".pe-absolute":{position:"absolute"},".pe-fit":{position:"absolute",top:0,right:0,bottom:0,left:0},".pe-fullbleed":{margin:0,height:"100vh"}}],u=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e})({},i,r),a=function(){return n.styler.add("pe-layout",i,r)},f=function(e){var t=e.element,n="horizontal"===e.direction?"scrollLeft":"scrollTop",o=e.to,i=1e3*e.duration,r=e.easing||l.easeInOutCubic,u=t[n],a=o-u,f=(new Date).getTime(),x=!0;return new Promise(function(e){s(function l(){if(x){s(l);var c=((new Date).getTime()-f)/i,d=u+a*r(c);t[n]=d,c>=1&&(t[n]=o,x=!1,e())}})})},s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}(),x=function(){var e=void 0,t=void 0,n=void 0,o=void 0,l=function(){return window.clearTimeout(e)},i=function(){return l(),t=new Date,e=window.setTimeout(o,n)};return{start:function(e,t){return o=e,n=1e3*t,i()},pause:function(){return l(),n-=new Date-t},resume:function(){return i()},stop:l}};e.addWebFont=o,e.easing=l,e.layoutStyles=u,e.addLayoutStyles=a,e.scrollTo=f,e.Timer=x,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-utilities.js.map