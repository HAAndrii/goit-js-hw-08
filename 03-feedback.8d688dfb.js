!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r="feedback-form-state",o=function(){try{var e=JSON.parse(localStorage.getItem(r));return e||(e={email:"",message:""}),e}catch(e){return}},i=document.querySelector(".feedback-form"),u=i.querySelector("input"),a=i.querySelector("textarea");var f=document.querySelector(".feedback-form"),l=document.querySelector("button"),c={},d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var v,s="Expected a function",m=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,j="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,O=j||S||Function("return this")(),T=Object.prototype.toString,h=Math.max,w=Math.min,N=function(){return O.Date.now()};function x(e,t,n){var r,o,i,u,a,f,l=0,c=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(s);function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function y(e){return l=e,a=setTimeout(p,t),c?m(e):u}function b(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=i}function p(){var e=N();if(b(e))return g(e);a=setTimeout(p,function(e){var n=t-(e-f);return d?w(n,i-(e-l)):n}(e))}function g(e){return a=void 0,v&&r?m(e):(r=o=void 0,u)}function j(){var e=N(),n=b(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return y(f);if(d)return a=setTimeout(p,t),m(f)}return void 0===a&&(a=setTimeout(p,t)),u}return t=_(t)||0,E(n)&&(c=!!n.leading,i=(d="maxWait"in n)?h(_(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=o=a=void 0},j.flush=function(){return void 0===a?u:g(N())},j}function E(t){var n=void 0===t?"undefined":e(d)(t);return!!t&&("object"==n||"function"==n)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==T.call(t)}(t))return NaN;if(E(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=E(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var r=b.test(t);return r||p.test(t)?g(t.slice(2),r?2:8):y.test(t)?NaN:+t}c=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(s);return E(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),x(e,t,{leading:r,maxWait:t,trailing:o})},v=o(),u.value=v.email,a.value=v.message,f.addEventListener("input",c((function(t){var o,i;"INPUT"!==t.target.nodeName&&"TEXTAREA"!==t.target.nodeName||(o={},e(n)(o,u.name,u.value),e(n)(o,a.name,a.value),i=o,localStorage.setItem(r,JSON.stringify(i)))}),500)),l.addEventListener("click",(function(e){e.preventDefault(),(u.value||a.value)&&(i.reset(),console.log(o()),localStorage.removeItem(r))}))}();
//# sourceMappingURL=03-feedback.8d688dfb.js.map