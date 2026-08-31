const greeting = "สวัสดี";
const age = 20;
const isStudent = true;
let studentName;
const emptyValue = null;
const subjects = ["JavaScript", "HTML", "CSS"];

console.log("===== ส่วนที่ 1 =====");
console.log(`ค่า : ${greeting} | ชนิด : ${typeof greeting}`);
console.log(`ค่า : ${age} | ชนิด : ${typeof age}`);
console.log(`ค่า : ${isStudent} | ชนิด : ${typeof isStudent}`);
console.log(`ค่า : ${studentName} | ชนิด : ${typeof studentName}`);
console.log(`ค่า : ${emptyValue} | ชนิด : ${typeof emptyValue}`);
console.log(`ค่า : ${subjects} | ชนิด : ${typeof subjects}`);



console.log("\n===== ส่วนที่ 2 =====");


console.log(`typeof null ได้ผลว่า : ${typeof null}`);
console.log(`typeof null เป็นชนิดที่ถูกต้องตามความเป็นจริงหรือไม่ : ${typeof null === "object"}`);


let notAssigned;
console.log(`ตัวแปรที่ยังไม่กำหนดค่า : ${typeof notAssigned}`);

// Number("abc") แปลงไม่ได้ จึงได้ NaN
const notANumber = Number("abc");
console.log(`typeof NaN ได้ผลว่า : ${typeof notANumber}`);
console.log(`ค่าที่ได้เป็น NaN หรือไม่ : ${Number.isNaN(notANumber)}`);



const inputAge = "20";
const inputScore = "85.5";


const ageNumber = Number(inputAge);
const agePlusFive = ageNumber + 5;


const scoreNumber = Number(inputScore);

console.log("\n===== ส่วนที่ 3 =====");
console.log(`อายุหลังบวก 5 : ${agePlusFive}`);
console.log(`คะแนน : ${scoreNumber.toFixed(1)}`);

console.log(`inputAge === 20 : ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 : ${Number(inputAge) === 20}`);
