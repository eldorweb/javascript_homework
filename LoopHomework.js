/*
1 dan 100 gacha bolgan sonlar ichidagi 3 ga bolinadigan sonlarni yig'indisini topish dasturni tuzing.

solution: 

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        sum += i;
    };
}
console.log(sum);
_______________________________________________________________________________________________________________________1

let i = 1;
let sum = 0;
while (i <= 100) {
    if (i % 3 === 0) {
        sum += i;
    }
    i++;
}
console.log(sum);
_______________________________________________________________________________________________________________________2
hafta kunlarini ifodalovchi dastur tuzing. Dasturda 1 dan 7 gacha bo'lgan sonlar ifodalangan bo'lsin.

solution: 

let weekDay = function (week) {
switch (week) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("Shanba");
        break;
    case 7:
        console.log("Yakshanba");
        break;
    default:
        console.log("Bunday hafta kuni yo'q");
}
}
weekDay(1);
_______________________________________________________________________________________________________________________3

svetafor ifodalovchi dastur tuzing. Dasturda qizil, sariq va yashil ranglar ifodalangan bo'lsin.
let color = function (color) { 
switch (color) {
    case "qizil":
        console.log("Tugri yuring");
        break;
    case "sariq":
        console.log("Tayyor bo'ling");
        break;
    case "yashil":
        console.log("Yurishga ruxsat berildi");
        break;
    default:
        console.log("Noto'g'ri rang");
}
}
_______________________________________________________________________________________________________________________4

switch orqali calculator tuzing. Dasturda 2 ta son kiritiladi va 1 ta amal belgisi. Amal belgilari: +, -, *, / bo'lsin.

let calculator = function (num1, num2, operator) {
switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Noto'g'ri amal belgisi");
}
}
_______________________________________________________________________________________________________________________5

array ichidagi eng katta sonni topish dasturini tuzing.
let arr = [145, 452, 793, 774, 345, 76, 7, 98, 90, 100];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);
_______________________________________________________________________________________________________________________6

array ichidagi eng kichik sonni topish dasturini tuzing.
let arr = [145, 452, 793, 774, 345, 76, 7, 98, 90, 100];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);
_______________________________________________________________________________________________________________________7

array ichidagi sonlarni yig'indisini topish dasturini tuzing.
let arr = [145, 452, 793, 774, 345, 76, 7, 98, 90, 100];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
_______________________________________________________________________________________________________________________8

while orqali array ichidagi sonlarni yig'indisini topish dasturini tuzing.
let arr = [145, 452, 793, 774, 345, 76, 7, 98, 90, 100];
let i = 0;
let sum = 0;
while (i < arr.length) {
    sum += arr[i];
    i++;
}
console.log(sum);
_______________________________________________________________________________________________________________________9

switch orqali kofeshopda menuda tanlanganda narxini chiqaruvchi dastur tuzing.
let menu = ["Americano", "Latte", "Cappuccino", "Espresso", "Macchiato"];
let chooseBevarage = function (drink) {
switch (drink) {
    case "Americano":
        console.log("Narxi 1500 won");
        break;
    case "Latte":
        console.log("Narxi 2000 won");
        break;
    case "Cappuccino":
        console.log("Narxi 2500 won");
        break;
    case "Espresso":
        console.log("Narxi 3000 won");
        break;
    case "Macchiato":
        console.log("Narxi 3500 won");
        break;
    default:
        console.log("Sen bu yerga nima ovqatlanganmi keldingmi? 😂");
}
}
chooseBevarage("Latte");
chooseBevarage("Somsa");
_______________________________________________________________________________________________________________________10

bo'sh array yarating va unga 20 gacha boi'lgan sonlarni kiriting. Keyin array ichidagi sonlar ichidagi 2 ga bo
linadigan sonlarni topib ularni o'rniga ikkinchi darajajisini chiqaring.

let arr = [ ];
for (let i = 1; i <= 20; i++) {
    arr.push(i);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr[i] = Math.pow(arr[i], 2);
    }
}
console.log(arr);
_______________________________________________________________________________________________________________________11

bo'sh array yarating va unga 20 gacha boi'lgan sonlarni kiriting. Keyin array ichidagi sonlar ichidagi 2 ga bo
linadigan sonlarni topib ularni o'rniga ikkinchi darajajisini chiqaring. While orqali.

let arr = [ ];
let i = 1;
while (i <= 20) {
    arr.push(i);
    i++;
}
let i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        arr[i] = Math.pow(arr[i], 2);
    }
    i++;
}
console.log(arr);
_______________________________________________________________________________________________________________________12

universitetdagi (Harfli sistemada) ballingizni funckisya orqali kiritilganda qanysi bahoga teng bolishini aniqlaydigan dastur tuzing.
let grade = function (point) {
switch (point) {
    case "A":
        console.log("90 dan katta va 100 dan kam");
        break;
    case "B":
        console.log("80 dan katta va 90 dan kam");
        break;
    case "C":
        console.log("70 dan katta va 80 dan kam");
        break;
    case "D":
        console.log("60 dan katta va 70 dan kam");
        break;
    case "E":
        console.log("50 dan katta va 60 dan kam");
        break;
    case "F":
        console.log("50 dan kam");
        break;
    default:
        console.log("Noto'g'ri belgi");
}
}
grade("A");
_______________________________________________________________________________________________________________________13

faktoriyalni topish dasturini tuzing. funksiya va for loop orqali.

let factorial = function (num) {
let result = 1;
for (let i = 1; i <= num; i++) {
    result *= i;
}
return result;
}
console.log(factorial(5));
_______________________________________________________________________________________________________________________14

n chi fibonachi sonini topish dasturini tuzing. funksiya va for loop orqali.

let fibonacci = function (n) {
let a = 1;
let b = 1;
let c;
for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
}
return b;
}
console.log(fibonacci(5));
_______________________________________________________________________________________________________________________15

n chi fibonachi sonini topish dasturini tuzing. funksiya va while loop orqali.

let fibonacci = function (n) {
let a = 1;
let b = 1;
let c;
let i = 3;
while (i <= n) {
    c = a + b;
    a = b;
    b = c;
    i++;
}
return b;
}
console.log(fibonacci(5));
_______________________________________________________________________________________________________________________16

1 dan 10 gacha bolgan sonlarni reverse qilib chiqaruvchi dastur tuzing.
for orqali

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
_______________________________________________________________________________________________________________________17

1 dan 10 gacha bolgan sonlarni reverse qilib chiqaruvchi dastur tuzing.
while orqali

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
_______________________________________________________________________________________________________________________18


n gacha bolgan sonlar ichidagi 2 chi daraja qiymatga ega bolgan sonlarni arrayga solib chiqarish dasturini tuzing. funksiya va for loop orqali.


let arr = [ ];
let daraja = function (n) {
for (let i = 1; i <= n; i++) {
    sqr = Math.floor(Math.sqrt(i));
    if( Math.pow(sqr, 2) === i) {
        arr.push(i);
    }
}
return arr;
}
console.log(daraja(100));
_______________________________________________________________________________________________________________________19

n gacha bolgan sonlar ichidagi 2 chi daraja qiymatga ega bolgan sonlarni arrayga solib chiqarish dasturini tuzing. funksiya va while loop orqali.

let arr = [ ];
let daraja = function (n) {
let i = 1;
while (i <= n) {
    sqr = Math.floor(Math.sqrt(i));
    if( Math.pow(sqr, 2) === i) {
        arr.push(i);
    }
    i++;
}
return arr;
}
console.log(daraja(100));
_______________________________________________________________________________________________________________________20
*/

