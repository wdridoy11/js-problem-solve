/* =================================================================
                                    Task 1
=================================================================*/

// function reverseString(inputString){
//      let reversedString  = "";
//      for(let i = inputString.length -1;i>=0;i--){
//         reversedString += inputString.charAt(i);
//      }
//      return reversedString;
// }

// console.log(reverseString("hello world"))
// console.log(reverseString("Hello Bangladesh"))

/* =================================================================
                             Task 2
=================================================================*/

// function sumOfPositiveNumbers(inputNumber){
//     let sum = 0;
//     for(let num of inputNumber){
//         if(num >0){
//             sum += num;
//         }
//     }
//     return sum;
// }
// console.log(sumOfPositiveNumbers([10,20,-25,-50,-60,-50]))
// console.log(sumOfPositiveNumbers([10,80,10,-50,-60,-50]))

/* =================================================================
                             Task 3
=================================================================*/

// function findMostFrequentElement(inputArr){

//     let frequency ={};

//     for(let element of inputArr) {
//         if(frequency[element]){
//             frequency[element]++;
//         }else{
//             frequency[element] = 1;
//         }
//     }

//     let mostFrequentElement;
//     let highestFrequency = 0 
//     for(let element in frequency){
//         if(frequency[element]>highestFrequency){
//             highestFrequency = frequency[element];
//             mostFrequentElement = element;
//         }
//     }
//     return mostFrequentElement;

// } 

// console.log(findMostFrequentElement([1, 2, 3, 2, 2, 4, 5]));
// console.log(findMostFrequentElement([10, 20, 30, 30,30, 20, 4, 5]));

/* =================================================================
                             Task 4
=================================================================*/








/* =================================================================
                             Task 6
=================================================================*/

// function generatePassword(length) {
//     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
//     let password = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset[randomIndex];
//     }
//     return password;
//   }
  
//   const randomPassword = generatePassword(10);
//   console.log(randomPassword);

/* =================================================================
                             Task 8
=================================================================*/

  function findSecondSmallest(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
  }
  
  // Example usage:
  const numbers = [5, 20,20, 8, 10, 3, 9];
  const secondSmallest = findSecondSmallest(numbers);
  console.log("second Smallest", secondSmallest)
