// import Notiflix from 'notiflix';

// const delay1 = document.querySelector("input[name='delay']");
// const step1 = document.querySelector("input[name='step']")
// const amount1 = document.querySelector("input[name='amount']")


// const delay = parseInt(delay1.value);
// const step = parseInt(step1.value);
// const amount = parseInt(amount1.value);



// document.querySelector('.form').addEventListener('submit', Event);



// function createPromise(position, delay) {
 
//   const promis = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() < 0.5;
//       if (shouldResolve) {
//         resolve({ position, delay })
//       } else {
//         reject({ position, delay })
//       }
//     }, delay + step)
//   });
//   return promis;
// }

// function Event(e) {
//   e.preventDefault();
 
// for (let i = 0; i < amount; i++) {
//   createPromise(i, delay).then((result) => {
//     Notiflix.Notify.warning(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
//     })
//     .catch((error) => {
//       Notiflix.Notify.warning(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
//     });
// }
// };

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const shouldResolve = Math.random() < 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

function Event(e) {
  e.preventDefault();
  const delay = parseInt(document.querySelector("input[name='delay']").value);
  const step = parseInt(document.querySelector("input[name='step']").value);
  const amount = parseInt(document.querySelector("input[name='amount']").value);
  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + step * i)
      .then((result) => {
        console.log(`Promise ${result.position} resolved with delay ${result.delay}`);
      })
      .catch((error) => {
        console.log(`Promise ${error.position} rejected with delay ${error.delay}`);
      });
  }
}

form.addEventListener('submit', Event);
