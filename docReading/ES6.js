// Object.freeze() -> Change from mutable ojb/array to immutable (even use const)

/* arrow function with parameters
More details: 
    + In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
    + With arrow functions, the this keyword always represents the object that defined the arrow function.*/

// rest parameter Ex: let arr2 = [...arr1]

// >>> Destructuring Assignment to 
// Assign Variables from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: high_Today } } = LOCAL_FORECAST;
// Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(ends))
// Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];
// Destructuring via Rest
function removeFirstTwo(list) {
    const [a, b, ...arg] = list
    return arg;
}


// Create Strings using Template Literals: (use for loop & push() is Okey)
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`)
    return failureItems;
}
const failuresList = makeList(result.failure);


// >>> Write Concise 
// Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")) //{ name: 'Zodiac Hasbro', age: 56, gender: 'male' }
// Declarative Functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear); //3


// Use class Syntax to Define a Constructor Function
class Vegetable {
    constructor(input) { this.name = input }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); //carrot
// Use getters and setters to Control Access to an Object: '_' underscore display private variable (doesnot make it private)
class Thermostat {
    constructor(inputTmp) {
        this._temperature = 5 / 9 * (inputTmp - 32)
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(inputTmp) {
        this._temperature = inputTmp;
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


// >>> Insert module script
<script type="module" src="filename.js"></script>
// Share code block (at filename.js), can only have one default export in a file 
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString };


const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};

export default message;
// Import code block 
import { uppercaseString, lowercaseString } from './filename.js';
import message from './filename.js';
// Import All as an Object
import * as stringFunctions from './filename.js'
// Simple Promise
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => console.log(result));

makeServerRequest.catch(error => {console.log(error);});