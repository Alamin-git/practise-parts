/* 
const numbers = [23, 43, 5, 43, 67, 32, 78, 25, 98, 09];
const output = [];

const dubleIt = number => number + 10;
for (const number of numbers) {
    const result = dubleIt(number);
    output.push(result);
}
console.log(output); 
*/



// uporer kaj gula sob .map diye 1line a kore fela jai 

const numbers = [23, 43, 5, 43, 67, 32, 78, 25, 98, 09];


const output = numbers.map(x => x + 10);
console.log(output);



