!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.downloadByUrl=t():e.downloadByUrl=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=navigator.userAgent.toLowerCase(),r=o.indexOf("chrome")>-1,i=o.indexOf("safari")>-1,u=o.indexOf("firefox")>-1,d=!!window.ActiveXObject||"ActiveXObject"in window;t.default=function(e){if(/(iP)/g.test(navigator.userAgent))return!1;if(r||i||u){var t=document.createElement("a");if(t.href=e,void 0!==t.download&&(t.download=e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){var n=document.createEvent("MouseEvents");return n.initEvent("click",!0,!0),t.dispatchEvent(n),!0}}if(d){var o=document.createElement("iframe");return o.src=e,o.id="saveFileFrame",o.style.display="none",o.onload=function(){document.frames.saveFileFrame.document.execCommand("saveAs"),o.removeNode(!0)},document.body.appendChild(o),!0}return-1===e.indexOf("?")&&(e+="?download"),window.open(e,"_self"),!0}}]).default});