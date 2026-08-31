// ===============================
// Workshop 2 - ข้อที่ 1
// ฟังก์ชันคำนวณคะแนน
// ===============================

// เกณฑ์คะแนน
const MAX_SCORE = 100;

const GRADE_RULES = [
  { min: 80, grade: "A" },
  { min: 75, grade: "B+" },
  { min: 70, grade: "B" },
  { min: 65, grade: "C+" },
  { min: 60, grade: "C" },
  { min: 55, grade: "D+" },
  { min: 50, grade: "D" },
  { min: 0, grade: "F" }
];

// ตรวจสอบคะแนน
const isValidScore = (score) =>
  typeof score === "number" &&
  score >= 0 &&
  score <= MAX_SCORE;

// ตัดเกรด
const toGrade = (score) => {
  if (!isValidScore(score)) {
    return undefined;
  }

  return GRADE_RULES.find((rule) => score >= rule.min)?.grade;
};

// คำนวณคะแนน Workshop
const calculateWorkshopScore = (
  raw,
  full = 60,
  weight = 20
) => {
  return (raw / full) * weight;
};

// คำนวณคะแนนรวม
const calculateTotal = (
  workshop,
  attendance,
  project,
  midterm,
  final
) => {
  return workshop + attendance + project + midterm + final;
};


// ===============================
// ส่วนที่ 2 - ข้อมูลนักศึกษา
// ===============================

const students = [
  {
    id: "65001",
    name: "สมชาย",
    workshop: 18,
    attendance: 8,
    project: 15,
    midterm: 20,
    final: 25
  },
  {
    id: "65002",
    name: "สมหญิง",
    workshop: 16,
    attendance: 9,
    project: 17,
    midterm: 22,
    final: 28
  },
  {
    id: "65003",
    name: "วิชัย",
    workshop: 12,
    attendance: 6,
    project: 10,
    midterm: 18,
    final: 20
  }
];


// ===============================
// คำนวณและแสดงผลเป็นตาราง
// ===============================

const results = students.map((student) => {
  const total = calculateTotal(
    student.workshop,
    student.attendance,
    student.project,
    student.midterm,
    student.final
  );

  return {
    id: student.id,
    name: student.name,
    total: total,
    grade: isValidScore(total)
      ? toGrade(total)
      : "คะแนนไม่ถูกต้อง"
  };
});

console.table(results);


// ===============================
// ส่วนที่ 3 - พิสูจน์ค่าเริ่มต้น
// ===============================

const score1 = calculateWorkshopScore(48);
const score2 = calculateWorkshopScore(48, 60, 20);

console.log("calculateWorkshopScore(48) =", score1);
console.log(
  "calculateWorkshopScore(48, 60, 20) =",
  score2
);

console.log("ได้ผลเท่ากัน =", score1 === score2);




const score3 = calculateWorkshopScore(48, undefined, 25);

console.log(
  "calculateWorkshopScore(48, undefined, 25) =",
  score3
);
