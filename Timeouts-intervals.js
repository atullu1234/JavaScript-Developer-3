/* Timeouts */
//let timeoutID = setTimeout(bye, 3000);

// console.log("hello");

/* Clearign timeout */
//clearTimeout(timeoutID);

/* function bye() {
  console.log("goodbye");
} */

/* Intervals */
let count = 0;
let intervalId = setInterval(counter, 1000);

function counter() {
  console.log(++count);
}
