const students = [
  {
    id: "65001",
    name: "สมชาย",
    major: "CE",
    score: 85,
    contact: {
      email: "somchai@gmail.com",
      phone: "0811111111"
    }
  },
  {
    id: "65002",
    name: "สมหญิง",
    major: "IT",
    score: 72,
    contact: {
      email: "somying@gmail.com",
      phone: "0822222222"
    }
  },
  {
    id: "65003",
    name: "วิชัย",
    major: "CE",
    score: 48,
    contact: {
      email: "wichai@gmail.com",
      phone: "0833333333"
    }
  },
  {
    id: "65004",
    name: "มานะ",
    major: "IT",
    score: 91,
    contact: {
      email: "mana@gmail.com",
      phone: "0844444444"
    }
  },
  {
    id: "65005",
    name: "มานี",
    major: "CE",
    score: 67,
    contact: {
      email: "manee@gmail.com",
      phone: "0855555555"
    }
  },
  {
    id: "65006",
    name: "ปิติ",
    major: "IT",
    score: 45,
    contact: {
      email: "piti@gmail.com",
      phone: "0866666666"
    }
  }
];


const findById = (students, id) => {
  return students.find((student) => student.id === id);
};


// ค้นหาจากสาขา
const findByMajor = (students, major) => {
  return students.filter((student) => student.major === major);
};


// ตรวจสอบว่ามีนักศึกษาที่สอบตกหรือไม่
const hasFailingStudent = (students) => {
  return students.some((student) => student.score < 50);
};


// ค้นหา Email
const getEmail = (students, id) => {
  const student = findById(students, id);

  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};



console.log("ค้นหา ID 65001:");
console.log(findById(students, "65001"));

console.log("\nค้นหา ID 9999:");
console.log(findById(students, "9999"));

console.log("\nค้นหา CE:");
console.log(findByMajor(students, "CE"));

console.log("\nมีนักศึกษาตกหรือไม่:");
console.log(hasFailingStudent(students));

console.log("\nEmail ของ 65001:");
console.log(getEmail(students, "65001"));

console.log("\nEmail ของ 9999:");
console.log(getEmail(students, "9999"));


const newStudent = {
  id: "65007",
  name: "เอกชัย",
  major: "CE",
  score: 78
};

const updatedStudents = [...students, newStudent];

console.log("\nEmail ของนักศึกษา 65007:");
console.log(getEmail(updatedStudents, "65007"));
