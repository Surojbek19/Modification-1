//TASK H:
// Sjunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
//faqat positive raqamlarni olib string holatida return qilsin 
//MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(array: number[]) {
    let positiveNum = array.filter(num => num >= 0).join("");
    return positiveNum;
    
}

console.log(getPositive([1, -4, 2]));