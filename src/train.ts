
// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin.
// String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

function calculate(str:string) {
  const a = str.split('+').map(Number).reduce((acc, num) => acc + num, 0);;
console.log(a);
};
calculate('3+4');


















































// // Q-TASK:

// // Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// // MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// interface T {
//   [key: string]: any;
// }

// function hasProperty(obj:T, str:string) {
//   const a =  Object.keys(obj).includes(str);
// console.log(a);
// }
// hasProperty({name: "BMW", model: "M3"}, "model"); 
// hasProperty({name: "BMW", model: "M3"}, "year"); 

































// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
// interface T {
//   [key: string]: any;
// }

// function objectToArray(obj:T) {
//   const a = Object.keys(obj).map(ele => [ele, obj[ele]]);
//    console.log(a)
//  }
//  objectToArray({a: 10, b: 20});






























































// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
// function calculateSumOfNumbers(arr: (number | string | object | boolean)[]): number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       const value= arr[i];
//       if (typeof value === 'number') {
//           sum += value;
//       }
//   }
//   return sum;
// }

// const result: number = calculateSumOfNumbers([10, "10", {number: 10}, true, 35]);
// console.log(result); 
















































// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;


// function palindromCheck(str:string){
//    const a = str=== str.split('').reverse().join('');
//     console.log(a);
//   }
//   palindromCheck("dad");
//   palindromCheck("son");


























  // // M-TASK: 

// // Shunday function yozing, u raqam lard an tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// // MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// interface T {
// number: number;
// square:number;
// }

// function getSquareNumbers (number: number[]) :T[]{
//   const result:T[] = number.map(num => ({ number: num, square: num * num }));
//     console.log(result);
//   return result;
// };

// getSquareNumbers([10, 11, 12, 13]); 

























































// L-TASK: 

// Shunday function yozing, u string qabul qilsin 
// va string ichidagi hamma sozlarni chappasiga yozib va
// sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function str(txt:string):void {
//   const a = txt.split(' ').map(ele => ele.split('').reverse().join('')).join(' ');
//   console.log(a);

  

// }
// str("we like coding")





































// Validations:
// FD validation
// BD vatidation
// Database vaedation

// K-TASK: 

// Shunday function yozing, u string qabul qilsin 
// va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(txt:string):number{
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   return txt.toLowerCase().split("").reduce((count, value) => {
//     if (vowels.includes(value)) {
//       return count + 1;
//     } else {
//       return count;
//     }
//   }, 0);
// }

// console.log(countVowels("string"));







//Cookie:
// request join
//self destroy






// Traditional FD => BSSR  Admin=>EJS
// Modern FD => SPA User => REACT




// I-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"



// function getDigits(str:string):void{
//   const a = str.split('').filter(ele => !isNaN(Number(ele))).join('');
//   console.log(a);
// }

// getDigits("kfjdfslhf545kj4l5kj4bj5kl4");








// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


// function abc(a:number[]) {
//   const b = a.filter((a)=>{
//      return a>0;
//  });
// const c=b.join("");
//   console.log(c);
// }
// abc([7,-9,5,-4,2]);


// Project Standards:
// -Logging standards
// -Naming standards
// function, method, variable => camelCase
// class => PASCAL
// folder, file = KEBAB
// css => Snake                        button_style
// -Error handling



//Traditional API
//Rest API
//GraphQL API





















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