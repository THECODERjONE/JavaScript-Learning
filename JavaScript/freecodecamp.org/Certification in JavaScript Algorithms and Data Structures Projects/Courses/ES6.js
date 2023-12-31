/*
ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification,
the terms ECMAScript and JavaScript are interchangeable.

Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009.
While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.

ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features,
including arrow functions, destructuring, classes, promises, and modules.
*/

//In this ocasion I will start from the very first exercise.

// Compare Scopes of the var and let Keywords

/*
Fix the code so that i declared in the if statement is a separate variable than
i declared in the first line of the function.
Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how
var and let keywords assign scope to the declared variable.
When programming a function similar to the one used in this exercise,
it is often better to use different variable names to avoid confusion.
*/

while (false) {
    function checkScope() {
        let i = 'function scope';
        if (true) {
          let i = 'block scope';
          console.log('Block scope i is: ', i);
        }
        console.log('Function scope i is: ', i);
        return i;
      }
}

// Mutate an Array Declared with const

// An array is declared as const s = [5, 7, 2].
// Change the array to [2, 5, 7] using various element assignments.

while (false) {
  const s = [5, 7, 2];
    function editInPlace() {
  // Only change code below this line
    const i = s.pop();
    s.unshift(i);
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
console.log(s);
}

// Prevent Object Mutation

/*
In this challenge you are going to use Object.freeze
to prevent mathematical constants from changing.
You need to freeze the MATH_CONSTANTS object so that no one is
able to alter the value of PI, add, or delete properties.
*/

while (false) {
    function freezeObj() {
        const MATH_CONSTANTS = {
          PI: 3.14
        };
        // Only change code below this line
        Object.freeze(MATH_CONSTANTS);
      
        // Only change code above this line
        try {
          MATH_CONSTANTS.PI = 99;
        } catch(ex) {
          console.log(ex);
        }
        return MATH_CONSTANTS.PI;
      }
      const PI = freezeObj();
}

// Use Arrow Functions to Write Concise Anonymous Functions

// Rewrite the function assigned to the variable magic which returns a new Date()
// to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

while (false) {
    const magic = () => new Date();
}

// Write Arrow Functions with Parameters

// Rewrite the myConcat function which appends contents of arr2 to arr1
// so that the function uses arrow function syntax.

while (false) {
  const myConcat = (arr1, arr2) => arr1.concat(arr2);
  // I lost time because they asked for myConcat to be a constant instead of a variable by they didn't state it.
  console.log(myConcat([1, 2], [3, 4, 5]));
}

// Set Default Parameters for Your Functions

/*Modify the function increment by adding default parameters so that it will add 1 to number
if value is not specified.*/ 

while (false) {
  // Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
}

// Use the Rest Parameter with Function Parameters

/**
Modify the function sum using the rest parameter in such a way that the
function sum is able to take any number of arguments and return their sum.
*/ 

while (false) {
  const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
}

// Use the Spread Operator to Evaluate Arrays In-Place

// Copy all contents of arr1 into another array arr2 using the spread operator.

while (false) {
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;

  arr2 = [...arr1];  // Change this line

  console.log(arr2);
}

// Use Destructuring Assignment to Extract Values from Objects

/**
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables today and tomorrow the values of today and
tomorrow from the HIGH_TEMPERATURES object. 
*/ 

while (false) {
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line
}

// Use Destructuring Assignment to Assign Variables from Objects

/*
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables highToday and highTomorrow the values of today
and tomorrow from the HIGH_TEMPERATURES object.
*/

while (false) {
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 
  
  // Only change code above this line
}

// Use Destructuring Assignment to Assign Variables from Nested Objects

/*
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables lowToday and highToday the values of
today.low and today.high from the LOCAL_FORECAST object.
*/

while (false) {
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
  
  // Only change code above this line
}

// Use Destructuring Assignment to Assign Variables from Arrays

/*
Use destructuring assignment to swap the values of a and b so that a receives
the value stored in b, and b receives the value stored in a.
*/ 

while (false) {
  let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];
}

// Destructuring via rest elements

