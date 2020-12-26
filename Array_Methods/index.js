/* Array Methods */
const fruits = ['🍊', '🍊', '🍊', '🍎', '🍏', '🍅', '🍇', '🍈', '🍉', '🍌', '🥝'];

/* Concat */
/* Join two or more arrays, and returns a copy of the joined arrays */
let concatMethod = () =>  {
    let cars = ['fiat', 'renault', 'kia'];
    let concatArr = cars.concat(fruits);
    return concatArr;
}

/* CopyWithin */
/* Copies array elements within the array, to and from specified options */

let copyWithin = () => {
    let subjects = ['math', 'science', 'french'];
    let copyMathToThirdPosition = subjects.copyWithin(2, 0);
    return copyMathToThirdPosition;
}

/* Entries */
/* Returns a key/value pair Array Iteration Object */

let entries = () => {
    let keyValue = fruits.entries();
    for (x of keyValue){
        return x;
    }
}

console.log(concatMethod());
copyWithin();
entries();


