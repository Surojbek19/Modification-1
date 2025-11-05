//TASK H:
// Sjunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
//faqat positive raqamlarni olib string holatida return qilsin 
//MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(array: number[]) {
//     let positiveNum = array.filter(num => num >= 0).join("");
//     return positiveNum;
    
// }

// console.log(getPositive([1, -4, 2]));



// TASK H2: 

//Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

//MASALAN: getDigits("m14i1t") return qiladi "141"


// function getDigits(word: string) {
//     let digits = word.split("").filter(item => !isNaN(Number(item))).join("");
//     return digits;
// }

// console.log(getDigits("m14i1t")); 


/* 
Project Standarts 
- Looging standarts
- Naming standarts
   function, method, variables =>  CAMLE case          ---goHome
   class => PASCAL case                                ---MemberService
   folders, file => KABAB case 
   CSS => SNAKE                                        ---button_style
- Error handling
*/

/* 
Traditianoal API
REST API
GraphQl API
 */



//TASK-I:

//Shunday function tuzing, u parametrdagi array ichida eng ko'p
//takrorlangan raqamni topib qaytarsin.

//MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

//Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(array: number[]) {
//    let highestCount = 0;
//    let mostRepeatedValue = array[0]
//    for(let i = 0; i < array.length; i++) {
//       let countNum = 1;
//       for(let j = i + 1; j < array.length; j++) {
//          if(array[i] === array[j]) {
//             countNum++;
//          }
//       }
//       if(countNum > highestCount) {
//          highestCount = countNum;
//          mostRepeatedValue = array[i];
//       }
//    }
//    return mostRepeatedValue;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 5, 2, 5]))

//TASK J:

//Shunday function tuzing, u string qabul qilsin. Va string ichidagi eng uzun so'zni qaytarsin.

//MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

//Yuqoridagi text tarkibida 'Uzbekistan' eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// function findLongestWord(sentence: string) {
//    let words = sentence.split(" ");
//    let longest = "";
//    for(let i = 0; i < words.length; i++) {
//       if(words[i].length > longest.length) {
//          longest = words[i];
//       }
//    }
//     return longest;
// }

// console.log(findLongestWord("I came from Uzbekisatn!"))

//TASK K: 

//Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
//MASALAN: countVowels("string") return 1;

// function countVowels(word: string) {
//    const vowelSeparate = ["a", "e", "i", "o", "u"];
//    let wordSeparate = word.toLowerCase().split("");
//    let count = 0;
//    for(let i = 0; i < wordSeparate.length; i++) {
//       for(let j = 0; j < vowelSeparate.length; j++) {
//          if(wordSeparate[i] === vowelSeparate[j]) {
//             count++;
//          }
//       }
//    }
// return count;
// }
// console.log(countVowels("AUSTRALIA"));


//TASK L: 

//Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
//MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(sentence: string) {
//    let sentenceSplit = sentence.split(" ");
//    let reversedWords = [];
//    for(let i = 0; i < sentenceSplit.length; i++) {
//      reversedWords.push(sentenceSplit[i].split("").reverse().join(""));
     
     
//    }
//    return reversedWords.join(" ");
// }
// console.log(reverseSentence("Do you like soccer?"));

//TASK M: 

//Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array 
//ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil 
// topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
//MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(array: number[]) {
//    let result = array.map(a => ({
//       number: a,
//       square: a * a,
//    }))
//    return result;
// }
// console.log(getSquareNumbers([5, 2, 3]))

// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(word: string) {
//    let reversed = word.split("").reverse().join("");
//    if(word === reversed) {
//       return true;
//    } else {
//       return false;
//    }
// }
// console.log(palindromCheck("son"));

//TASK O:

//Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
//Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

//MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

//Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
//Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSumOfNumbers(array: any) {
//    let calculated = 0;
//    for(let i = 0; i < array.length; i++) {
//       if(typeof array[i] === "number") {
//          calculated += array[i];
//       }
    
//    }
//      return calculated;
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, 12, true, 35]))

//TASK P:

//Parametr sifatida yagona object qabul qiladigan function yozing.
//Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

//MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: object){
  const keys = Object.keys(obj)
  const values = Object.values(obj);
  let myArr = [];
  
  for(let i = 0; i < keys.length; i++){
    const tempArr = [];
    tempArr.push(keys[i], values[i]);
    myArr.push(tempArr);
  }
  
  return myArr;
}

const myObj = {
  a: 10, 
  b: 20
}

console.log(objectToArray(myObj));