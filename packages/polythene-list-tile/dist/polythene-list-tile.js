!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-icon"),require("polythene-ripple"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-icon","polythene-ripple","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-icon"],e["polythene-ripple"],e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,l,i,o,n,r){"use strict";function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function _(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}t="default"in t?t.default:t,l="default"in l?l.default:l,i="default"in i?i.default:i;var a=r.vars.rgba,d={single_height:48,single_line_height:21,single_with_icon_height:56,single_with_icon_line_height:29,padding:13,compact_padding:9,subtitle_line_count:1,has_subtitle_padding:15,high_subtitle_line_count:2,has_high_subtitle_padding:13,front_item_width:72,side_padding:2*r.vars.grid_unit_component,font_size_title:16,font_size_subtitle:14,line_height_subtitle:20,font_size_list_header:14,font_size_small:12,color_light_title:a(r.vars.color_light_foreground,r.vars.blend_light_text_primary),color_light_subtitle:a(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_info:a(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_text_disabled:a(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_list_header:a(r.vars.color_light_foreground,r.vars.blend_light_text_tertiary),color_light_secondary:a(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_background_hover:a(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_light_background_selected:a(r.vars.color_light_foreground,r.vars.blend_light_background_hover),color_dark_title:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_primary),color_dark_subtitle:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_info:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_text_disabled:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_list_header:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_tertiary),color_dark_secondary:a(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_background_hover:a(r.vars.color_dark_foreground,r.vars.blend_dark_background_hover),color_dark_background_selected:a(r.vars.color_dark_foreground,r.vars.blend_dark_background_hover)},p=function(e){return{"padding-left":e+"px","padding-right":e+"px"}},c=function(e,t){return{"padding-top":e+"px","padding-bottom":(t||e)+"px"}},h=function(e,t){return[s({},e,[n.flex.layout,{position:"relative",overflow:"hidden",".pe-list-tile--sticky":[n.mixin.sticky(2)]," .pe-list-tile__primary, .pe-list-tile__secondary":[n.flex.layoutHorizontal,{"text-decoration":"none",color:"inherit",border:"none"}]," .pe-list-tile__primary":[n.flex.flex(),{position:"relative"," .pe-list-tile__content:not(.pe-list-tile__content--front)":[n.flex.flex(),c(t.padding,t.padding+1)]}]," .pe-list-tile__secondary":{"text-align":"right","font-size":t.font_size_title+"px",position:"relative"}," .pe-list-tile__content":[n.flex.layoutVertical,n.flex.selfCenter,p(t.side_padding),{".pe-list-tile__content--front":[c(t.padding-5),{width:t.front_item_width+"px"}]," small":{"font-size":t.font_size_small+"px"}}]," .pe-list-tile__content--front + .pe-list-tile__content":{"padding-left":0}," .pe-list-tile__title":[n.mixin.ellipsis(1),{"font-size":t.font_size_title+"px","font-weight":r.vars.font_weight_normal,"line-height":t.single_line_height+"px"}]," .pe-list-tile__subtitle":[n.mixin.ellipsis(t.subtitle_line_count,t.line_height_subtitle),{"font-size":t.font_size_subtitle+"px","line-height":t.line_height_subtitle+"px",".pe-list-tile__high-subtitle":[n.mixin.ellipsis(t.high_subtitle_line_count,t.line_height_subtitle),{"white-space":"normal"}]}],".pe-list-tile--selected, &.pe-list-tile--disabled":{" a":{"pointer-events":"none"}},".pe-list-tile--subtitle":{" .pe-list-tile__content":[c(t.has_subtitle_padding,t.has_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--high-subtitle":{" .pe-list-tile--high-subtitle .pe-list-tile__secondary":[n.flex.layoutHorizontal,n.flex.layoutStart]," .pe-list-tile__content":[n.flex.selfStart,c(t.has_high_subtitle_padding,t.has_high_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list__header":{height:t.single_height+"px"," .pe-list-tile__content":{"padding-top":0,"padding-bottom":0}," .pe-list-tile__title":[n.mixin.ellipsis(1,t.single_height),{"font-size":t.font_size_list_header+"px","font-weight":r.vars.font_weight_medium,"line-height":t.single_height+"px",padding:0}]}," .pe-list--compact &, &.pe-list-tile--compact":{":not(.pe-list__header)":{" .pe-list-tile__content":c(t.compact_padding,t.compact_padding+1)}},"@supports (-moz-appearance:none) and (display:contents)":{" .pe-list-tile__primary, .pe-list-tile__content":{overflow:"hidden"}},".pe-dialog .pe-menu__content &":{" .pe-list-tile__title":n.mixin.ellipsis("none")},".pe-menu__content &":{":not(.pe-list-tile--disabled)":{cursor:"default","&, .pe-list-tile__primary, .pe-list-tile__secondary":{" .pe-list-tile__title, .pe-list-tile__subtitle":{userSelect:"none"}}}},"html.pe-no-touch &.pe-list-tile--hoverable,       html.pe-no-touch &.pe-list-tile--selectable":{":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover":{cursor:"pointer"}}}])]},u=function(e,t,l,i){return[_({},e.map(function(e){return e+t}).join(","),{color:l["color_"+i+"_title"],backgroundColor:l["color_"+i+"_background"]||"initial",".pe-list__header":{color:l["color_"+i+"_list_header"]," .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:"inherit"}}," .pe-list-tile__subtitle":{color:l["color_"+i+"_subtitle"]}," .pe-list-tile__secondary":{color:l["color_"+i+"_secondary"]},".pe-list-tile--disabled":{"&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle":{color:l["color_"+i+"_text_disabled"]}},".pe-list-tile--selected":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_background_selected"]}},"&.pe-list-tile--sticky":{backgroundColor:l["color_"+i+"_background"]||"inherit"}})]},g=function(e,t,l,i){return[_({},e.map(function(e){return e+t+":hover"}).join(","),{":not(.pe-list__header):not(.pe-list-tile--disabled)":{" .pe-list-tile__primary, .pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_background_hover"]}}})]},b=function(e,t){return[u([".pe-dark-theme",".pe-dark-theme "],e,t,"dark"),u(["",".pe-light-theme",".pe-light-theme "],e,t,"light"),g(["html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable","html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable "],e,t,"dark"),g(["html.pe-no-touch .pe-list-tile--hoverable","html.pe-no-touch .pe-list-tile--hoverable ","html.pe-no-touch .pe-light-theme .pe-list-tile--hoverable","html.pe-no-touch .pe-light-theme .pe-list-tile--hoverable "],e,t,"light")]},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},v=[h,b],y=function(e,t){return n.styler.generateStyles([e,".pe-list-tile"],f({},d,t),v)};n.styler.generateStyles([".pe-list-tile"],d,v);var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},k={component:"pe-list-tile",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",content:"pe-list-tile__content",contentFront:"pe-list-tile__content--front",title:"pe-list-tile__title",subtitle:"pe-list-tile__subtitle",highSubtitle:"pe-list-tile__high-subtitle",selected:"pe-list-tile--selected",disabled:"pe-list-tile--disabled",sticky:"pe-list-tile--sticky",hasSubtitle:"pe-list-tile--subtitle",hasHighSubtitle:"pe-list-tile--high-subtitle",hasFront:"pe-list-tile--front",compact:"pe-list-tile--compact",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable"},x=function(e,l){var i=e.element?e.element:e.url?"a":"div",n=k.content+" "+k.contentFront,r=e.front?t("div",{class:n},e.front):e.indent?t("div",{class:n}):null;return t(i,m({},o.filterSupportedAttributes(e),e.url,e.events,{class:k.primary,style:null}),[r,t("div",{class:k.content,style:e.style},[e.content?e.content:l,e.title&&!e.content?t("div",{class:k.title},e.title):null,e.subtitle?t("div",{class:k.subtitle},e.subtitle):null,e.highSubtitle?t("div",{class:k.subtitle+" "+k.highSubtitle},e.highSubtitle):null])])},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e.element?e.element:e.url?"a":"div",m({},o.filterSupportedAttributes(e),e.url,{class:k.secondary}),t("div",{class:k.content},[e.icon?t(l,e.icon):null,e.content?e.content:null]))},z=function(e){var l=e.attrs,n=l.element||"div",r=l.subtitle?k.hasSubtitle:l.highSubtitle?k.hasHighSubtitle:l.front||l.indent?k.hasFront:null,s=m({},o.filterSupportedAttributes(l),{class:[k.component,l.selected?k.selected:null,l.disabled?k.disabled:null,l.sticky?k.sticky:null,l.compact?k.compact:null,l.hoverable?k.hoverable:null,l.selectable?k.selectable:null,"dark"===l.tone?"pe-dark-theme":null,"light"===l.tone?"pe-light-theme":null,r,l.class].join(" ")}),_=m({},l);delete _.id,delete _.class;var a=[l.ink&&!l.disabled?t(i,l.ripple):null,x(_,l.children||e.children),l.secondary?w(l.secondary):null];return t(n,s,[l.before,a,l.after])},S={theme:y,view:z};e.default=S,e.classes=k,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-list-tile.js.map
