let money = prompt("nhập số tiền gửi: ");
let interest  = 6.9/100 ;
let year = prompt("số năm gửi tiền: ");
let total = money * (1 + interest) ** year;
document.write("số tiền lãi là: "+ total);