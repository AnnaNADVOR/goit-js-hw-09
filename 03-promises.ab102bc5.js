var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const l=document.querySelector(".form");function u(e,o){const n=Math.random()>.3,t={position:e,delay:o};return new Promise(((e,i)=>{setTimeout((()=>{n?e(t):i(t)}),o)}))}l.addEventListener("submit",(function(e){e.preventDefault();const o=Number(l.amount.value);let n=Number(l.delay.value);const t=Number(l.step.value);for(i=1;i<=o;i+=1){u(i,n).then((({position:e,delay:o})=>{r.Notify.success(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>r.Notify.failure(`Rejected promise ${e} in ${o}ms`))),n+=t}}));
//# sourceMappingURL=03-promises.ab102bc5.js.map
