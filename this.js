let car = {
  make: "Honda",
  color: "red",
  mpg: 34,
  gallons: 12,
  engine: 1,
  description: function () {
    return this.make + " " + this.color;
  },
};

console.log(car.description());
