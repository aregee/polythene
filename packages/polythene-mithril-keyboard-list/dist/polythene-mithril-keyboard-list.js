!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-keyboard-list"),require("polythene-mithril-list"),require("polythene-mithril-list-tile")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-keyboard-list","polythene-mithril-list","polythene-mithril-list-tile"],t):t(e.polythene={},e["polythene-mithril-base"],e["polythene-core-keyboard-list"],e["polythene-mithril-list"],e["polythene-mithril-list-tile"])}(this,function(e,t,i,r,o){"use strict";var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n=t.StateComponent(l({},i.coreKeyboardList,{createProps:function(e,t){return i.coreKeyboardList.createProps(e,l(t,{List:r.List,ListTile:o.ListTile}))},createContent:function(e,t){return i.coreKeyboardList.createContent(e,l(t,{List:r.List,ListTile:o.ListTile}))}}));n.displayName="KeyboardList",e.KeyboardList=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-keyboard-list.js.map
