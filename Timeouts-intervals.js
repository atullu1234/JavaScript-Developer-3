const timeoutID = document.getElementById("timeout");
const clearTimeoutID = document.getElementById("clear-timeout");

const intervalID = document.getElementById("interval");
const clearIntervalID = document.getElementById("clear-interval");

/* Timeouts */
timeoutID.addEventListener("click", () => {
  setTimeout(bye, 3000);

  console.log("hello");

  function bye() {
    console.log("goodbye");
  }
});

/* Clear Timeouts */
let stopT = setTimeout(bye, 3000);
clearTimeout(stopT);

console.log("hello");

function bye() {
  console.log("goodbye");
}

/* Intervals */
intervalID.addEventListener("click", () => {
  let count = 0;
  setInterval(counter, 1000);

  function counter() {
    console.log(++count);
  }
});

/* Clear Intervals */
clearIntervalID.addEventListener("click", () => {
  let count = 0;
  setInterval(counter, 1000);

  function counter() {
    console.log(++count);
  }
});
