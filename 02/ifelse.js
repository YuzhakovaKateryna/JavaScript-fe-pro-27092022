let product = prompt ('Кількість  одиниць товару')
let discount1 = 0.8;
let discount2 = 0.9;
let price = 30;
let finalPrice
// if (product >= 5) {
//     finalPrice =product*price*discount1
//     console.log (`Price with discount is ${finalPrice}`);
// }
// else if (product < 5) {
//     finalPrice=product*price*discount2
//     console.log (`Price with discount is ${finalPrice}`);
// }


finalPrice = product >= 5 ? finalPrice = product * price * discount1 : finalPrice = product * price * discount2
console.log (`Price with discount is ${finalPrice}`);