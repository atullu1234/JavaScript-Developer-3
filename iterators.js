// forEach
let numbers = [1, 2, 3];

numbers.forEach(function (item, index) {
  console.log(item, index);
});

let cats = ["cheetah", "lion", "tiger"];

cats.forEach(function (item, index) {
  console.log(item, index);
});

// map
let numbersM = [1, 2, 3];
let doubled = numbersM.map(function (item) {
  return item * 2;
});
console.log(doubled);

let numbersD = [2, 4, 6];
let halved = numbersD.map(function (item) {
  return item / 2;
});
console.log(halved);

// filter
let numbersE = [1, 2, 3, 4, 5, 6, 7, 8];
let evens = numbersE.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);

let numbersO = [1, 2, 3, 4, 5, 6, 7, 8];
let odds = numbersO.filter(function (item) {
  return item % 2 !== 0;
});
console.log(odds);

// reduce
let sum = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

// some (answers whether or not at leat one of the items are true based what's given)
let hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});
console.log(hasNegativeNumbers);

//every (answers whether or not all the items are true or false based what's given)
let allPositiveNumbers = [1, 2, 3, 4].every(function (item) {
  return item > 0;
});
console.log(hasNegativeNumbers);

//find (returns the item)
let objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
let found = objects.find(function (item) {
  return item.id === "b";
});
console.log(found);

// find index (returns the index of the requested item)
let objects2 = [{ id: "a" }, { id: "b" }, { id: "c" }];
let foundIndex = objects2.findIndex(function (item) {
  return item.id === "b";
});
console.log(foundIndex);
