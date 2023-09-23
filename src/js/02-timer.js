import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    timer: document.querySelector('.timer')
}

refs.startBtn.disabled = true;

let selectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        const currentDate = Date.now();
        if (selectedDates[0] < currentDate) {
            Notify.failure('Please choose a date in the future!');  
            return;          
        } 
        refs.startBtn.disabled = false;
        selectedDate = selectedDates[0];

    },
  
};

flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {    

    refs.startBtn.disabled = true;
    refs.input.disabled = true;
    Notify.info('WARNING! To stop the timer early or start it again - reload the page.');
    
    let intervalId = null;

    const updateTimer = function () { 
        
         if (Date.now() >= selectedDate) {
             clearInterval(intervalId);  
             Notify.success('The time is up!');
             Notify.info('Reload the page to start the timer again.');
             return;
    }
        const startTimeMs = selectedDate - Date.now();
        const startTime = convertMs(startTimeMs);
        const {days, hours, minutes, seconds } = startTime;
        refs.days.textContent = `${addLeadingZero(days)}`;
        refs.hours.textContent = `${addLeadingZero(hours)}`;
        refs.minutes.textContent = `${addLeadingZero(minutes)}`;
        refs.seconds.textContent = `${addLeadingZero(seconds)}`;
    }

    updateTimer();

    intervalId = setInterval(updateTimer, 1000);

    
}
 




function addLeadingZero(value) {
    return String(value).padStart(2,'0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
