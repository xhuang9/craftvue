(function(e){function t(t){for(var a,r,l=t[0],i=t[1],c=t[2],u=0,f=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="http://localhost:8080/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1180:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container lg:w-1/2 md:w-2/3 sm:w-5/6 w-full"},[n("div",{staticClass:"modal-header"},[e._v("\n                    Registration Form\n                ")]),n("div",{staticClass:"modal-body"},[n("form",{staticClass:"w-full max-w-sm",attrs:{id:"registration-form"}},[e._t("default"),n("input",{attrs:{type:"hidden",name:"action",value:"users/save-user"}}),n("div",{staticClass:"md:flex md:items-center mb-6"},[n("label",{class:e.formClasses.label,attrs:{for:"first-name"}},[e._v("\n                        Full Name\n                      ")]),n("div",{staticClass:"md:w-2/3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],class:e.formClasses.textInput,attrs:{id:"first-name",type:"text",name:"firstName"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})])])],2)]),n("div",{staticClass:"modal-footer h-5"},[n("button",{staticClass:"btn btn-secondary",on:{click:function(t){return e.submitForm()}}},[e._v("Submit")]),n("button",{staticClass:"btn btn-gray",on:{click:function(t){return e.$emit("close")}}},[e._v("OK")])])])])])])},o=[],s=(n("7f7f"),n("a026")),r={name:"registration-form",data:function(){return{firstName:"",formClasses:{textInput:"bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",label:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"}}},methods:{submitForm:function(){var e=document.querySelector("#registration-form"),t=this.serialize(e);s["default"].axios.post(siteUrl,t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},serialize:function(e){for(var t=[],n=0;n<e.elements.length;n++){var a=e.elements[n];if(a.name&&!a.disabled&&"file"!==a.type&&"reset"!==a.type&&"submit"!==a.type&&"button"!==a.type)if("select-multiple"===a.type)for(var o=0;o<a.options.length;o++)a.options[o].selected&&t.push(encodeURIComponent(a.name)+"="+encodeURIComponent(a.options[o].value));else("checkbox"!==a.type&&"radio"!==a.type||a.checked)&&t.push(encodeURIComponent(a.name)+"="+encodeURIComponent(a.value))}return t.join("&")}},validate:{firstName:{required:!0}}},l=r,i=n("2877"),c=Object(i["a"])(l,a,o,!1,null,"4b2f7858",null);t["default"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),o=(n("28a5"),n("a481"),n("ac6a"),n("8103")),s=n.n(o),r=n("bba4"),l=n.n(r),i=n("6809");i.keys().forEach((function(e){var t=i(e),n=s()(l()(e.split("/").pop().replace(/\.\w+$/,"")));a["default"].component(n,t.default||t)}));n("8594");var c=n("5f5b"),d=n("b1e0"),u=n("bc3a"),f=n.n(u),p=n("a7fe"),m=n.n(p),h=n("1dce"),v=n.n(h);a["default"].config.productionTip=!1,new a["default"]({el:"#app",delimiters:["${","}"],data:{showModal:!1},methods:{},mounted:function(){console.log("mounted")},updated:function(){console.log("updated")}}),a["default"].use(v.a),a["default"].use(m.a,f.a),a["default"].use(c["a"]),a["default"].use(d["a"])},6809:function(e,t,n){var a={"./HelloWorld.vue":"fdab","./Modal.vue":"714b","./Slider.vue":"89fb","./user/RegistrationForm.vue":"1180"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="6809"},"714b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n            default header\n          ")])],2),n("div",{staticClass:"modal-body"},[e._t("body",[e._v("\n            default body\n          ")])],2),n("div",{staticClass:"modal-footer h-5"},[e._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(t){return e.$emit("close")}}},[e._v("\n              OK\n            ")])])],2)])])])])},o=[],s={name:"modal.vue"},r=s,l=n("2877"),i=Object(l["a"])(r,a,o,!1,null,"04da4514",null);t["default"]=i.exports},8594:function(e,t,n){},"89fb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slick",{ref:"slick",attrs:{options:e.slickOptions},on:{afterChange:e.handleAfterChange,beforeChange:e.handleBeforeChange,breakpoint:e.handleBreakpoint,destroy:e.handleDestroy,edge:e.handleEdge,init:e.handleInit,reInit:e.handleReInit,setPosition:e.handleSetPosition,swipe:e.handleSwipe,lazyLoaded:e.handleLazyLoaded,lazyLoadError:e.handleLazeLoadError}},[e._t("default")],2)},o=[],s=n("7ecd"),r={name:"Slider",components:{Slick:s["a"]},data:function(){return{slickOptions:{slidesToShow:1,infinite:!1,adaptiveHeight:!0,autoplay:!0,speed:500,arrows:!1}}},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){var e=this;this.$nextTick((function(){e.$refs.slick.reSlick()}))},handleAfterChange:function(e,t,n){console.log("handleAfterChange",e,t,n)},handleBeforeChange:function(e,t,n,a){console.log("handleBeforeChange",e,t,n,a)},handleBreakpoint:function(e,t,n){console.log("handleBreakpoint",e,t,n)},handleDestroy:function(e,t){console.log("handleDestroy",e,t)},handleEdge:function(e,t,n){console.log("handleEdge",e,t,n)},handleInit:function(e,t){console.log("handleInit",e,t)},handleReInit:function(e,t){console.log("handleReInit",e,t)},handleSetPosition:function(e,t){console.log("handleSetPosition",e,t)},handleSwipe:function(e,t,n){console.log("handleSwipe",e,t,n)},handleLazyLoaded:function(e,t,n,a){console.log("handleLazyLoaded",e,t,n,a)},handleLazeLoadError:function(e,t,n,a){console.log("handleLazeLoadError",e,t,n,a)}}},l=r,i=(n("b511"),n("2877")),c=Object(i["a"])(l,a,o,!1,null,null,null);t["default"]=c.exports},"92ae":function(e,t,n){},a62f:function(e,t,n){},b511:function(e,t,n){"use strict";var a=n("92ae"),o=n.n(a);o.a},dee9:function(e,t,n){"use strict";var a=n("a62f"),o=n.n(a);o.a},fdab:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"font-family-base text-3xl mb-4"},[e._v(e._s(e.msg))]),e._m(0),n("p",{staticClass:"mb-3"},[e._v("\n        If this text is white, you've successfully installed Tailwind!\n    ")]),n("p",{staticClass:"mb-3"},[e._v("Passing in some data from twig:")]),n("div",{staticClass:"mt-3 mb-10 p-4 inline-block rounded-lg leading-loose bg-black text-left"},[n("code",{staticClass:"text-gray-500"},[n("span",{staticClass:"text-white"},[e._v("Craft Version: ")]),n("span",{staticClass:"text-green-400"},[e._v(e._s(e.info.craftVersion))]),e._v(" (passed in\n            as prop)"),n("br"),n("span",{staticClass:"text-white"},[e._v("Environment: ")]),n("span",{staticClass:"text-green-400"},[e._v(e._s(e.info.environment))]),e._v(" (passed in as\n            prop)"),n("br"),n("span",{staticClass:"text-white"},[e._v("DB Name: ")]),n("span",{staticClass:"text-green-400"},[e._t("default")],2),e._v(" (passed in through\n            slot)\n        ")])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mb-3"},[e._v("\n        You're viewing the "),n("code",[e._v("<HelloWorld>")]),e._v(" component!\n    ")])}],s={name:"HelloWorld",props:["info"],data:function(){return{msg:"Hello World"}}},r=s,l=(n("dee9"),n("2877")),i=Object(l["a"])(r,a,o,!1,null,"3bf0ead1",null);t["default"]=i.exports}});
//# sourceMappingURL=app-legacy.c63956d5.js.map