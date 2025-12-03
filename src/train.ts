//TASK H:
// Sjunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
//faqat positive raqamlarni olib string holatida return qilsin 
//MASALAN: getPositive([1, -4, 2]) return qiladi "12"

import { count } from "console";

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

// function objectToArray(obj: object){
//   const keys = Object.keys(obj)
//   const values = Object.values(obj);
//   let myArr = [];
  
//   for(let i = 0; i < keys.length; i++){
//     const tempArr = [];
//     tempArr.push(keys[i], values[i]);
//     myArr.push(tempArr);
//   }
  
//   return myArr;
// }

// const myObj = {
//   a: 10, 
//   b: 20
// }

// console.log(objectToArray(myObj));

//TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.


// interface Car {
//   name: string;
//   model: string;
//   year: number;
// }

// function hasProperty(car: Car, word: string): boolean {
//   return word in car; 
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));



//TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(hisoblab: string) {
//   let splited = hisoblab.split("").map(ch => Number(ch));
//   let count = 0;
//   for(let i = 0; i < splited.length; i++) {
//     if(!isNaN(splited[i])) {
//       count += splited[i];
//     }
//   }
//   return count;
// }
// console.log(calculate("6 + 9"))

//TASK-S:
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(array: number[]) {
//   let num: number | string = "No missing number found!";
//   const sorted = array.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length - 1; i++) {
//       if ((sorted[i + 1] !== sorted[i] + 1)) {
//         num = sorted[i] + 1;
//         return num;
//       }
//   }
//   return num;
// }

// console.log(missingNumber([1, 2, 3, 4, 5]))

// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
// function mergeSortedArrays(array: number[], array1: number[]) {
//   let merged = array.concat(array1).sort((a, b) => a - b);
//   return merged;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))

// TASK U

// Shunday function tuzing, uni number parametri bo'lsin. Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda. Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.


// function sumOdds(num: number) {
//   let count = 0;
//   for(let i = 0; i < num; i++) {
//     if(i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(sumOdds(11))

// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// function countChars(word: string) {
//   let objVal = 0;
//   let objKey = "";
//   let myObj:any = {};

//   const letters = word.split("");

//   for(let i=0; i<letters.length; i++){
//     const objKeys = Object.keys(myObj)
//     const letter = letters[i] 
    
//     if(!objKeys.includes(letter)){
//       myObj[letter] = 1;
//       for(let j=i+1; j<letters.length; j++){
//         if(letter === letters[j]){
//           myObj[letter] = myObj[letter] + 1;
//         }
//       }
      
//     }

//   }
//   return myObj;
// }

// console.log(countChars("hello"));

// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

// function chunkArray(array: number[], num: number) {
//   const result = [];
//   for(let i =0; i < array.length; i+=num) {
//     result.push(array.slice(i, i + num));
//   }
//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda


// function countOccurrences(obj: any, word: string) {
//   let count = 0;

//   for (let key in obj) {
//     if (key === word) count++;

//     const value = obj[key];

//     if (value !== null && typeof value === "object") {
//       count += countOccurrences(value, word);
//     }
//   }

//   return count;
// }

// console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'))



// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.

// function findIntersection(a1: number[], a2: number[]) {
//   const set = new Set(a2);
//   const result: number[] = [];
//   for(let n of a1) {
//     if(set.has(n)) {
//       result.push(n);
//     }
//   }
//   return result;
// }

// console.log(findIntersection([1,2,3], [3,2,0]));

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// function sumEvens(array: number[]) {
//   let evens = array.filter(n => n % 2 === 0);
//   return evens.reduce((sum, n) => sum + n, 0);
// }

// console.log(sumEvens([1, 2, 3, 4])); 

// TASK-ZB:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin

// MASALAN: randomBetween(30, 50) return 45

function randomBetween(num1: number, num2: number) {
  return Math.floor(Math.random() * (num2 - num1)) + num1;
}
console.log("Random number:", randomBetween(20, 50))