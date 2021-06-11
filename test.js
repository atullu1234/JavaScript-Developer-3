let stopT = setTimeout(bye, 3000);
clearTimeout(stopT);

console.log("hello");

function bye() {
  console.log("goodbye");
}
