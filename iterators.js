// forEach
let numbers = [1, 2, 3];

numbers.forEach(function (item, index) {
  console.log(item, index);
});

let cats = ["cheetah", "lion", "tiger"];

cats.forEach(function (item, index) {
  console.log(item, index);
});

//map
let numbers2 = [1, 2, 3];
let doubled = numbers2.map(function (item) {
  return item * 2;
});
console.log(doubled);
