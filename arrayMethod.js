/* 
    bereilgan array elementlarini map methodi orqali 2 ga ko'paytirib chiqaruvchi funksiya yarating

    let arr = [23, 44, 2, 10, 98];
    let newarr = arr.map(num => num *2};
    console.log(newarr);
    _______________________________________________________________________________________1
    
    berilgan array elementlarini ozini indexi bilan kopaytmasini chiqaruvchi funksiya yarating map methodi orqali
    
    let arr = [23, 44, 2, 10, 98];
    let newarr = arr.map((num, index) => num * index);
    console.log(newarr);
    _______________________________________________________________________________________2
    
    array elelmentlarning kvadratini chiqaruvchi funksiya yarating map methodi orqali
    
    let arr = [23, 44, 2, 10, 98];
    let newarr = arr.map(num => num * num);
    console.log(newarr);
    _______________________________________________________________________________________3
    
    array elementlari ichidan 20 dan kichik elementlarni chiqaruvchi funksiya yarating filter methodi orqali
    
    let arr = [23, 44, 2, 10, 98];
    let newarr = arr.filter(num => num < 20);
    console.log(newarr);
    _______________________________________________________________________________________4

    array elementlsrini ozini indexiga qoldiqsiz bolinganlarni chiqaruvschi funksiya yarating filter methodi orqali

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.filter((num, index) => num % index === 0);
    console.log(newarr);
    _______________________________________________________________________________________5

    array elementlarini default qiymatga qoshganda yigindi 5 ga bolinadigan elementlarni chiqaruvchi funksiya yarating filter methodi orqali
    
    let arr = [23, 44, 3, 10, 95];
    let defaul = 10;
    let newarr = arr.filter((num, defaul) => (num + defaul) % 5 === 0);
    console.log(newarr);
    _______________________________________________________________________________________6

    array elementlerini umumiy yigindisini chiqaruvchi funksiya yarating reduce methodi orqali

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.reduce((total, num) => total + num);
    console.log(newarr);
    _______________________________________________________________________________________7

    array elelmentlarini keyingi index elementi kvadrati bilan yigindisini chiqaruvchi funksiya yarating reduce methodi orqali

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.reduce((total, num) => total + num ** 2);
    console.log(newarr);
    _______________________________________________________________________________________8

    array elementlarini indexiga kopaytamisi umumiy yiginsdisini chiqaruvchi funksiya yarating reduce methodi orqali, boshlangich qiymat 5 bo'lsin

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.reduce((total, num, index) => total + num * index, 5);
    console.log(newarr);
    _______________________________________________________________________________________9

    array elemenetlarini har birini consolga chiqaruvchi funksiya yarating forEach methodi orqali

    let arr = [23, 44, 3, 10, 95];
    arr.forEach(num => console.log(num));
    _______________________________________________________________________________________10

    array elementlarini indexi bilan birga consolga chiqaruvchi funksiya yarating forEach methodi orqali

    let arr = [23, 44, 3, 10, 95];
    arr.forEach((num, index) => console.log(`${index} chi element: ${num}`));
    _______________________________________________________________________________________11

    array elementlarini umumiy yigindisini chiqaruvchi funksiya yarating forEach methodi orqali

    let arr = [23, 44, 3, 10, 95];
    let total = 0;
    arr.forEach(num => total += num);
    console.log(total);
    _______________________________________________________________________________________12

    find methodi orqali array elementlaridan 20 dan katta birinchi elementni topuvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.find(num => num > 20);
    console.log(newarr);
    _______________________________________________________________________________________13

    find methodi orqali 3 ga qoldiqsiz bo'linadigan birinchi elementni topuvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.find(num => num % 3 === 0);
    console.log(newarr);
    _______________________________________________________________________________________14

    find methodi orqali ozini indexi bilan qoldiqsiz bo'linadigan birinchi elementni topuvchi funksiya yarating. 1 chi indexdan tashqari

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.find((num, index) => num % index === 0 && index !== 0);
    console.log(newarr);
    _______________________________________________________________________________________15

    findIndex methodi orqali array elementlaridan 20 dan katta birinchi elementning indexini topuvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.findIndex(num => num > 20);
    console.log(newarr);
    _______________________________________________________________________________________16

    findIndex methodi orqali 3 ga qoldiqsiz bo'linadigan birinchi elementning indexini topuvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.findIndex(num => num % 3 === 0);
    console.log(newarr);
    _______________________________________________________________________________________17

    findIndex methodi orqali ozini indexi bilan qoldiqsiz bo'linadigan birinchi elementning indexini topuvchi funksiya yarating. 1 chi indexdan tashqari

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.findIndex((num, index) => num % index === 0 && index !== 0);
    console.log(newarr);
    _______________________________________________________________________________________18

    includes methodi orqali 3 chi indexdan boshlab 10 elementini qidiruvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.includes(10, 3);
    console.log(newarr);
    _______________________________________________________________________________________19

    includes methodi orqali banana elementini qidiruvchi funksiya yarating

    let fruits = ['apple', 'banana', 'mango', 'orange'];
    let newfruits = fruits.includes('banana');
    console.log(newfruits);
    _______________________________________________________________________________________20

    sort methodi orqali array elementlarini kichikdan kattaga tartiblang

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.sort((a, b) => a - b);
    console.log(newarr);
    _______________________________________________________________________________________21

    sort methodi orqali array elementlarini kattadan kichikga tartiblang

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.sort((a, b) => b - a);
    console.log(newarr);
    _______________________________________________________________________________________22

    sort methodi orqali array elementlarini alifbo bo'yicha tartiblang

    let fruits = ['apple', 'banana', 'mango', 'orange'];
    let newfruits = fruits.sort();
    console.log(newfruits);
    _______________________________________________________________________________________23

    reverse methodi orqali array elementlarini teskari tartibda chiqaruvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.reverse();
    console.log(newarr);
    _______________________________________________________________________________________24

    concat methodi orqali 2 ta arrayni birlashtiruvchi funksiya yarating

    let arr1 = [23, 44, 3, 10, 95];
    let arr2 = [2, 4, 6, 8, 10];
    let newarr = arr1.concat(arr2);
    console.log(newarr);
    _______________________________________________________________________________________25

    concat methodi orqali 4 ta arrayni birlashtiruvchi funksiya yarating

    let arr1 = [23, 44, 3, 10, 95];
    let arr2 = [2, 4, 6, 8, 10];
    let arr3 = [1, 3, 5, 7, 9];
    let arr4 = [11, 13, 15, 17, 19];
    let newarr = arr1.concat(arr2, arr3, arr4);
    console.log(newarr);
    _______________________________________________________________________________________26

    join methodi orqali array elementlarini vergul bilan ajratib chiqaruvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.join(',');
    console.log(newarr);
    _______________________________________________________________________________________27

    every methodi orqali barcha array elementlarini 10 dan kichikligini tekshiruvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.every(num => num < 10);
    console.log(newarr);
    _______________________________________________________________________________________28

    some methodi orqali array elementlaridan kamida bitta element 10 dan katta ekanligini tekshiruvchi funksiya yarating

    let arr = [23, 44, 3, 10, 95];
    let newarr = arr.some(num => num > 10);
    console.log(newarr);
    _______________________________________________________________________________________29

    flat methodi orqali array ichidagi array elementlarini birlashtiruvchi funksiya yarating

    let arr = [23, 44, [3, 10], 95];
    let newarr = arr.flat();
    console.log(newarr);
    _______________________________________________________________________________________30

    */
