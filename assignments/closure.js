// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function split_and_2x(num) {
  return num.toString().split("").map(x => Number.parseInt(x) * 2)
}
console.log(split_and_2x(123)) //=> [2, 4, 6]

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return () => { count += 1; return count }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter()
console.log(newCounter()) //=> 1
console.log(newCounter()) //=> 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return {
    increment: () => { ++count; return count },
    decrement: () => { --count; return count }
  }
};
const objCounter = counterFactory()
console.log(objCounter.increment()) //=> 1
console.log(objCounter.increment()) //=> 2
console.log(objCounter.decrement()) //=> 1
