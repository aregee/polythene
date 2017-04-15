!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mithril"),require("polythene-core"),require("polythene-utilities"),require("polythene-css"),require("polythene-theme"),require("polythene-button"),require("polythene-icon-button"),require("polythene-icon")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-utilities","polythene-css","polythene-theme","polythene-button","polythene-icon-button","polythene-icon"],e):e(t.polythene=t.polythene||{},t.m,t["polythene-core"],t["polythene-utilities"],t["polythene-css"],t["polythene-theme"],t["polythene-button"],t["polythene-icon-button"],t["polythene-icon"])}(this,function(t,e,n,o,a,l,r,i,s){"use strict";function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e="default"in e?e.default:e;var u="default"in r?r.default:r,_="default"in i?i.default:i;s="default"in s?s.default:s;var d=l.vars.rgba,p=r.vars.font_size,h=1.1*p,f={tab_min_width:72,tab_max_width:"initial",tab_height:48,label_max_width:264,menu_tab_height:44,menu_tab_icon_label_height:44,tab_icon_label_height:72,tab_icon_label_icon_spacing:7,indicator_slide_speed:600,indicator_slide_min_duration:.25,tabs_indent:l.vars.unit_indent,tabs_scroll_speed:600,tabs_scroll_delay:.15,tabs_scroll_min_duration:.5,scroll_button_fade_duration:.2,scroll_button_fade_delay:.5,tab_content_padding_v:12,tab_menu_content_padding_v:6,tab_indicator_height:2,scrollbar_offset:20,scroll_button_opacity:.7,label_opacity:.7,tab_label_line_height:h,tab_label_vertical_offset:h-p,tab_label_transition_property:"opacity, color, backgroundColor",color_light:"inherit",color_light_selected:d(l.vars.color_primary),color_light_selected_background:"transparent",color_light_tab_indicator:d(l.vars.color_primary),color_light_icon:i.vars.color_light,color_dark:"inherit",color_dark_selected:d(l.vars.color_primary),color_dark_selected_background:"transparent",color_dark_tab_indicator:d(l.vars.color_primary),color_dark_icon:i.vars.color_dark},g=function(t,e){return[c({},t,{userSelect:"none",transform:"translate3d(0,0,0)","-webkit-overflow-scrolling":"touch","& ::-webkit-scrollbar":{display:"none"},".pe-tabs--menu":{" .pe-tabs__tab":{height:e.menu_tab_height+"px"}," .pe-tabs__tab---icon":{height:e.menu_tab_icon_label_height+"px"}," .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon, .pe-tabs__tab.pe-text-button":{minWidth:0,height:e.menu_tab_icon_label_height+"px"," .pe-button__content":{padding:"0 "+e.tab_menu_content_padding_v+"px",height:e.menu_tab_height+"px"," .pe-icon":{marginBottom:0}," .pe-button__content":{fontSize:"10px",lineHeight:"12px",textTransform:"none"}}}},".pe-tabs--scrollable":{"max-height":e.tab_height+"px","-ms-overflow-style":"none"," .pe-tabs__scroll-button":{display:"none"}," .pe-tabs__row":{marginBottom:-e.scrollbar_offset+"px"}}," .pe-no-touch &":{".pe-tabs--scrollable":{backgroundColor:"inherit"}," .pe-tabs__scroll-button":{position:"absolute",display:"block",top:0,backgroundColor:"inherit",zIndex:1,borderRadius:0," .pe-button__content":{borderRadius:0,backgroundColor:"inherit",transitionProperty:e.tab_label_transition_property,transitionDuration:e.scroll_button_fade_duration+"s",transitionTimingFunction:"ease-out",transitionDelay:e.scroll_button_fade_delay+"s",opacity:e.scroll_button_opacity}},".pe-tabs--start .pe-tabs__scroll-button-start":{pointerEvents:"none",cursor:"default"," .pe-button__content":{opacity:0}},".pe-tabs--end .pe-tabs__scroll-button-end":{pointerEvents:"none",cursor:"default"," .pe-button__content":{opacity:0}}," .pe-tabs__scroll-button-start":{left:0}," .pe-tabs__scroll-button-end":{right:0}}," .pe-tabs__row":[a.flex.layoutHorizontal,{userSelect:"none",position:"relative",whiteSpace:"nowrap",".pe-tabs__row--indent":{margin:0,paddingLeft:e.tabs_indent+"px",overflow:"auto"},".pe-tabs__row--centered":a.flex.layoutCenterJustified}]," .pe-tabs__scroll-button-offset":[a.flex.flex(),a.flex.flexIndex("none")]," .pe-tabs__tab":[a.flex.flex(),a.flex.flexIndex("none"),a.mixin.defaultTransition("color"),{userSelect:"none",margin:0,borderRadius:0,height:e.tab_height+"px",padding:0,color:"inherit",minWidth:isNaN(e.tab_min_width)?e.tab_min_width:e.tab_min_width+"px",maxWidth:isNaN(e.tab_max_width)?e.tab_max_width:e.tab_max_width+"px",".pe-text-button .pe-button__content":{padding:"0 "+e.tab_content_padding_v+"px",height:e.tab_height+"px",lineHeight:l.vars.line_height+"em",borderRadius:0," .pe-button__label, .pe-icon":{maxWidth:e.label_max_width+"px",lineHeight:e.tab_label_line_height+"px",maxHeight:2*e.tab_label_line_height+"px",overflow:"hidden",whiteSpace:"normal"}," .pe-button__label":[a.mixin.defaultTransition("opacity",e.animation_duration),{margin:e.tab_label_vertical_offset+"px 0 0 0",padding:0,opacity:e.label_opacity}]," .pe-icon":{marginLeft:"auto",marginRight:"auto"}," .pe-button__focus":{display:"none"}},".pe-button--selected":{" .pe-button__content .pe-button__content":{opacity:1}},".pe-tabs__tab---icon":{"&, .pe-button__content":[{height:e.tab_icon_label_height+"px"},{" .pe-button__content, .pe-icon":{margin:"0 auto"}},{" .pe-icon":{marginBottom:e.tab_icon_label_icon_spacing+"px"}}]}}]," .pe-tabs__tab-content":[a.flex.layoutCenterCenter,a.flex.layoutVertical,{height:"inherit"}],".pe-tabs--autofit .pe-tabs__tab":[a.flex.flex(),{minWidth:"initial",maxWidth:"none"}],".pe-tabs__active-selectable":{" .pe-tabs__tab.pe-button--selected":{cursor:"pointer",pointerEvents:"initial"}}," .pe-tabs__indicator":{transform:"translate3d(0,0,0)",transformOrigin:"left 50%",transitionProperty:"all",transitionTimingFunction:"ease-out",position:"absolute",height:e.tab_indicator_height+"px",bottom:0,left:0,width:"100%"}," .pe-toolbar--tabs .pe-toolbar__bar &":[a.mixin.fit(),{width:"auto",margin:0,top:"auto"}]})]},m=function(t,e,n,o){return[b({},t.map(function(t){return t+e}).join(","),{color:n["color_"+o]," .pe-tabs__tab.pe-button--selected":{color:n["color_"+o+"_selected"]," .pe-button__content":{background:n["color_"+o+"_selected_background"]}}," .pe-tabs__tab:not(.pe-button--selected) .pe-icon":{color:n["color_"+o+"_icon"]}," .pe-tabs__indicator":{backgroundColor:n["color_"+o+"_tab_indicator"]}," .pe-tabs__scroll-button":{color:"inherit"}})]},v=function(t,e){return[m([".pe-dark-theme",".pe-dark-theme "],t,e,"dark"),m(["",".pe-light-theme",".pe-light-theme "],t,e,"light")]},x=e.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>'),w=e.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>'),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},S={msvg:x},k={msvg:w},B=[g,v],T=function(t,e){return a.styler.generateStyles([t,".pe-tabs"],y({},f,e),B)};a.styler.generateStyles([".pe-tabs"],f,B);var I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},E=function(t){var n=t.attrs;return n.events=n.events||{},n.events.onclick=n.events.onclick||function(){},e(u,I({},n,{content:e("div",{class:z.tabContent},[n.icon?e(s,n.icon):null,n.label?e("div",{class:z.label},e("span",n.label)):null]),class:[z.tab,n.icon&&n.label?z.tabHasIcon:null,n.class].join(" "),selected:n.selected,wash:!1,ripple:!0,events:I({},n.events,{onclick:function(t){n.onSelect(),n.events.onclick(t)}}),oncreate:function(t){return n.register(n.index,{data:n,el:t.dom})}}))},C={view:E},R=function(t){var n=t.attrs,o="start"===n.position?n.icon||S:n.icon||k;return e(_,{class:[z.scrollButton,n.class].join(" "),icon:o,ripple:{center:!0},events:n.events,oncreate:function(t){return n.register(n.position,t.dom)}})},O={view:R},j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},z={component:"pe-tabs",scrollButton:"pe-tabs__scroll-button",scrollButtonAtStart:"pe-tabs__scroll-button-start",scrollButtonAtEnd:"pe-tabs__scroll-button-end",scrollButtonOffset:"pe-tabs__scroll-button-offset",tabRow:"pe-tabs__row",tabRowCentered:"pe-tabs__row--centered",tabRowIndent:"pe-tabs__row--indent",tab:"pe-tabs__tab",tabContent:"pe-tabs__tab-content",tabHasIcon:"pe-tabs__tab---icon",indicator:"pe-tabs__indicator",scrollable:"pe-tabs--scrollable",isAutofit:"pe-tabs--autofit",isAtStart:"pe-tabs--start",isAtEnd:"pe-tabs--end",smallTabs:"pe-tabs--small",isMenu:"pe-tabs--menu",activeSelectable:"pe-tabs__active-selectable",label:"pe-button__label"},A=function(){return Promise.resolve()},L=function(t,e){var n=e.length-1;return{backward:Math.max(t-1,0),forward:Math.min(t+1,n)}},q=function(t,n,o,a){o.stopPropagation(),o.preventDefault();var l=t.selectedTabIndex,r=L(l,t.tabs)[a];r!==l?(D(t,n,r,!0),e.redraw()):W(t,r)},M=function(t){var e=t.tabs[0].el,n=e.querySelector("."+z.label+" span"),o=e.getBoundingClientRect().width,a=n.getBoundingClientRect().width,l=(o-a)/2;e.style.marginLeft=-l+"px"},P=function(t){var e=t.scrollButtons.end.getBoundingClientRect().width;t.tabsEl.querySelector("."+z.scrollButtonOffset).style.width=e+"px"},W=function(t,e){var n=t.tabs,a=t.scrollerEl,l=n.slice(0,e).reduce(function(t,e){return t+e.el.getBoundingClientRect().width},0),r=a.getBoundingClientRect().width,i=a.scrollWidth,s=i-r,c=Math.min(l,s),b=a.scrollLeft;if(b!==c){var u=Math.abs(b-c)/f.tabs_scroll_speed,_=f.tabs_scroll_delay||0;setTimeout(function(){o.scrollTo({element:a,to:c,duration:Math.max(f.tabs_scroll_min_duration,u),direction:"horizontal"})},1e3*_)}},H=function(t){var e=t.scrollerEl,n=e.scrollLeft,o=t.selectedTabIndex,a=t.tabsEl,l=t.tabs.length-1,r=0===e.scrollLeft&&0===o,i=n>=e.scrollWidth-a.getBoundingClientRect().width-1&&o===l;t.scrollButtonStates.start=!r,t.scrollButtonStates.end=!i},N=function(t,e,n){var o=n.tabsEl.getBoundingClientRect(),a=t.getBoundingClientRect(),l=n.tabIndicatorEl.style,r=a.left-o.left+n.scrollerEl.scrollLeft,i="translate("+r+"px, 0)",s=e?f.indicator_slide_min_duration:0;l.width=a.width+"px",l["transition-duration"]=l["-webkit-transition-duration"]=l["-moz-transition-duration"]=l["-o-transition-duration"]=s+"s",l.transform=l["-webkit-transform"]=l["-moz-transform"]=l["-ms-transform"]=l["-o-transform"]=i},D=function(t,e,n,o){if(t.selectedTabIndex=n,t.tabs.length){var a=t.tabs[n].el;a&&t.tabIndicatorEl&&t.tabsEl&&N(a,o,t),t.managesScroll&&(H(t),W(t,n)),e.getState&&e.getState({index:n,data:t.tabs[n].data,el:a})}},F=function(t,e){return t<e?1:t>e?-1:0},J=function(t){var o=t.attrs,a=t.state,l=o.element||"div",r=!o.scrollable&&!o.centered&&!!o.autofit;void 0!==o.selectedTab&&a.previousSelectedTab!==o.selectedTab&&D(a,o,o.selectedTab,!0),a.previousSelectedTab=o.selectedTab;var i=function(){return D(a,o,a.selectedTabIndex,!1),e.redraw()},s=j({},n.filterSupportedAttributes(o),{class:[z.component,o.scrollable?z.scrollable:null,0===a.selectedTabIndex?z.isAtStart:null,a.selectedTabIndex===a.tabs.length-1?z.isAtEnd:null,o.activeSelected?z.activeSelectable:null,r?z.isAutofit:null,o.small?z.smallTabs:null,o.menu?z.isMenu:null,"dark"===o.tone?"pe-dark-theme":null,"light"===o.tone?"pe-light-theme":null,o.class].join(" "),oninit:function(){return n.subscribe("resize",i)},oncreate:function(t){a.tabsEl=t.dom,A().then(function(){if(o.largestWidth){var t=a.tabs.map(function(t){return t.el.getBoundingClientRect().width}),l=t.sort(F)[0];a.tabs.forEach(function(t){return t.el.style.width=l+"px"})}o.scrollable&&M(a),o.scrollable&&!n.isTouch&&(a.managesScroll=!0,P(a)),D(a,o,a.selectedTabIndex,!1),o.getState&&setTimeout(e.redraw)})},onremove:function(){return n.unsubscribe("resize",i)}}),c=o.content?o.content:o.buttons?o.buttons:o.children||t.children,b=c.map(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];return e(C,j({},t,{selected:n===a.selectedTabIndex,animateOnTap:o.animateOnTap!==!1},o.tabsOpts||{},{index:n,key:"tab-"+n,register:a.registerTabButton,onSelect:function(){return D(a,o,n,!o.noIndicatorSlide),setTimeout(e.redraw)}}))}),u=o.scrollable?b.concat([e("div",{class:z.scrollButtonOffset})]):b,_=void 0,d=void 0;o.scrollable&&(_=e(O,j({},{icon:o.scrollIconBackward,class:z.scrollButtonAtStart,position:"start",register:a.registerScrollButton,events:{onclick:function(t){return q(a,o,t,"backward")}}})),d=e(O,j({},{icon:o.scrollIconForward,class:z.scrollButtonAtEnd,position:"end",register:a.registerScrollButton,events:{onclick:function(t){return q(a,o,t,"forward")}}})));var p=o.hideIndicator?null:e("div",{class:z.indicator,oncreate:function(t){return a.tabIndicatorEl=t.dom}}),h=[o.scrollable?_:null,e("div",{class:[z.tabRow,o.centered?z.tabRowCentered:null,o.scrollable?z.tabRowIndent:null].join(" "),oncreate:function(t){return a.scrollerEl=t.dom}},[u,p]),o.scrollable?d:null];return e(l,s,[o.before,h,o.after])},V={theme:T,view:J,oninit:function(t){var e=function(e,n){return t.state.tabs[e]=n},n=function(e,n){return t.state.scrollButtons[e]=n};t.state=j(t.state,{tabsEl:void 0,scrollerEl:void 0,tabs:[],tabRow:void 0,tabIndicatorEl:void 0,selectedTabIndex:t.attrs.selectedTab||0,previousSelectedTab:void 0,managesScroll:!1,scrollButtonStates:{start:!1,end:!1},scrollButtons:{start:void 0,end:void 0},registerTabButton:e,registerScrollButton:n})}};t.default=V,t.classes=z,t.vars=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-tabs.js.map
