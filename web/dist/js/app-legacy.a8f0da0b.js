(function(e){function n(n){for(var o,r,s=n[0],l=n[1],d=n[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(n);while(f.length)f.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(o=!1)}o&&(i.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},a={app:0},i=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="http://localhost:8080/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4427:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("a026"),a=(t("28a5"),t("a481"),t("ac6a"),t("8103")),i=t.n(a),r=t("bba4"),s=t.n(r),l=t("6809");l.keys().forEach((function(e){var n=l(e),t=i()(s()(e.split("/").pop().replace(/\.\w+$/,"")));o["default"].component(t,n.default||n)}));t("8594");var d=t("5f5b"),c=t("b1e0"),u=t("caf9");o["default"].use(d["a"]),o["default"].use(c["a"]),o["default"].use(u["a"],{preLoad:1.3,error:"assets/repoImg/error.jpg",loading:"assets/repoImg/loading.gif",attempt:1}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",delimiters:["${","}"],data:{showModal:!1},methods:{},mounted:function(){},updated:function(){}})},6809:function(e,n,t){var o={"./HelloWorld.vue":"fdab","./SideModal.vue":"a800","./Slider.vue":"89fb"};function a(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="6809"},8594:function(e,n,t){},"89fb":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("slick",{ref:"slick",attrs:{options:e.slickOptions},on:{afterChange:e.handleAfterChange,beforeChange:e.handleBeforeChange,breakpoint:e.handleBreakpoint,destroy:e.handleDestroy,edge:e.handleEdge,init:e.handleInit,reInit:e.handleReInit,setPosition:e.handleSetPosition,swipe:e.handleSwipe,lazyLoaded:e.handleLazyLoaded,lazyLoadError:e.handleLazeLoadError}},[e._t("default")],2)},a=[],i=t("7ecd"),r={name:"Slider",components:{Slick:i["a"]},data:function(){return{slickOptions:{slidesToShow:1,infinite:!1,adaptiveHeight:!0,autoplay:!0,speed:500,arrows:!1}}},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){var e=this;this.$nextTick((function(){e.$refs.slick.reSlick()}))},handleAfterChange:function(e,n,t){console.log("handleAfterChange",e,n,t)},handleBeforeChange:function(e,n,t,o){console.log("handleBeforeChange",e,n,t,o)},handleBreakpoint:function(e,n,t){console.log("handleBreakpoint",e,n,t)},handleDestroy:function(e,n){console.log("handleDestroy",e,n)},handleEdge:function(e,n,t){console.log("handleEdge",e,n,t)},handleInit:function(e,n){console.log("handleInit",e,n)},handleReInit:function(e,n){console.log("handleReInit",e,n)},handleSetPosition:function(e,n){console.log("handleSetPosition",e,n)},handleSwipe:function(e,n,t){console.log("handleSwipe",e,n,t)},handleLazyLoaded:function(e,n,t,o){console.log("handleLazyLoaded",e,n,t,o)},handleLazeLoadError:function(e,n,t,o){console.log("handleLazeLoadError",e,n,t,o)}}},s=r,l=(t("b511"),t("2877")),d=Object(l["a"])(s,o,a,!1,null,null,null);n["default"]=d.exports},"92ae":function(e,n,t){},a62f:function(e,n,t){},a800:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{class:e.modalClass,attrs:{id:"cube-manage-panel"}},[t("div",{attrs:{id:"edge"},on:{click:function(n){return e.toggle()}}},[e._t("edge")],2),t("div",{attrs:{id:"content"}},[e._t("content")],2)]),t("div",{class:e.overlayClass,attrs:{id:"side-modal-overlay"},on:{click:function(n){e.sideModalShow=!1}}})])},a=[],i={name:"SideModal",props:["showModal"],data:function(){return{sideModalShow:this.$props.showModal}},methods:{toggle:function(){this.sideModalShow=!this.sideModalShow},openModal:function(){this.sideModalShow=!0},closeModal:function(){this.sideModalShow=!1}},computed:{modalClass:function(){var e="";return!0===this.sideModalShow?e+"show":void 0===this.sideModalShow?e+"":e+"hide"},overlayClass:function(){var e="";return!0===this.sideModalShow?e+"darken":e+""}}},r=i,s=(t("e884"),t("2877")),l=Object(s["a"])(r,o,a,!1,null,"27804ddb",null);n["default"]=l.exports},b511:function(e,n,t){"use strict";var o=t("92ae"),a=t.n(o);a.a},dee9:function(e,n,t){"use strict";var o=t("a62f"),a=t.n(o);a.a},e884:function(e,n,t){"use strict";var o=t("4427"),a=t.n(o);a.a},fdab:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",{staticClass:"font-family-base text-3xl mb-4"},[e._v(e._s(e.msg))]),e._m(0),t("p",{staticClass:"mb-3"},[e._v("\n        If this text is white, you've successfully installed Tailwind!\n    ")]),t("p",{staticClass:"mb-3"},[e._v("Passing in some data from twig:")]),t("div",{staticClass:"mt-3 mb-10 p-4 inline-block rounded-lg leading-loose bg-black text-left"},[t("code",{staticClass:"text-gray-500"},[t("span",{staticClass:"text-white"},[e._v("Craft Version: ")]),t("span",{staticClass:"text-green-400"},[e._v(e._s(e.info.craftVersion))]),e._v(" (passed in\n            as prop)"),t("br"),t("span",{staticClass:"text-white"},[e._v("Environment: ")]),t("span",{staticClass:"text-green-400"},[e._v(e._s(e.info.environment))]),e._v(" (passed in as\n            prop)"),t("br"),t("span",{staticClass:"text-white"},[e._v("DB Name: ")]),t("span",{staticClass:"text-green-400"},[e._t("default")],2),e._v(" (passed in through\n            slot)\n        ")])])])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mb-3"},[e._v("\n        You're viewing the "),t("code",[e._v("<HelloWorld>")]),e._v(" component!\n    ")])}],i={name:"HelloWorld",props:["info"],data:function(){return{msg:"Hello World"}}},r=i,s=(t("dee9"),t("2877")),l=Object(s["a"])(r,o,a,!1,null,"3bf0ead1",null);n["default"]=l.exports}});
//# sourceMappingURL=app-legacy.a8f0da0b.js.map