/*
Use a destructuring assignment with the rest syntax to emulate the behavior of
Array.prototype.slice(). removeFirstTwo() should
return a sub-array of the original array list with the first two elements omitted.
*/ 

while (false) {
  function removeFirstTwo(list) {
    const [, , ...shorterList] = list; // I missplaced this outside of the function
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
}

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

/*
Use destructuring assignment within the argument to the function half 
to send only max and min inside the function.
*/

while (false) {
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({min, max}) => (max + min) / 2.0; 
  // Only change code above this line
}

// Create Strings using Template Literals

/*
Use template literal syntax with backticks to create an array of list element (li) strings.
Each list element's text should be one of the array elements from the failure property
on the result object and have a class attribute with the value text-warning.
The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

// Had to look at the answer bt then I wrote the code myself.
while (false) {
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
}

// Write Concise Object Literal Declarations Using Object Property Shorthand

/*
Use object property shorthand with object literals to create and return an object with name,
age and gender properties.
*/

while (false) {
  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {name, age, gender};
    // Only change code above this line
  };
}

// Write Concise Declarative Functions with ES6

/*
Refactor the function setGear inside the object bicycle to use the shorthand
syntax described above.
*/

while (false) {
  // Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
}

// Use class Syntax to Define a Constructor Function

/*
Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property
name that gets passed to the constructor.
 */

while (false) {
  // Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
}

// Use getters and setters to Control Access to an Object

/*
Use the class keyword to create a Thermostat class. The constructor accepts
a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and
a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value
of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale,
either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user,
who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.
*/

while (false) {
  // Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return ((5 / 9) * (this._fahrenheit - 32));
  }
  set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
  
} 
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos.temperature)
}

// Create a Module Script

// Add a script to the HTML document of type module and give it the source file of index.js

while (false) {
  <html>
  <body>
    {/* <!-- Only change code below this line --> */}
<script type="module" src="index.js"></script>
    {/* <!-- Only change code above this line --> */}
  </body>
</html>
}

// Use export to Share a Code Block

// There are two string-related functions in the editor.
// Export both of them using the method of your choice.

while (false) {
  const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  // export { uppercaseString, lowercaseString };
}

// Reuse JavaScript Code Using import

/*
Add the appropriate import statement that will allow the current file
to use the uppercaseString and lowercaseString functions you exported in the previous lesson.
These functions are in a file called string_functions.js,
 which is in the same directory as the current file.
*/

while (false) {
  // import {uppercaseString, lowercaseString} from "./string_functions.js";
  // Only change code above this line
  
  uppercaseString("hello");
  lowercaseString("WORLD!");
}

// Use * to Import Everything from a File

/*
The code in this file requires the contents of the file: string_functions.js,
that is in the same directory as the current file. Use the import * as syntax
to import everything from the file into an object called stringFunctions.
*/

while (false) {
  // import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
}

// Create an Export Fallback with export default

/*
The following function should be the fallback value for the module.
Please add the necessary code to do so.
*/

while (false) {
  // export default function subtract(x, y) {
  //   return x - y;
  // }
}

// Import a Default Export

/*
In the following code, import the default export from the math_functions.js file,
found in the same directory as this file. Give the import the name subtract.
*/

while (false) {
//  import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);
}

// Create a JavaScript Promise

/*
Create a new promise called makeServerRequest.
Pass in a function with resolve and reject parameters to the constructor.
*/

while (false) {
  const makeServerRequest = new Promise((resolve, reject)=> {

  })
}

// 

/*
Make the promise handle success and failure.
If responseFromServer is true, call the resolve method to successfully complete the promise.
Pass resolve a string with the value We got the data. If responseFromServer is false,
use the reject method instead and pass it the string: Data not received.
*/

while (false) {
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");// Change this line
    } else {  
      reject("Data not received");// Change this line
    }
  });
}

// Handle a Fulfilled Promise with then

// Add the then method to your promise.
// Use result as the parameter of its callback function and log result to the console.


while (false) {
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });
}

// Handle a Rejected Promise with catch

/*
Add the catch method to your promise.
Use error as the parameter of its callback function and log error to the console.
*/ 

while (false) {
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });
}