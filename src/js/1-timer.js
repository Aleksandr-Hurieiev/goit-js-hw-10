// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
//=========================================================================================================================================
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
//=========================================================================================================================================

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.button.disabled = true;
refs.button.addEventListener('click', timerStart);

//=========================================================================================================================================
let userSelectedDate = null;
const fp = flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    enableSeconds: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
      refs.button.disabled = true;
      iziToast.show({
        title: 'Hey',
        message: 'Please choose a date in the future',
      });
    } else if (new Date() < selectedDates[0]) {
      refs.button.disabled = false;
      userSelectedDate = fp.selectedDates[0];
    }
  },
});
//=========================================================================================================================================
function timerStart() {
  refs.button.disabled = true;
  refs.input.disabled = true;
  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const timeDifference = convertMs(userSelectedDate - currentTime);
    const { days, hours, minutes, seconds } = timeDifference;
    if (
      days === '00' &&
      hours === '00' &&
      minutes === '00' &&
      seconds === '00'
    ) {
      clearInterval(timerId);
      iziToast.show({
        title: 'Hey',
        message: 'Time is over!',
      });
      refs.button.disabled = true;
      refs.input.disabled = false;
    }
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
  }, 1000);
}
//=========================================================================================================================================
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = ddLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = ddLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = ddLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = ddLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}


function ddLeadingZero(value) {
  return String(value).padStart(2, '0');
}