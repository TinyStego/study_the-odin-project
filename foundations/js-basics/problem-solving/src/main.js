const answer = parseInt(prompt("Please enter a positive number you would like to FizzBuzz up to: "));
let result = "";

for (let i = 1; i <= answer; ++i) {
    let temp = "";
    if (i % 3 === 0) {
        temp += "Fizz"
    } 
    if (i % 5 === 0) {
        temp += "Buzz"
    } 
    if (temp === ""){
        temp += String(i);
    }
    result += `${temp}\n`
}

console.log(result);
