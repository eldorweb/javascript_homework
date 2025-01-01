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

    
    */
