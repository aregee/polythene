"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneListTileListTile=require("polythene/list-tile/list-tile");var _polytheneListTileListTile2=_interopRequireDefault(_polytheneListTileListTile);require("polythene-theme/list/list");var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var tag=opts.tag||"div";var listModeClass=opts.mode?opts.mode:null;var props={"class":["list",listModeClass,opts.hoverable?"hoverable":null,opts.selectable?"selectable":null,opts.header?"has-subheader":null,opts["class"]].join(" "),id:opts.id||"",config:opts.config};var headerOpts=undefined;if(opts.header){headerOpts=Object.assign({},opts.header);headerOpts["class"]=["subheader",headerOpts["class"]||null].join(" ")}var content=[headerOpts?_mithril2["default"].component(_polytheneListTileListTile2["default"],headerOpts):null,opts.tiles?opts.tiles:null];return(0,_mithril2["default"])(tag,props,_polythenePolythenePolythene2["default"].insertContent(content,opts))};var component={view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];