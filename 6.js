const correctUsername = "admin";
const correctPassword = "ce385pass";

// ฟังก์ชันตรวจสอบการเข้าสู่ระบบ
function login(inputUser, inputPass, role, isActive, age) {
 
    if (inputUser !== correctUsername || inputPass !== correctPassword) {
        return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง 401";
    }

    // หลังจากยืนยันตัวตนแล้วจึงตรวจสอบสถานะบัญชี
    if (isActive === false) {
        return "บัญชีนี้ถูกระงับการใช้งาน 403";
    }

    // ตรวจสอบอายุหลังจากยืนยันตัวตนแล้ว
    if (age < 18) {
        return "อายุไม่ถึงเกณฑ์";
    }

    // ตรวจสอบสิทธิ์ตาม role
    if (role === "อาจารย์") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล) 200";
    }

    if (role === "นักศึกษา") {
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป) 200";
    }

    return "ไม่พบสิทธิ์ผู้ใช้งาน";
}

// ===== ส่วนที่ 2: ทดสอบการเข้าสู่ระบบ =====

const testCases = [
    {
        name: "สำเร็จ (อาจารย์)",
        username: "admin",
        password: "ce385pass",
        role: "อาจารย์",
        isActive: true,
        age: 30
    },
    {
        name: "สำเร็จ (นักศึกษา)",
        username: "admin",
        password: "ce385pass",
        role: "นักศึกษา",
        isActive: true,
        age: 20
    },
    {
        name: "รหัสผ่านผิด",
        username: "admin",
        password: "wrongpass",
        role: "นักศึกษา",
        isActive: true,
        age: 20
    },
    {
        name: "ชื่อผู้ใช้ผิด",
        username: "user123",
        password: "ce385pass",
        role: "นักศึกษา",
        isActive: true,
        age: 20
    },
    {
        name: "บัญชีถูกระงับ",
        username: "admin",
        password: "ce385pass",
        role: "นักศึกษา",
        isActive: false,
        age: 20
    },
    {
        name: "อายุไม่ถึงเกณฑ์",
        username: "admin",
        password: "ce385pass",
        role: "นักศึกษา",
        isActive: true,
        age: 17
    }
];

// วนทดสอบทุกกรณี
for (const testCase of testCases) {
    const result = login(
        testCase.username,
        testCase.password,
        testCase.role,
        testCase.isActive,
        testCase.age
    );

    console.log(`${testCase.name} → ${result}`);
}

