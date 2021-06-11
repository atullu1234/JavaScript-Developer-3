/* Timeouts */
//let timeoutID = setTimeout(bye, 3000);

// console.log("hello");

/* Clearign timeout */
//clearTimeout(timeoutID);

/* function bye() {
  console.log("goodbye");
} */

/* Intervals */
const intervalID = document.getElementById("interval");

intervalID.addEventListener("click", () => {
  let count = 0;
  setInterval(counter, 1000);

  function counter() {
    console.log(++count);
  }
});
