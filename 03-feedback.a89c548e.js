var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,f,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function w(e){return c=e,f=setTimeout(j,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=r}function j(){var e=m();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return g?d(n,r-(e-c)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function S(){var e=m(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return w(u);if(g)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},S.flush=function(){return void 0===f?a:O(m())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");window.addEventListener("DOMContentLoaded",(function(){localStorage&&function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;b.elements.email.value=e.email,b.elements.message.value=e.message}()})),b.addEventListener("input",t((function(){const e={email:b.elements.email.value,message:b.elements.message.value};try{const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}catch(e){console.log(e)}}),500)),b.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state");console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.a89c548e.js.map
