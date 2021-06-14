let student = `{
  "name": "Johnny",
  "age": 19,
  "isActive": true
}`;
console.log(JSON.parse(student));

let alumni = `[
  {
    "name": "Abbu",
    "age": 20,
    "job": "front end developer",
    "isActive": true,
    "hobbies": ["Working out", "gaming", "pc building", "coding"],
    "friends": [
      {
        "name": "AJ",
        "age": 18,
        "job": "Entrepreneur"
      },
      {
        "name": "Abdulkahar",
        "age": 19,
        "job": "Security guard"
      }
    ]
  }
]`;
console.log(JSON.parse(alumni));
