function getMenuPrice(menu) {
    switch (menu) {
        // จงใจใช้ fall-through เพราะทั้ง 3 เมนูมีราคา 50 บาทเท่ากัน
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;

        case "ผัดไทย":
            return 60;

        case "ต้มยำกุ้ง":
            return 120;

        default:
            return 0;
    }
}

// ฟังก์ชันหาตัวคูณขนาดอาหาร
function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;

        case "พิเศษ":
            return 1.5;

        case "จัมโบ้":
            return 2;

        default:
            return 1;
    }
}

// รายการออร์เดอร์
const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
    { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวหมูแดง", size: "ธรรมดา", qty: 1 },
    { menu: "ก๋วยเตี๋ยว", size: "พิเศษ", qty: 1 }
];

// คำนวณราคารวมทั้งบิล
let totalBill = 0;

for (const order of orders) {
    const menuPrice = getMenuPrice(order.menu);
    const sizeMultiplier = getSizeMultiplier(order.size);
    const itemTotal = menuPrice * sizeMultiplier * order.qty;

    totalBill += itemTotal;

    console.log(
        `${order.menu} (${order.size}) x${order.qty} = ${itemTotal} บาท`
    );
}

console.log("-------------------------");
console.log(`ราคารวมทั้งบิล = ${totalBill} บาท`);
