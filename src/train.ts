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

function countVowels(word: string) {
   const vowelSeparate = ["a", "e", "i", "o", "u"];
   let wordSeparate = word.toLowerCase().split("");
   let count = 0;
   for(let i = 0; i < wordSeparate.length; i++) {
      for(let j = 0; j < vowelSeparate.length; j++) {
         if(wordSeparate[i] === vowelSeparate[j]) {
            count++;
         }
      }
   }
return count;
}
console.log(countVowels("AUSTRALIA"));
