import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm); 

 
function onSubmitForm(event) {
  event.preventDefault();
  
  const amount = Number(form.amount.value);
  let delay = Number(form.delay.value);
  const  step = Number(form.step.value);
 
  for (let i = 1; i <= amount; i += 1) {
    const position = i; 

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step; 
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseValue = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseValue);
      }
      else {
        reject(promiseValue);
      }
    }, delay)
  });
}
  
