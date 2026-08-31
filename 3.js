const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;



const workshopFullScore = 60;
const workshopWeight = 20;
const totalFullScore = 100;
const targetScore = 80;




const workshopScore = (workshopRaw / workshopFullScore) * workshopWeight;


const totalScore = workshopScore + attendance + project + midterm + final;


const percentage = (totalScore / totalFullScore) * 100;


const remainingScore = targetScore - totalScore;



console.log(`
===== CE385 ใบสรุปคะแนน =====
Workshop     : ${workshopScore.toFixed(2)} / ${workshopWeight}
Attendance   : ${attendance.toFixed(2)}
Project      : ${project.toFixed(2)}
Midterm      : ${midterm.toFixed(2)}
Final        : ${final.toFixed(2)}
-----------------------------
คะแนนรวม     : ${totalScore.toFixed(2)} / ${totalFullScore}
เปอร์เซ็นต์   : ${percentage.toFixed(2)}%
ขาดอีก       : ${remainingScore.toFixed(2)} คะแนน
=============================
`);
