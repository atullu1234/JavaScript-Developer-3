let car = {
  make: "Honda",
  color: "red",
  mpg: 34,
  gallons: 12,
  engine: 1,
};

let car2 = {
  make: "Toyota",
  color: "blue",
  mpg: 34,
  gallons: 12,
  engine: 1,
};

/* Object dot notation (cannot be used to console.log invalid variables, a javascript reserved keyword, or one that contains a space) */
console.log(car.make);
console.log(car.color);

console.log(car2.make);
console.log(car2.color);

/* Bracket notation */
console.log(car["mpg"]);
console.log(car["gallons"]);

console.log(car2["mpg"]);
console.log(car2["gallons"]);
