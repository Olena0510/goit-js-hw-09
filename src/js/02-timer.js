import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

console.log(flatpickr)

const refs = {
    text: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),

}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      refs.startBtn.setAttribute('disabled', true);

      if (selectedDates[0] < Date.now()) {
          Notiflix.Notify.failure("Please choose a date in the future")
          return
      }
      refs.startBtn.removeAttribute('disabled');
      Notiflix.Notify.success("Let's start");

  },
};

flatpickr(refs.text, options);



refs.startBtn.setAttribute('disabled', true);

refs.startBtn.addEventListener('click', onStart);
const timer = flatpickr(refs.text, options);

intervalId = null;

function clockFase({days, hours, minutes, seconds}) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
};

function onStart() {
    const timeStart = timer.selectedDates[0];

    intervalId = setInterval(() => {

        const timeCurrent = Date.now();
        const timeDelta = timeStart - timeCurrent;

        if (timeDelta > 0) {
            const componentTime = convertMs(timeDelta);
            clockFase(componentTime);
        } else {
            const componentTime = convertMs(0);
            clockFase(componentTime);
            clearInterval(intervalId);

        }

    }, 1000
    )
}




function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}




