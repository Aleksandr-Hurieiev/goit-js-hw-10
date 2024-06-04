// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function submitForm(evt) {
  evt.preventDefault();
  const onForm = {
    delay: form.elements.delay.value,
    state: form.elements.state.value,
  };
  const delay = onForm.delay;
  const state = onForm.state;
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(
          iziToast.show({
            title: '✅ Fulfilled',
            message: `promise in ${delay}ms`,
            color: 'green',
            position: 'topRight',
          })
        );
      }, delay);
    } else if (state === 'rejected') {
      setTimeout(() => {
        reject(
          iziToast.show({
            title: '❌ Rejected',
            message: `promise in ${delay}ms`,
            color: 'red',
            position: 'topRight',
          })
        );
      }, delay);
    }
  });
  form.reset();
  promise.then().catch();
}

form.addEventListener('submit', submitForm);
