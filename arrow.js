// // arrow function 
// const multiple = x => x * 2;
// console.log(multiple(5));

// const manyNumberMultiple = (salary, tex, bouns) => salary - salary * tex + bouns;
// console.log(manyNumberMultiple(50000, 0.15, 10000));

// // spred oparetor 

// let obj = {
//     name: 'Anisa',
//     age: 2,
//     others: 'She is a beutiful girl'
// }

// const obj2 = { ...obj };
// console.log(obj2);

// let array = [4, 5, 35, 25, 94, 73, 24, 53];
// let array2 = [48, 38, 83, ...array, 487, 39, 26];
// const m = Math.max(...array2)
// console.log(m);
// console.log(array);
// console.log(array2);

// // distrucaring 


// // object distrucaring 

// const obj3 = {
//     name: 'Farhan',
//     age: 23,
//     work: 'Javascript Developer',
//     hobby: 'Tour one please to another place'
// }

// const { work, hobby, age } = obj3;

// console.log(work);
// console.log(hobby);
// console.log(age);

// // array distrucaring 

// const [a, b, c] = [45, 39, 27, 84, 36, 94, 4];
// console.log(a, b, c);

// const calculate = (num1, num2) => num1 + num2;
// const n = calculate(23, 58);
// const s = calculate(2, 55);
// console.log(n);
// console.log(s);

// const multi = m => m * m;
// console.log(multi(5));

// let ages = 23
// let job = 'Javascript developer'
// const stringAdd = `Hello Farhan! Your age is ${ages}. your work is ${work} and you like ${hobby}`
// console.log(stringAdd);


function min(nums) {
    return Math.min(nums)
}
// console.log(min([1, 3, 2]))

const cube = x => x * x * x;
// console.log(cube(2)) 


const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);


// const x = [1, 2, 3, 4, 45, 5];

// const d = x.filter(e => e % 2 === 0);
// console.log(d);

const { x, y, z } = { x: 1, y1: 2, z: 3 };

// console.log(x, y, z);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
// console.log(output);

friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

const m = friends.find(friend => friend.length == 5)
// console.log(m);


const product = {
    name: 'Laptop',
    model: 'Yoga 3',
    price: 49000,
    dusk: '512SSD'
}


const { price } = product;
console.log(price);