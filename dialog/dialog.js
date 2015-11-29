"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneShadowShadow=require("polythene/shadow/shadow");var _polytheneShadowShadow2=_interopRequireDefault(_polytheneShadowShadow);require("polythene-theme/dialog/dialog");var FADE_IN_DURATION=150;var FADE_OUT_DURATION=150;var FADE_IN_DELAY=0;var FADE_OUT_DELAY=0;var SCROLL_WATCH_TIMER=150;var d=document.documentElement.style;var alignSelfSupported="alignSelf"in d||"WebkitAlignSelf"in d;var willHide=function willHide(ctrl,opts){var deferred=_mithril2["default"].deferred();if(opts.willHide){opts.willHide.call()}deferred.resolve();return deferred.promise};var fadeOut=function fadeOut(el,opts){var deferred=_mithril2["default"].deferred();var duration=opts.transition==="out"||opts.transition==="both"?FADE_OUT_DURATION:0;var delay=opts.transition==="out"||opts.transition==="both"?FADE_OUT_DELAY:0;setTimeout(function(){if(el){el.style.transitionDuration=duration+"ms";el.style.opacity=0}deferred.resolve()},delay);return deferred.promise};var finishHide=function finishHide(ctrl,opts){var deferred=_mithril2["default"].deferred();var MIN_FADE_OUT_DURATION=50;var duration=opts.transition==="out"||opts.transition==="both"?FADE_OUT_DURATION:MIN_FADE_OUT_DURATION;setTimeout(function(){ctrl.parentEl.classList.remove("dialog-open");if(opts.didHide){opts.didHide.call()}deferred.resolve()},duration);return deferred.promise};var transitionHide=function transitionHide(ctrl,opts){var deferred=_mithril2["default"].deferred();var el=ctrl.dialogEl;fadeOut(el,opts).then(finishHide(ctrl,opts).then(deferred.resolve()));return deferred.promise};var hide=function hide(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];ctrl.isTransitioning=true;willHide(ctrl,opts).then(transitionHide(ctrl,opts).then(function(){ctrl.isTransitioning=false}))};var fadeIn=function fadeIn(el,opts){var deferred=_mithril2["default"].deferred();var f=function f(duration){if(el){el.style.transitionDuration=duration+"ms";el.style.opacity=1}deferred.resolve()};if(opts.transition==="in"||opts.transition==="both"){setTimeout(function(){f(FADE_IN_DURATION)},FADE_IN_DELAY)}else{f(0)}return deferred.promise};var show=function show(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var deferred=_mithril2["default"].deferred();if(ctrl.isTransitioning){return}var dialogEl=ctrl.dialogEl;dialogEl.style.opacity=0;ctrl.parentEl.classList.add("dialog-open");ctrl.isTransitioning=true;fadeIn(dialogEl,opts).then(function(){ctrl.isTransitioning=false;deferred.resolve()});return deferred.promise};var updateScrollState=function updateScrollState(ctrl){var scroller=ctrl.scrollEl;if(!scroller){return}ctrl.topOverflow=scroller.scrollTop>0;ctrl.bottomOverflow=scroller.scrollHeight-(scroller.scrollTop+scroller.getBoundingClientRect().height)>0};var updateFooterState=function updateFooterState(ctrl){var footerEl=ctrl.footerEl;if(footerEl){var style=window.getComputedStyle(footerEl);var height=footerEl.getBoundingClientRect().height;var minHeight=parseInt(style.minHeight,10);if(height>minHeight){footerEl.classList.add("high")}else{footerEl.classList.remove("high")}}};var createViewContent=function createViewContent(ctrl,opts){var style={};if(ctrl.dialogEl&&!alignSelfSupported){var styles=window.getComputedStyle(ctrl.dialogEl);var partsHeights=(ctrl.headerHeight||0)+(ctrl.footerHeight||0);var dialogPadding=parseFloat(styles.paddingTop)+parseFloat(styles.paddingBottom);style={"max-height":"calc(100vh - "+dialogPadding+"px - "+partsHeights+"px)"}}var bodyOpts=opts.body||opts.menu;return(0,_mithril2["default"])("div",{"class":"dialog-body self-stretch",style:style,config:function config(el,inited){if(inited){return}ctrl.scrollEl=el},onscroll:function onscroll(){ctrl.isScrolling(true);updateScrollState(ctrl);clearTimeout(ctrl.scrollWatchId);ctrl.scrollWatchId=setTimeout(function(){ctrl.isScrolling(false)},SCROLL_WATCH_TIMER)}},bodyOpts)};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var bodyOpts=opts.body||opts.menu;var updateContentOnScroll=opts.updateContentOnScroll||false;var ignoreContent=!updateContentOnScroll&&ctrl.isScrolling();var tag=opts.tag||"form";var props=Object.assign({},{"class":["dialog layout center-center",opts.fullscreen?"fullscreen":null,opts.backdrop?"hasBackdrop":null,ctrl.topOverflow?"topOverflow":null,ctrl.bottomOverflow?"bottomOverflow":null,opts["class"]].join(" "),id:opts.id||"",config:function config(el,inited,context,vdom){if(inited){return}if(opts.config){opts.config(el,inited,context,vdom)}ctrl.dialogEl=el;ctrl.parentEl=el.parentElement;var onResize=function onResize(){updateScrollState(ctrl);updateFooterState(ctrl);_mithril2["default"].redraw()};_polythenePolythenePolythene2["default"].addListener("resize",onResize);context.onunload=function(){_polythenePolythenePolythene2["default"].removeListener("resize",onResize)};show(ctrl,opts).then(function(){updateScrollState(ctrl);updateFooterState(ctrl);if(ctrl.topOverflow||ctrl.bottomOverflow){setTimeout(function(){return _mithril2["default"].redraw()},0)}})},onclick:function onclick(e){e.stopPropagation();if(e.target!==ctrl.dialogEl){return}if(opts.modal){return}if(!ctrl.isTransitioning){hide(ctrl,opts)}}},opts.formOptions?opts.formOptions:null);var body=bodyOpts?ignoreContent?{subtree:"retain"}:createViewContent(ctrl,opts):null;var content=(0,_mithril2["default"])("div",{"class":["dialog-content","layout","vertical",opts.menu?"menu-content":null].join(" ")},[opts.fullscreen?null:_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:ctrl.z,animated:true}),opts.fullscreen?null:opts.title?(0,_mithril2["default"])(".dialog-header",{config:function config(el){ctrl.headerHeight=el.scrollHeight}},[(0,_mithril2["default"])(".title",opts.title)]):null,body,opts.fullscreen?null:opts.footer?(0,_mithril2["default"])(".dialog-footer",{config:function config(el,inited){ctrl.footerHeight=el.scrollHeight;if(inited){return}ctrl.footerEl=el}},[(0,_mithril2["default"])(".flex"),(0,_mithril2["default"])(".actions.layout.horizontal.end-justified.wrap",opts.footer)]):null]);return(0,_mithril2["default"])(tag,props,_polythenePolythenePolythene2["default"].insertContent(content,opts))};var component={controller:function controller(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var z=opts.z!==undefined?opts.z:3;return{z:z,dialogEl:null,parentEl:null,scrollEl:null,footerEl:null,topOverflow:false,bottomOverflow:false,scrollWatchId:0,isScrolling:_mithril2["default"].prop(false),isTransitioning:false,headerHeight:0,footerHeight:0}},view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];if(opts.shouldHide&&opts.shouldHide.call()){if(!ctrl.isTransitioning){hide(ctrl,opts)}}if(ctrl.isTransitioning){return{subtree:"retain"}}return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];