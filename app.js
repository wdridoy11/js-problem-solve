/* =================================================================
                                    Task 1
=================================================================*/

/* function reverseString(inputString){
     let reversedString  = "";
     for(let i = inputString.length -1;i>=0;i--){
        reversedString += inputString.charAt(i);
     }
     return reversedString;
}

console.log(reverseString("hello world"))
console.log(reverseString("Hello Bangladesh")) */

/* =================================================================
                             Task 2
=================================================================*/

/* function sumOfPositiveNumbers(inputNumber){
    let sum = 0;
    for(let num of inputNumber){
        if(num >0){
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfPositiveNumbers([10,20,-25,-50,-60,-50]))
console.log(sumOfPositiveNumbers([10,80,10,-50,-60,-50]))
 */
/* =================================================================
                             Task 3
=================================================================*/

/* function findMostFrequentElement(inputArr){

    let frequency ={};
    for(let element of inputArr) {
        if(frequency[element]){
            frequency[element]++;
        }else{
            frequency[element] = 1;
        }
    }

    let mostFrequentElement;
    let highestFrequency = 0 
    for(let element in frequency){
        if(frequency[element]>highestFrequency){
            highestFrequency = frequency[element];
            mostFrequentElement = element;
        }
    }
    return mostFrequentElement;
} 
console.log(findMostFrequentElement([1, 2, 3, 2, 2, 4, 5]));
console.log(findMostFrequentElement([10, 20, 30, 30,30, 20, 4, 5])); */

/* =================================================================
                             Task 4
=================================================================*/

/* function romanToInt(roman) {
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentSymbolValue = romanMap[roman[i]];
      const nextSymbolValue = romanMap[roman[i + 1]];
  
      if (nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++;
      } else {
        result += currentSymbolValue;
      }
    }
    return result;
  }
  console.log(romanToInt("VI"));
  console.log(romanToInt("VII")); */

/* =================================================================
                             Task 5
=================================================================*/

/* function calculator(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error: zero is not allowed.";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator. Please use one of '+', '-', '*', or '/'.";
    }
  }
  console.log(calculator(5, "+", 3));
  console.log(calculator(10, "-", 4));
  console.log(calculator(6, "*", 2));
  console.log(calculator(10, "/", 2)); */

/* =================================================================
                             Task 6
=================================================================*/

function generatePassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  const randomPassword = generatePassword(10);
  console.log(randomPassword);

/* =================================================================
                             Task 8
=================================================================*/

/*   function findSecondSmallest(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
  }
  
  // Example usage:
  const numbers = [5, 20,20, 8, 10, 3, 9];
  const secondSmallest = findSecondSmallest(numbers);
  console.log("second Smallest", secondSmallest) */
