// // Create Hash

// let input = "my Name is saajan";

// const convertHash = (input) => {
//   let trimmedInput = input.trim().split(" ");
//   let capitaizedInput = trimmedInput
//     .map((x) => x.replace(x[0], x[0].toUpperCase()))
//     .join("");

//   let hashed = `#${capitaizedInput}`;
//   console.log(hashed);
// };

// console.log(convertHash(input));

// Count Char

// let input = "MissIsipi";

// const countChar = (str, char) => {
//   str = str.toLowerCase().split("");
//   let count = 0;
//   console.log(str);
//   str.reduce((a, b) => {
//     if (b === char.toLowerCase()) {
//       count = count + 1;
//     }
//     return count;
//   }, 0);
//   return count;
// };
// console.log(countChar(input, "M"));

// Check Type Of Triangle

// const checkTriangle = (angle1, angle2, angle3) => {
//   console.log(angle1);
//   console.log(angle2);
//   console.log(angle3);
//   if (angle1 === angle2 && angle2 === angle3) {
//     return "Equalitarel";
//   } else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
//     return "Isosceles";
//   } else return "Scalene";
// };

// console.log(checkTriangle(2, 2, 2));
// console.log(checkTriangle(2, 2, 1));
// console.log(checkTriangle(1, 2, 3));

// Sortin Array

// let input = [2, 5, 3, 1];

// const sortedArr = (arr) => {
//   arr = arr.sort((a, b) => a - b);

//   return arr;
// };

// console.log(sortedArr(input));

// Is Palindrome

// let input = "Racar";

// const isPalindrome = (str) => {
//   const plainStr = str.trim().toLowerCase().split("").join("");
//   const reverseStr = str.trim().toLowerCase().split("").reverse().join("");
//   if (plainStr === reverseStr) {
//     return "Palindrome";
//   } else {
//     return "No Palindrome";
//   }
//   return;
// };

// console.log(isPalindrome(input));

// // Count Char

// function compressString(input) {
//   let result = "";
//   const charCount = {};

//   // Count occurrences of each character
//   for (const char of input) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // Sort the characters alphabetically and build the result string
//   //   const sortedChars = Object.keys(charCount).sort();
//   //   for (const char of sortedChars) {
//   //     result += `${char}${charCount[char]}`;
//   //   }

//   return result, charCount;
// }

// // Example usage:
// console.log(compressString("saajan")); // Output: "a3j1n1s1"

// console.log(occurances(input));

// For IN Loop
// let obj = {
//   saajan: 90,
//   harry: 80,
//   kittu: 70,
// };
// let total = 0;
// for (a in obj) {
//   total = total + obj[a];
// }

// console.log(total);

// FOR OF LOOP

// let input = "saajan";

// for (a of input) {
//   console.log(a);
// }

// Math dot Max

// let input = [1, 2, 3, 4, 5];

// console.log(Math.max(...input));

// FIND FACTORIAL

// let input = 5;
// let total = 0;
// const factorial = (num) => {
//   if (num === 0) {
//     return (total = 1);
//   } else if (num < 0) {
//     total = total * -1;
//   } else {
//     total = 1;
//   }
//   for (i = 1; i <= num; i++) {
//     total = total * i;
//   }
//   return total;
// };

// console.log(factorial(input));

// FIND AVERAGE OF ARRAY

// let input = [1, 2, 3, 4, 5];

// let average = 0;

// const findAverage = (arr) => {
//   average = arr.reduce((acc, curr) => acc + curr, 0);

//   average = average / arr.length;

//   return average;
// };

// console.log(findAverage(input));

// CHECK IF TWO ARRAYS ARE EQUAL

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];

// const checkEquality = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return "Not equal, Diff Length";
//   } else {
//     const comparision = arr1.every((curr, index) => curr === arr2[index]);
//     console.log(comparision);
//     if (comparision) {
//       return "Equal";
//     } else {
//       return "Not Equal";
//     }
//   }
// };

// console.log(checkEquality(array1, array2));

// TAKE A NUMBER AND RETURN ITS SUM

// const input = 12345;

// const addIndNums = (num) => {
//   let indNums = num.toString().split("");
//   console.log(indNums);

//   let total = indNums.reduce((acc, curr) => acc + Number(curr), 0);
//   return total;
// };

// console.log(addIndNums(input));

// REMOVE DUPLICATES

// const input = [1, 2, 3, 4, 3, 4, 5];

// 1ST WAY
// const removeDuplicates = (arr) => {
//   const newArr = arr.filter((x, index) => arr.indexOf(x) == index);
//   return newArr;
// };
// console.log(removeDuplicates(input));

// 2nd WAY

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };

// console.log(removeDuplicates(input));

// COUNT THE NUMBER OF VOWELS

// let input = "Hello World";

