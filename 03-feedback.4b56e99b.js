var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=()=>{const e={[r.name]:r.value,[o.name]:o.value};console.log(e),localStorage.setItem("feedback-form-state",JSON.stringify(e))},n=document.querySelector(".feedback-form"),r=n.querySelector("input"),o=n.querySelector("textarea");const i=document.querySelector(".feedback-form"),a=document.querySelector("button");var u={},f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,p=m||v||Function("return this")(),y=Object.prototype.toString,g=Math.max,b=Math.min,S=function(){return p.Date.now()};function T(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function v(e){return c=e,u=setTimeout(y,t),l?m(e):a}function p(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function y(){var e=S();if(p(e))return T(e);u=setTimeout(y,function(e){var n=t-(e-f);return s?b(n,i-(e-c)):n}(e))}function T(e){return u=void 0,d&&r?m(e):(r=o=void 0,a)}function w(){var e=S(),n=p(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return v(f);if(s)return u=setTimeout(y,t),m(f)}return void 0===u&&(u=setTimeout(y,t)),a}return t=j(t)||0,h(n)&&(l=!!n.leading,i=(s="maxWait"in n)?g(j(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:T(S())},w}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=l.test(e);return n||s.test(e)?d(e.slice(2),n?2:8):c.test(e)?NaN:+e}u=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),T(e,t,{leading:r,maxWait:t,trailing:o})},(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));r.value=e.email,o.value=e.message}catch(e){return}})(),i.addEventListener("input",u((function(e){"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName||t()}),500)),a.addEventListener("click",(e=>{e.preventDefault(),n.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.4b56e99b.js.map
