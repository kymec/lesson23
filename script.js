"use strict"

//1) Задание
var date1 = new Date();
var minLeft = (23 - date1.getHours()) * 60 + (60 - date1.getMinutes());
console.log(minLeft);

//2) Задание
var date2 = new Date();
var secPassed = (date2.getHours() * 60 + date2.getMinutes()) * 60 + date2.getSeconds();
console.log(secPassed);

//3) Задание
var date3 = new Date(2013, 0, 25);
console.log(date3.toLocaleString('ru', {weekday: 'long'}));

//4) Задание
var birthday = prompt('Введите дату своего рождения в формате 1990-10-01');
if (birthday != null){
    var arrDate = birthday.split('-');
    var date4 = new Date();
    var birthDate = new Date(date4.getFullYear(), arrDate[1] - 1, arrDate[2]);
    var daysLeft = Math.floor((birthDate - date4) / (1000 * 60 * 60 * 24) + 1);
    var result;
    if (daysLeft < 0 && date4.getFullYear() % 4 == 3){ //если день рождения в следующем году и следующий год высокосный
        result = daysLeft + 366;
    }else if(daysLeft < 0 && date4.getFullYear() % 4 != 3){ //если день рождения в следующем году и следующий год не высокосный
        result = daysLeft + 365;
    } else {
        result = daysLeft;
    }
    if(result){
        alert('До дня рождения осталось ' + result + ' дней');
    } else {
        alert('Не правильно введена дата');
    }
} else{
    alert('Не правильно введена дата');
}