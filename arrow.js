// arrow function 
const multiple = x => x * 2;
console.log(multiple(5));

const manyNumberMultiple = (salary, tex, bouns) => salary - salary * tex + bouns;
console.log(manyNumberMultiple(50000, 0.15, 10000));

// spred oparetor 

let obj = {
    name: 'Anisa',
    age: 2,
    others: 'She is a beutiful girl'
}

const obj2 = { ...obj };
console.log(obj2);

let array = [4, 5, 35, 25, 94, 73, 24, 53];
let array2 = [48, 38, 83, ...array, 487, 39, 26];
const m = Math.max(...array2)
console.log(m);
console.log(array);
console.log(array2);

// distrucaring 


// object distrucaring 

const obj3 = {
    name: 'Farhan',
    age: 23,
    work: 'Javascript Developer',
    hobby: 'Tour one please to another place'
}

const { work, hobby, age } = obj3;

console.log(work);
console.log(hobby);
console.log(age);

// array distrucaring 

const [a, b, c] = [45, 39, 27, 84, 36, 94, 4];
console.log(a, b, c);

const calculate = (num1, num2) => num1 + num2;
const n = calculate(23, 58);
const s = calculate(2, 55);
console.log(n);
console.log(s);