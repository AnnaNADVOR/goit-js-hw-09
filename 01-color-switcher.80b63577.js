!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function n(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.body.style.background=n}t.stopBtn.disabled=!0;var a={intervalId:null,onStartBtnClick:function(){t.startBtn.disabled||(t.startBtn.disabled=!0,t.stopBtn.disabled=!1),n(),this.intervalId=setInterval(n,1e3)},onStopBtnClick:function(){t.stopBtn.disabled||(t.startBtn.disabled=!1,t.stopBtn.disabled=!0),clearInterval(this.intervalId)}};t.startBtn.addEventListener("click",a.onStartBtnClick.bind(a)),t.stopBtn.addEventListener("click",a.onStopBtnClick.bind(a))}();
//# sourceMappingURL=01-color-switcher.80b63577.js.map