// const countVowels = (str) => {
//   let total = 0;
//   if (str) {
//     console.log("In");
//     str = str.trim().toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (
//         char == "a" ||
//         char == "e" ||
//         char == "i" ||
//         char == "o" ||
//         char == "u"
//       ) {
//         total = total + 1;
//       }
//     }
//     return total;
//   } else {
//     return total;
//   }
// };

// console.log(countVowels(input));

// POWER OF TWO

// let input = 32;

// const checkPowerOfTwo = (num) => {
//   for (let i = 0; i < num; i++) {
//     if (2 ** i === num) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(checkPowerOfTwo(input));

// SUM OF SQUARES OF AN ARRAY

// let input = [1, 2, 3, 4];

// const sumOfSquares = (arr) => {
//   arr = arr.map((x) => x * x);
//   arr = arr.reduce((acc, curr) => acc + curr, 0);

//   return arr;
// };

// console.log(sumOfSquares(input));

// FIND MIN OF AN ARRAY

// let input = [2, 3, 4, 5];

// const findMin = (arr) => {
//   let min = Math.min(...arr);
//   return min;
// };

// console.log(findMin(input));

// CONVERT TO CAMELCASE

// let input = "my NAme is saajan more";

// const convertToCamelCase = (str) => {
//   str = str.trim().split(" ");

//   str = str.map((x, index) => {
//     if (index == 0) {
//       return x.toLowerCase();
//     } else {
//       return x[0].toUpperCase() + x.slice(1).toLowerCase();
//     }
//   });
//   return str.join("");
// };

// console.log(convertToCamelCase(input));

// CHECK IF CHARACTER UPPERCASE OR LOWERCASE

// let input = "s";

// const checkUpperCase = (char) => {
//   let char2 = char.toUpperCase();

//   if (char === char2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkUpperCase(input));

// CHECK IF THE STRING STARTS WITH SPECIFIC SUBSTRING

// const mainString = "hello World";

// const subString = "hello";

// const checkString = (mainStr, subStr) => {
//   return mainStr.trim().toLowerCase().startsWith(subStr.trim().toLowerCase());
// };

// console.log(checkString(mainString, subString));

// REVERSE A STRING WITHOUT USING BUILT IN METHODS

// let input = "Hello";

// const reverseStr = (str) => {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr = revStr + str[i];
//   }
//   return revStr;
// };

// console.log(reverseStr(input));

// FIND MEAN OF AN ARRAY

// let input = [];

// const calcMean = (arr) => {
//   if (arr.length > 0) {
//     const total = arr.reduce((acc, curr) => acc + curr, 0);
//     const mean = total / arr.length;
//     return mean;
//   } else {
//     return 0;
//   }
// };

// console.log(calcMean(input));

// FIND MEDIAN OF AN ARRAY

// const input = [4, 3, 5, 2, 1, 6];

// const calcMedian = (arr) => {
//   if (arr.length == 0) {
//     return 0;
//   }
//   let ascendingArr = arr.sort((a, b) => a - b);
//   let median = 0;
//   if (arr.length % 2 !== 0) {
//     median = ascendingArr[Math.floor(arr.length / 2)];
//     return median;
//   } else {
//     let median1 = ascendingArr[arr.length / 2 - 1];
//     let median2 = ascendingArr[arr.length / 2];
//     median = (median1 + median2) / 2;
//     return median;
//   }
// };

// console.log(calcMedian(input));

// COUNT THE OCCURNCES OF NUMBERS IN AN ARRAY

// const input = [1, 2, 3, 2, 3];

// const countOccurances = (arr) => {
//   let total = {};
//   arr.map((x) => {
//     if (total[x]) {
//       total[x] = total[x] + 1;
//     } else {
//       total[x] = 1;
//     }
//   });
//   return total;
// };
// console.log(countOccurances(input));

// FIND MODE OF AN ARRAY

// const input = [1, 2, 3, 4, 3, 2, 3];

// const calcMode = (arr) => {
//   let occurances = {};
//   let maxNum = 0;
//   let mode = null;
//   arr = arr.map((x) => {
//     if (occurances[x]) {
//       occurances[x] = occurances[x] + 1;
//     } else {
//       occurances[x] = 1;
//     }
//     if (occurances[x] > maxNum) {
//       maxNum = occurances[x];
//       mode = x;
//     }
//   });
//   console.log(occurances);
//   return mode;
// };

// console.log(calcMode(input));

// FIND FACTORIAL OF A NUMBER

// const input = 4;

// const calcFactorial = (num) => {
//   if (num === 1) {
//     return 1;
//   } else {
//     return (num = num * calcFactorial(num - 1));
//   }
// };

// console.log(calcFactorial(input));

// FIND THE NTH FIBONACI NUMBER

// let input = 5;

// const fibonacci = (num) => {
//   if (num <= 1) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };

