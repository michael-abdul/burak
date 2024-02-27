// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function abc(a:number[]) {
  const b = a.filter((a)=>{
     return a>0;
 });
const c=b.join("");
  console.log(c);
}
abc([7,-9,5,-4,2]);


// Project Standards:
// -Logging standards
// -Naming standards
// function, method, variable => camelCase
// class => PASCAL
// folder = KEBAB
// css => Snake                        button_style
// -Error handling























/*g-TASK: 

 Shunday function tuzing,
  u string qabul qilib teskari qilib return qilsin
 MASALAN: gerReverse("hello") return qiladi "olleh"


 */


// function str(txt: string): void {
//     const a: string = txt.split('').reverse().join('');
//     console.log(a);
//   }
  
//   str('hello');
  










/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


*/
// function getHighestIndex(arr) {
//     const highestIndex = arr.reduce((acc, cur, idx) => cur > arr[acc] ? idx : acc, 0);
//     console.log(highestIndex);
//     return highestIndex;
// }

// getHighestIndex([5, 21, 12, 21, 8]); 





































// // F-TASK: 

// // Shunday findDoublers function tuzing,
// // unga faqat bitta string argument pass bolib,
// //  agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// // MASALAN: getReverse("hello") return true return qiladi
// function findDoublers(str) {
//      const a = str.split('').some((total, ele, arr) => total == arr[ele+1]);
//  console.log(a)
// }

// findDoublers('daddy');
 


































//Task-E
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function str (a){
// const b = a.split('').reverse().join('');
// console.log(b);
// }
// str('AssalomuAleykum');