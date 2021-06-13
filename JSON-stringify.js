const student = {
  name: "Johnny",
  age: 19,
  isActive: true,
};

const alumni = [
  {
    name: "Abbu",
    age: 20,
    job: "front end developer",
    isActive: true,
    hobbies: ["Working out, gaming, pc building", "coding"],
    friends: [
      {
        name: "AJ",
        age: 18,
        job: "Entrepreneur",
      },
      {
        name: "Abdulkahar",
        age: 19,
        job: "Security guard",
      },
    ],
  },
];

// converts student and alumni object to string below
const studentOTS = JSON.stringify(student);
const alumniOTS = JSON.stringify(alumni);

console.log(typeof studentOTS);
console.log(studentOTS);

console.log(typeof alumniOTS);
console.log(alumniOTS);
