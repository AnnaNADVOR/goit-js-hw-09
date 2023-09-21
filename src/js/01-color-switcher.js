const refs =  { 
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBackground() {
    const bodyBackground = getRandomHexColor();
    refs.body.style.background = bodyBackground;
}

refs.stopBtn.disabled = true;

const interval = {
    intervalId: null,
 
    onStartBtnClick() {
     
        if (!refs.startBtn.disabled) {
            refs.startBtn.disabled = true;
            refs.stopBtn.disabled = false;
        }

        changeBackground();
        
        this.intervalId = setInterval(changeBackground, 1000);
    },

    onStopBtnClick() {
          if (!refs.stopBtn.disabled) {
            refs.startBtn.disabled = false;
            refs.stopBtn.disabled = true;
        }
        clearInterval(this.intervalId);
    },
}

refs.startBtn.addEventListener('click', interval.onStartBtnClick.bind(interval));
refs.stopBtn.addEventListener('click', interval.onStopBtnClick.bind(interval));


// let interval = null;


// refs.startBtn.addEventListener('click', () => {
//       if (!refs.startBtn.disabled) {
//         refs.startBtn.disabled = true;
//         refs.stopBtn.disabled = false;
//     }
       
//     interval = setInterval(() => {
//         const bodyBackground = getRandomHexColor();
//         refs.body.style.background = bodyBackground;
//     }, 1000);

    
// });

// refs.stopBtn.addEventListener('click', () => {
//     if (!refs.stopBtn.disabled) {
//         refs.startBtn.disabled = false;
//         refs.stopBtn.disabled = true;
//     }
//     clearInterval(interval);     
// }); 

