function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var i=o("eWCmQ");function u(e,r){const t=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{t?n({position:e,delay:r}):o({position:e,delay:r})}),r)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(r){r.preventDefault();let t=Number(r.currentTarget.delay.value);const n=Number(r.currentTarget.step.value),o=Number(r.currentTarget.amount.value);for(let r=1;r<=o;r+=1){if(!(r<=o))return;u(r,t).then((({position:r,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${r} in ${t}ms`)})).catch((({position:r,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${r} in ${t}ms`)})),t+=n}}));
//# sourceMappingURL=03-promises.a49ad3f6.js.map