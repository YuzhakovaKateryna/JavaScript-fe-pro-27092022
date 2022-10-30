// 1) Створити функцію конструктор яка створює обєкт юзер інфо
//  в функції повиний бути метод виводу інформації про юзера.
// Метод повинен бути винесений в прототип.Створити метод на прототайп 
// для оновлення ключів обєкту. 
// Створити функцію сорт яка посортує массив з створеними обєктами юзер по віку
//  ( в порядку зростання і порядку зниження)
function userConstructor (login,points){
    this.login = login;
    this.points= points;
    this.info = function(){
        return `${this.login} and points : ${this.points}`
    }
   
}

userConstructor.prototype.getInfo =function(){
    return `${this.login} and points ${this.points}`
}
const userMax =new userConstructor ('Max','5555');
const userAlex =new userConstructor ('Alex','1235');
const userStiv=new userConstructor ('Stiv','5995');


const userArray = [userAlex, userMax, userStiv];
console.log(userArray);

const Sort1 =userArray.sort(function(a, b){return a - b});
 console.log(Sort1);

 const Sort2 =userArray.sort(function(a, b){return b - a});
 console.log(Sort2);




// 2) Створити функцію конструктор створення (прямокутника, квадрата ) 
// в прототип винести методи обчислення Площі, переметра, та визначити діагональ 
// https://ua.onlinemschool.com/math/formula/rectangle/
function Rectangle (sideA,sideB){
    this.sideA = sideA;
    this.sideB= sideB;
}
let figure =new Rectangle (12,25);
console.log(figure);

Rectangle.prototype.getArea = function(){
    return `Area = ${this.sideA*this.sideB}`
}

console.log(figure.getArea());

Rectangle .prototype.perimeter = function(){ 
    return`perimeter= ${2*this.sideA+2*this.sideB}`
}
console.log(figure.perimeter());

Rectangle.prototype.diagonal = function(){ 
    return`diagonal= ${Math.sqrt((Math.pow(this.sideA,2))+Math.pow(this.sideB,2))}`
}
console.log(figure.diagonal());

////
function Squar (sideA,sideB){
    this.sideA = sideA;
    this.sideB= sideB;
}
let squar =new Squar(12,12);

console.log(squar);
Squar.prototype.getArea = function(){
    return `Area = ${this.sideA*this.sideB}`
}
console.log(squar.getArea());

Squar.prototype.perimeter = function(){ 
    return`perimeter= ${4*this.sideA}`
}

console.log(squar.perimeter());
Squar.prototype.diagonal = function(){ 
    return`diagonal= ${this.sideA *Math.sqrt(2)}`
}
console.log(squar.diagonal());



// 3) Отримати від користувача значення name  вивести в консоль,
//  першу і останню літеру з name. Якщо імя користувача довше 3 символів, 
//  то ще вивсести перші 3 літери + ...

let name = prompt ("Введіть своє ім'я");
 function cutName (someText){
    if (someText.length<=4){
    console.log(`${someText.slice(0,1)}...${someText.slice(someText.length-1)}`);
    }
    else if (someText.length>3){
        console.log(`${someText.substring(0,3)}...`)
    }
 }
cutName(name);
