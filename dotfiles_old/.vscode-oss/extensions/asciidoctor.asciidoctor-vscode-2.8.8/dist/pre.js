!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSettings=t.getData=void 0;let o=void 0;function s(e){const t=document.getElementById("vscode-asciidoc-preview-data");if(t){const n=t.getAttribute(e);if(n)return JSON.parse(n)}throw new Error("Could not load data for "+e)}t.getData=s,t.getSettings=function(){if(o)return o;if(o=s("data-settings"),o)return o;throw new Error("Could not load settings")}},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9),s=n(11);window.cspAlerter=new o.CspAlerter,window.styleLoadingMonitor=new s.StyleLoadingMonitor},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CspAlerter=void 0;const o=n(0),s=n(10);t.CspAlerter=class{constructor(){this.didShow=!1,this.didHaveCspWarning=!1,document.addEventListener("securitypolicyviolation",()=>{this.onCspWarning()}),window.addEventListener("message",e=>{e&&e.data&&"vscode-did-block-svg"===e.data.name&&this.onCspWarning()})}setPoster(e){this.messaging=e,this.didHaveCspWarning&&this.showCspWarning()}onCspWarning(){this.didHaveCspWarning=!0,this.showCspWarning()}showCspWarning(){const e=s.getStrings(),t=o.getSettings();if(this.didShow||t.disableSecurityWarnings||!this.messaging)return;this.didShow=!0;const n=document.createElement("a");n.innerText=e.cspAlertMessageText,n.setAttribute("id","code-csp-warning"),n.setAttribute("title",e.cspAlertMessageTitle),n.setAttribute("role","button"),n.setAttribute("aria-label",e.cspAlertMessageLabel),n.onclick=()=>{this.messaging.postMessage("showPreviewSecuritySelector",{source:t.source})},document.body.appendChild(n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStrings=void 0,t.getStrings=function(){const e=document.getElementById("vscode-asciidoc-preview-data");if(e){const t=e.getAttribute("data-strings");if(t)return JSON.parse(t)}throw new Error("Could not load strings")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyleLoadingMonitor=void 0;t.StyleLoadingMonitor=class{constructor(){this.unloadedStyles=[],this.finishedLoading=!1;const e=e=>{const t=e.target.dataset.source;this.unloadedStyles.push(t)};window.addEventListener("DOMContentLoaded",()=>{for(const t of document.getElementsByClassName("code-user-style"))t.dataset.source&&(t.onerror=e)}),window.addEventListener("load",()=>{this.unloadedStyles.length&&(this.finishedLoading=!0,this.poster&&this.poster.postMessage("previewStyleLoadError",{unloadedStyles:this.unloadedStyles}))})}setPoster(e){this.poster=e,this.finishedLoading&&e.postMessage("previewStyleLoadError",{unloadedStyles:this.unloadedStyles})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLXByZXZpZXcvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLXByZXZpZXcvcHJlLnRzIiwid2VicGFjazovLy8uL3NyYy1wcmV2aWV3L2NzcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMtcHJldmlldy9zdHJpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy1wcmV2aWV3L2xvYWRpbmcudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjYWNoZWRTZXR0aW5ncyIsInVuZGVmaW5lZCIsImdldERhdGEiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRhdGEiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJFcnJvciIsIndpbmRvdyIsImNzcEFsZXJ0ZXIiLCJDc3BBbGVydGVyIiwic3R5bGVMb2FkaW5nTW9uaXRvciIsIlN0eWxlTG9hZGluZ01vbml0b3IiLCJkaWRTaG93IiwiZGlkSGF2ZUNzcFdhcm5pbmciLCJhZGRFdmVudExpc3RlbmVyIiwidGhpcyIsIm9uQ3NwV2FybmluZyIsImV2ZW50IiwicG9zdGVyIiwibWVzc2FnaW5nIiwic2hvd0NzcFdhcm5pbmciLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInNldHRpbmdzIiwiZ2V0U2V0dGluZ3MiLCJkaXNhYmxlU2VjdXJpdHlXYXJuaW5ncyIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJjc3BBbGVydE1lc3NhZ2VUZXh0Iiwic2V0QXR0cmlidXRlIiwiY3NwQWxlcnRNZXNzYWdlVGl0bGUiLCJjc3BBbGVydE1lc3NhZ2VMYWJlbCIsIm9uY2xpY2siLCJwb3N0TWVzc2FnZSIsInNvdXJjZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0b3JlIiwidW5sb2FkZWRTdHlsZXMiLCJmaW5pc2hlZExvYWRpbmciLCJvblN0eWxlTG9hZEVycm9yIiwidGFyZ2V0IiwiZGF0YXNldCIsInB1c2giLCJsaW5rIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uZXJyb3IiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWVi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RixPQUFPRSxLQUFLQyxNQUFNSCxHQUd0QixNQUFNLElBQUlJLE1BQU0sNEIsMkdDUGxCLDRCQU1DLGNBTFEsS0FBQWlDLGVBQTJCLEdBQzNCLEtBQUFDLGlCQUEyQixFQUtqQyxNQUFNQyxFQUFvQnhCLElBQ3hCLE1BQU1rQixFQUFTbEIsRUFBTXlCLE9BQU9DLFFBQVFSLE9BQ3BDcEIsS0FBS3dCLGVBQWVLLEtBQUtULElBRzNCNUIsT0FBT08saUJBQWlCLG1CQUFvQixLQUUxQyxJQUFLLE1BQU0rQixLQUFRN0MsU0FBUzhDLHVCQUF1QixtQkFDN0NELEVBQUtGLFFBQVFSLFNBQ2ZVLEVBQUtFLFFBQVVOLEtBS3JCbEMsT0FBT08saUJBQWlCLE9BQVEsS0FDekJDLEtBQUt3QixlQUFlUyxTQUd6QmpDLEtBQUt5QixpQkFBa0IsRUFDbkJ6QixLQUFLRyxRQUNQSCxLQUFLRyxPQUFPZ0IsWUFBWSx3QkFBeUIsQ0FBRUssZUFBZ0J4QixLQUFLd0Isb0JBS3ZFLFVBQVVyQixHQUNmSCxLQUFLRyxPQUFTQSxFQUNWSCxLQUFLeUIsaUJBQ1B0QixFQUFPZ0IsWUFBWSx3QkFBeUIsQ0FBRUssZUFBZ0J4QixLQUFLd0IiLCJmaWxlIjoicHJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZXZpZXdTZXR0aW5ncyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHRsaW5lOiBudW1iZXI7XG5cdGxpbmVDb3VudDogbnVtYmVyO1xuXHRzY3JvbGxQcmV2aWV3V2l0aEVkaXRvcj86IGJvb2xlYW47XG5cdHNjcm9sbEVkaXRvcldpdGhQcmV2aWV3OiBib29sZWFuO1xuXHRkaXNhYmxlU2VjdXJpdHlXYXJuaW5nczogYm9vbGVhbjtcblx0ZG91YmxlQ2xpY2tUb1N3aXRjaFRvRWRpdG9yOiBib29sZWFuO1xufVxuXG5sZXQgY2FjaGVkU2V0dGluZ3M6IFByZXZpZXdTZXR0aW5ncyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoa2V5OiBzdHJpbmcpOiBQcmV2aWV3U2V0dGluZ3Mge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZzY29kZS1hc2NpaWRvYy1wcmV2aWV3LWRhdGEnKTtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgbG9hZCBkYXRhIGZvciAke2tleX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmdzKCk6IFByZXZpZXdTZXR0aW5ncyB7XG4gIGlmIChjYWNoZWRTZXR0aW5ncykge1xuICAgIHJldHVybiBjYWNoZWRTZXR0aW5ncztcbiAgfVxuXG4gIGNhY2hlZFNldHRpbmdzID0gZ2V0RGF0YSgnZGF0YS1zZXR0aW5ncycpO1xuICBpZiAoY2FjaGVkU2V0dGluZ3MpIHtcbiAgICByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHNldHRpbmdzJyk7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmltcG9ydCB7IENzcEFsZXJ0ZXIgfSBmcm9tICcuL2NzcCc7XG5pbXBvcnQgeyBTdHlsZUxvYWRpbmdNb25pdG9yIH0gZnJvbSAnLi9sb2FkaW5nJztcblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgV2luZG93IHtcblx0XHRjc3BBbGVydGVyOiBDc3BBbGVydGVyO1xuXHRcdHN0eWxlTG9hZGluZ01vbml0b3I6IFN0eWxlTG9hZGluZ01vbml0b3I7XG5cdH1cbn1cblxud2luZG93LmNzcEFsZXJ0ZXIgPSBuZXcgQ3NwQWxlcnRlcigpO1xud2luZG93LnN0eWxlTG9hZGluZ01vbml0b3IgPSBuZXcgU3R5bGVMb2FkaW5nTW9uaXRvcigpOyIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgTWVzc2FnZVBvc3RlciB9IGZyb20gJy4vbWVzc2FnaW5nJztcbmltcG9ydCB7IGdldFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBnZXRTdHJpbmdzIH0gZnJvbSAnLi9zdHJpbmdzJztcblxuLyoqXG4gKiBTaG93cyBhbiBhbGVydCB3aGVuIHRoZXJlIGlzIGEgY29udGVudCBzZWN1cml0eSBwb2xpY3kgdmlvbGF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ3NwQWxlcnRlciB7XG5cdHByaXZhdGUgZGlkU2hvdyA9IGZhbHNlO1xuXHRwcml2YXRlIGRpZEhhdmVDc3BXYXJuaW5nID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBtZXNzYWdpbmc/OiBNZXNzYWdlUG9zdGVyO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHQgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlY3VyaXR5cG9saWN5dmlvbGF0aW9uJywgKCkgPT4ge1xuXHQgICAgdGhpcy5vbkNzcFdhcm5pbmcoKTtcblx0ICB9KTtcblxuXHQgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG5cdCAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLm5hbWUgPT09ICd2c2NvZGUtZGlkLWJsb2NrLXN2ZycpIHtcblx0ICAgICAgdGhpcy5vbkNzcFdhcm5pbmcoKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3N0ZXIocG9zdGVyOiBNZXNzYWdlUG9zdGVyKSB7XG5cdCAgdGhpcy5tZXNzYWdpbmcgPSBwb3N0ZXI7XG5cdCAgaWYgKHRoaXMuZGlkSGF2ZUNzcFdhcm5pbmcpIHtcblx0ICAgIHRoaXMuc2hvd0NzcFdhcm5pbmcoKTtcblx0ICB9XG5cdH1cblxuXHRwcml2YXRlIG9uQ3NwV2FybmluZygpIHtcblx0ICB0aGlzLmRpZEhhdmVDc3BXYXJuaW5nID0gdHJ1ZTtcblx0ICB0aGlzLnNob3dDc3BXYXJuaW5nKCk7XG5cdH1cblxuXHRwcml2YXRlIHNob3dDc3BXYXJuaW5nKCkge1xuXHQgIGNvbnN0IHN0cmluZ3MgPSBnZXRTdHJpbmdzKCk7XG5cdCAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXG5cdCAgaWYgKHRoaXMuZGlkU2hvdyB8fCBzZXR0aW5ncy5kaXNhYmxlU2VjdXJpdHlXYXJuaW5ncyB8fCAhdGhpcy5tZXNzYWdpbmcpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgdGhpcy5kaWRTaG93ID0gdHJ1ZTtcblxuXHQgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0ICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gc3RyaW5ncy5jc3BBbGVydE1lc3NhZ2VUZXh0O1xuXHQgIG5vdGlmaWNhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvZGUtY3NwLXdhcm5pbmcnKTtcblx0ICBub3RpZmljYXRpb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHN0cmluZ3MuY3NwQWxlcnRNZXNzYWdlVGl0bGUpO1xuXG5cdCAgbm90aWZpY2F0aW9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcblx0ICBub3RpZmljYXRpb24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc3RyaW5ncy5jc3BBbGVydE1lc3NhZ2VMYWJlbCk7XG5cdCAgbm90aWZpY2F0aW9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLm1lc3NhZ2luZyEucG9zdE1lc3NhZ2UoJ3Nob3dQcmV2aWV3U2VjdXJpdHlTZWxlY3RvcicsIHsgc291cmNlOiBzZXR0aW5ncy5zb3VyY2UgfSk7XG5cdCAgfTtcblx0ICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG5cdH1cbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmluZ3MoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gIGNvbnN0IHN0b3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZzY29kZS1hc2NpaWRvYy1wcmV2aWV3LWRhdGEnKTtcbiAgaWYgKHN0b3JlKSB7XG4gICAgY29uc3QgZGF0YSA9IHN0b3JlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdHJpbmdzJyk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHN0cmluZ3MnKTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IE1lc3NhZ2VQb3N0ZXIgfSBmcm9tICcuL21lc3NhZ2luZyc7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZUxvYWRpbmdNb25pdG9yIHtcblx0cHJpdmF0ZSB1bmxvYWRlZFN0eWxlczogc3RyaW5nW10gPSBbXTtcblx0cHJpdmF0ZSBmaW5pc2hlZExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHBvc3Rlcj86IE1lc3NhZ2VQb3N0ZXI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdCAgY29uc3Qgb25TdHlsZUxvYWRFcnJvciA9IChldmVudDogYW55KSA9PiB7XG5cdCAgICBjb25zdCBzb3VyY2UgPSBldmVudC50YXJnZXQuZGF0YXNldC5zb3VyY2U7XG5cdCAgICB0aGlzLnVubG9hZGVkU3R5bGVzLnB1c2goc291cmNlKTtcblx0ICB9O1xuXG5cdCAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdCAgICAvLyBAdHMtaWdub3JlIFRTMjQ4OFxuXHQgICAgZm9yIChjb25zdCBsaW5rIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvZGUtdXNlci1zdHlsZScpIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+KSB7XG5cdCAgICAgIGlmIChsaW5rLmRhdGFzZXQuc291cmNlKSB7XG5cdCAgICAgICAgbGluay5vbmVycm9yID0gb25TdHlsZUxvYWRFcnJvcjtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0pO1xuXG5cdCAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdCAgICBpZiAoIXRoaXMudW5sb2FkZWRTdHlsZXMubGVuZ3RoKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gdHJ1ZTtcblx0ICAgIGlmICh0aGlzLnBvc3Rlcikge1xuXHQgICAgICB0aGlzLnBvc3Rlci5wb3N0TWVzc2FnZSgncHJldmlld1N0eWxlTG9hZEVycm9yJywgeyB1bmxvYWRlZFN0eWxlczogdGhpcy51bmxvYWRlZFN0eWxlcyB9KTtcblx0ICAgIH1cblx0ICB9KTtcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3N0ZXIocG9zdGVyOiBNZXNzYWdlUG9zdGVyKTogdm9pZCB7XG5cdCAgdGhpcy5wb3N0ZXIgPSBwb3N0ZXI7XG5cdCAgaWYgKHRoaXMuZmluaXNoZWRMb2FkaW5nKSB7XG5cdCAgICBwb3N0ZXIucG9zdE1lc3NhZ2UoJ3ByZXZpZXdTdHlsZUxvYWRFcnJvcicsIHsgdW5sb2FkZWRTdHlsZXM6IHRoaXMudW5sb2FkZWRTdHlsZXMgfSk7XG5cdCAgfVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==