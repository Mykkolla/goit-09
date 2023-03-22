
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