/*
berilgan kattahonali sonni raqamlarga bolib yig'indisini topish dasturini tuzing. funksiya va for loop orqali.
let number = function (num) {
let sum = 0;
for(let i = 0; i <= num; i++){
    let digit = num % 10;
    sum+= digit;
    num = Math.floor(num / 10);
}
console.log(sum);
}
number(1234);
________________________________________________________________________________________________________________________21

berilgan kattahonali sonni raqamlarga bolib yig'indisini topish dasturini tuzing. funksiya va while loop orqali.
let number = function (num) {
let sum = 0;
while(num > 0){
    let digit = num % 10;
    sum+= digit;
    num = Math.floor(num / 10);
}
console.log(sum);
}
number(1234);
________________________________________________________________________________________________________________________22

berilgan kattahonali sonni raqamlarga bolib ulat ichidan eng katta raqamni topish dasturini tuzing. funksiya va for loop orqali.

let number = function (num) {
let max = 0;
for(let i = 0; i <= num; i++){
    let digit = num % 10;
    if(digit > max){
        max = digit;
    }
    num = Math.floor(num / 10);
}
console.log(max);
}
number(1234);
________________________________________________________________________________________________________________________23

berilgan kattahonali sonni raqamlarga bolib ulat ichidan eng katta raqamni topish dasturini tuzing. funksiya va while loop orqali.


let number = function (num) {
let max = 0;
let i = 0;
while(i <= num){
    let digit = num % 10;
    if(digit > max){
        max = digit;
    }
    num = Math.floor(num / 10);
    i++;
}
console.log(max);
}
number(1583984);
________________________________________________________________________________________________________________________24

n raqamini va ungacha bolgan sonlarini ozini qiymaticha takrolab ustma ust chiqarish dastur tuzing. funksiya va for loop orqali.

let number = function (n) {
for(let i = 1; i <= n; i++){
    let str = "";
    for(let j = 0; j < i; j++){
        str += i;
    }
    console.log(str);
}
}
number(52);
________________________________________________________________________________________________________________________25

n raqamini va ungacha bolgan sonlarini ozini qiymaticha takrolab ustma ust chiqarish dastur tuzing. funksiya va while loop orqali.

let number = function (n) {
let i = 1;
while(i <= n){
    let str = "";
    let j = 0;
    while(j < i){
        str += i;
        j++;
    }
    console.log(str);
    i++;
}
}
number(52);
________________________________________________________________________________________________________________________26

*/