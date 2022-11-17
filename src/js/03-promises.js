import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};


refs.form.addEventListener('submit', onForm)


function onForm(evt) {
  evt.preventDefault();

  let delayValue = Number(evt.currentTarget.delay.value);
  const stepValue = Number(evt.currentTarget.step.value);
  const amountValue = Number(evt.currentTarget.amount.value);

  for (let i = 1; i <= amountValue; i += 1){
    if (i <= amountValue) {
      createPromise(i, delayValue)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delayValue += stepValue;
    } else {
      return
    }
  
    }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


  


