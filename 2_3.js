const students = [
  {
    id: "65001",
    name: "สมชาย",
    major: "CE",
    score: 85
  },
  {
    id: "65002",
    name: "สมหญิง",
    major: "IT",
    score: 72
  },
  {
    id: "65003",
    name: "วิชัย",
    major: "CE",
    score: 48
  },
  {
    id: "65004",
    name: "มานะ",
    major: "IT",
    score: 91
  },
  {
    id: "65005",
    name: "มานี",
    major: "CE",
    score: 67
  },
  {
    id: "65006",
    name: "ปิติ",
    major: "IT",
    score: 45
  }
];

const PASSING_SCORE = 50;

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

const getNames = (students) => {
  return students.map(student => student.name);
};


const getPassedStudents = (students) => {
  return students.filter(
    student => student.score >= PASSING_SCORE
  );
};


const getTotalScore = (students) => {
  return students.reduce(
    (total, student) => total + student.score,
    0
  );
};


const getAverageScore = (students) => {
  if (students.length === 0) {
    return 0;
  }

  const total = getTotalScore(students);

  return Number((total / students.length).toFixed(2));
};


const toGrade = (score) => {
  return GRADE_RULES.find(
    rule => score >= rule.min
  ).grade;
};


const countByGrade = (students) => {
  return students.reduce((result, student) => {
    const grade = toGrade(student.score);

    result[grade] = (result[grade] || 0) + 1;

    return result;
  }, {});
};


const getTopStudent = (students) => {
  if (students.length === 0) {
    return undefined;
  }

  return students.reduce(
    (top, student) =>
      student.score > top.score ? student : top
  );
};


console.log("ชื่อทั้งหมด");
console.log(getNames(students));

console.log("\nนักศึกษาที่สอบผ่าน");
console.log(getPassedStudents(students));

console.log("\nคะแนนรวม");
console.log(getTotalScore(students));

console.log("\nคะแนนเฉลี่ย");
console.log(getAverageScore(students));

console.log("\nจำนวนตามเกรด");
console.log(countByGrade(students));

console.log("\nนักศึกษาคะแนนสูงสุด");
console.log(getTopStudent(students));



const cePassedAverage = students
  .filter(student =>
    student.major === "CE" &&
    student.score >= PASSING_SCORE
  )
  .map(student => student.score)
  .reduce(
    (total, score, index, array) =>
      total + score / array.length,
    0
  );

console.log("\nค่าเฉลี่ย CE ที่สอบผ่าน");
console.log(cePassedAverage);


const emptyStudents = [];

console.log("\n===== Array ว่าง =====");

console.log("getNames([]) =", getNames(emptyStudents));

console.log(
  "getPassedStudents([]) =",
  getPassedStudents(emptyStudents)
);

console.log(
  "getTotalScore([]) =",
  getTotalScore(emptyStudents)
);

console.log(
  "getAverageScore([]) =",
  getAverageScore(emptyStudents)
);

console.log(
  "countByGrade([]) =",
  countByGrade(emptyStudents)
);

console.log(
  "getTopStudent([]) =",
  getTopStudent(emptyStudents)
);
