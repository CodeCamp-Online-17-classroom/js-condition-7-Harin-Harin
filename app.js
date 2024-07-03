let a = Number(prompt("ใส่ค่าตัวเลขตัวที่ 1"));
let b = Number(prompt("ใส่ค่าตัวเลขตัวที่ 2"));
let sum = a + b;
console.log(a);
console.log(b);
console.log(sum);
if (isNaN(sum)){
    alert('Invalid number');
} else{
    alert(`ผลรวมคือ ${sum}`);}
