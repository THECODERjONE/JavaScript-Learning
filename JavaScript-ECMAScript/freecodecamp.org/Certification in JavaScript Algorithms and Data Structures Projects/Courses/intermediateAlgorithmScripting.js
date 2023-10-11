/* Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming,
test your skills with the Intermediate Algorithm Scripting challenges.*/



// Sum All Numbers in a Range

/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

while (false) {
    function sumAll(arr) {
        let sumRange = 0;
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
            sumRange += i;
        }
        return sumRange;
      }
      
      sumAll([1, 4]);
}

// Diff Two Arrays

/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/

while (false) {
    function diffArray(arr1, arr2) {
        const arr1In2 = arr1.filter(item => !arr2.includes(item));
        const arr2In1 = arr2.filter(item => !arr1.includes(item));
        const symmetricDiff = arr1In2.concat(arr2In1);
        return symmetricDiff;
      }
      
      diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}

/*
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
In a better way.
*/


// Seek and Destroy

/*
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function.
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/

while (false) {
  function destroyer(arr, ...args) {
    return arr.filter(item => !args.includes(item));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
}

// Wherefore art thou

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching
name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array
(the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

while (false) {
  function whatIsInAName(collection, source) {
    let auxArr = collection.slice();
    return auxArr.filter(obj => {
      return Object.keys(source).every(key => {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
      });
    };
    
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
}

// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

while (false) {
  function spinalCase(str) {
    str = str.replace(/[\s_]/g, '-');
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    return str.toLowerCase();
    }

  spinalCase('This Is Spinal Tap');
}

// Pig Latin

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

while (false) {
  function translatePigLatin(str) {
    const consonantCluster = str.match(/^[^aeiou]+/);
    if(consonantCluster) {
      const firstPart = str.substr(consonantCluster[0].length);
      return firstPart + consonantCluster[0] + 'ay';
      } else {    
          return str + 'way';
          }
    }
  
  translatePigLatin("consonant");
}

// Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

while (false) {
  function myReplace(str, before, after) {
    let index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
}

// DNA Pairing

/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

while (false) {
  function pairElement(str) {
    let fixedDNA = [];

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'A') {
        fixedDNA.push(['A', 'T']);
      } else if (str[i] === 'T') {
        fixedDNA.push(['T', 'A']);
      } else if (str[i] === 'C') {
        fixedDNA.push(['C', 'G']);
      } else if (str[i] === 'G') {
        fixedDNA.push(['G', 'C']);
      }
    }
    
      return fixedDNA;
  }
  pairElement("GCG");
}

// Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

while (false) {
  function fearNotLetter(str) {
    if (str.length <= 0) {
      return undefined;
    } else {
      for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) > str.charCodeAt(i - 1) + 1) {
          return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
      }
      return undefined;
    }
  }
  
  fearNotLetter("abce");
}