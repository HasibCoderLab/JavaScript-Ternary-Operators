// ==  Solve Problem With JavaScript Ternary Operator ==== 
const checkPositive = (input) => input > 0 ? "Positive" :input < 0 ? "Negative" :"Zero"
console.log(checkPositive(10))
// Output : Positive
console.log(checkPositive(-10))
 // Output : Negative

const checkAge = (age) => age >= 18 ? "Adult" : "Minor"
console.log(checkAge(14))
 // Output : Minor
console.log(checkAge(20))
 // Output : Adult