// console.log(fibonacci(input));

// REPEAT STRING A PARTICULAR NO OF TIMES

// const input = "Sn";

// const repeatStr = (str, rpt) => {
//   let result = "";

//   for (let i = 1; i <= rpt; i++) {
//     result = result + str;
//   }
//   return result;
// };
// NOTE:"We also could have used just used and returned str.repeat(no of times)"
// console.log(repeatStr(input, 3));

// TRUNCATE STRING TO A PARTICULAR LENGTH

// const input = "Lorem ipsum dolor sit, amet consectetur elit. Nemo neque!";

// const truncateStr = (str, limit) => {
//   str = str.slice(0, limit);
//   return str;
// };

// console.log(truncateStr(input, 10));

// GENERATE AN ARRAY OF AN SPECIFIC RANGE

// const startNum = -2;
// const endNum = 2;

// const generateRange = (start, end) => {
//   let rangeNum = [];
//   for (let i = start; i <= end; i++) {
//     rangeNum.push(i);
//   }
//   return rangeNum;
// };

// console.log(generateRange(startNum, endNum));

// GENERATE AN ARRAY OF AN SPECIFIC RANGE USING RECURSION

// const startNum = 0;
// const endNum = 2;

// let result = [];
// const generateRange = (start, end) => {
//   if (start <= end) {
//     result.push(start);
//     return generateRange(start + 1, end);
//   } else {
//     return result;
//   }
// };

// console.log(generateRange(startNum, endNum));

// RANDOM HEXADECIMAL COLOR GENERATOR

// const randomHex = () => {
//   const str = Math.random().toString(16).slice(2, 8).padEnd(6, 0);
//   return "#" + str;
// };

// console.log(randomHex());

// REMOVE DUPLICATES FROM AN ARRAY

// let input = [1, 2, 3, 4, 5, 2, 3, 4, 1, 5];
// const removeDuplicates = (arr) => [...new Set(arr)];

// console.log(removeDuplicates(input));

// CHECK IF AN OBJECT IS EMPTY OR NOT

// let obj1 = {
//   name: "saajan",
//   place: "pune",
//   age: 29,
// };

// let obj2 = {};

// const isEmptyObject = (obj) => {
//   return Object.keys(obj).length === 0 ? "Is Empty" : "Is Not Empty";
// };
// console.log(isEmptyObject(obj1));

// CONVERT AN OBJECT TO AN ARRAY AND VICE VERSA

// const input1 = { name: "Saajan", age: "29", place: "Pune" };
// const input2 = ["name", "Saajan", "age", "29", "place", "Pune"];

// const switchType = (data) => {
//   let newData;
//   if (!Array.isArray(data) && typeof data === "object") {
//     newData = Object.entries(data).flat();
//   } else if (Array.isArray(data)) {
//     newData = Object.fromEntries(
//       // Group elements in pairs to form [key, value] structure
//       data.reduce((acc, curr, i) => {
//         if (i % 2 === 0) acc.push([curr, data[i + 1]]);
//         return acc;
//       }, [])
//     );
//   }

//   return newData;
// };

// console.log(switchType(input1));

// CALCULATE SIMPLE INTEREST

// const principalAmt = 1000;
// const rateOfInterest = 5;
// const timeInYears = 3;

// const calcSimpleInterest = (p, r, t) => {
//   let simpleInterest = 0;
//   simpleInterest = (p * r * t) / 100;
//   return simpleInterest;
// };

// console.log(calcSimpleInterest(principalAmt, rateOfInterest, timeInYears));

// CALCULATE DAYS BETWEEN TWO DATES

// const startDate = "1-1-2025";
// const endDate = "2-31-2025";

// const daysBetween = (d1, d2) => {
//   let date1 = new Date(d1);
//   let date2 = new Date(d2);
//   let diff = Math.abs(date2 - date1);

//   return diff / (24 * 60 * 60 * 1000);
// };

// console.log(daysBetween(startDate, endDate));

// CALCULATE AGE

// const dateOfBirth = "03-17-1995";

// const calculateAge = (d1) => {
//   const dob = new Date(d1);
//   const today = new Date();
//   // Calculate years
//   let years = today.getFullYear() - dob.getFullYear();

//   // Adjust if the current month/day is before the birth month/day
//   let months = today.getMonth() - dob.getMonth();
//   let days = today.getDate() - dob.getDate();

//   if (months < 0 || (months === 0 && days < 0)) {
//     years--;
//     months += 12;
//   }

//   if (days < 0) {
//     months--;
//     // Get days in the previous month to add to days difference
//     const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//     days += previousMonth.getDate();
//   }

//   console.log(`Years: ${years}, Months: ${months}, Days: ${days}`);
//   return { years, months, days };
// };

// console.log(calculateAge(dateOfBirth));
console.log("End");
