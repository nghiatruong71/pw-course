const console = require("node:console");

// bai 1
function multiply(a,b){
    return a*b;
}
console.log(multiply(8,9));
// bai 2 
function findMin(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}
let result = findMin(4,5,6);
console.log(result);
// bai 3
function getTopStudents(students, threshold) {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      result.push(students[i].name);
    }
  }

  return result;
}
const students = [
  { name: "An", score: 7 },
  { name: "Binh", score: 8 },
  { name: "Chau", score: 9 }
];

console.log(getTopStudents(students, 8));
// bai 4 

function calculateInterest (principal,rate,years){
    let total = principal + principal * rate * years / 100
    return total;
}
let kq = calculateInterest(1000, 5, 2);
console.log(kq);
console.log(calculateInterest(1000, 5, 2));

