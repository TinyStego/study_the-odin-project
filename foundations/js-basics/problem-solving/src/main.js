const answer = parseInt(prompt("Please enter a positive number you would like to FizzBuzz up to: "));
const checks = {
    2: "Fuzz",
    3: "Fizz",
    5: "Buzz",
    7: "Bazz"
}
let result = "";


for (let i = 1; i <= answer; ++i) {
    let temp = "";
    for (let key in checks) {
        if (i % parseInt(key) === 0) {
            temp += checks[key];
        } 
    }
    if (temp === ""){
        temp += String(i);
    }
    result += `${temp}\n`
}

console.log(result);
