// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкет в якому є ключі buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження
  let userWallet ={
    amountUsa: 1200 ,
    amountEuro: 1000 ,
    amountUa:   10000
  }
let bank =[
    {
        buy: 36.65,
        sell: 37.95 ,
        currencyName:'USD'
    },
    {
        buy: 35.80,
        sell: 37.50 ,
        currencyName:'EURO'   }
 ]

  function buyCurrency (availableFunds,currency){
  for (const obj of currency){
    if (obj.currencyName =='USD' && availableFunds >= obj.sell){
      console.log(`You can buy ${(availableFunds/obj.sell).toFixed(2)} USD`);
    }
    else if (obj.currencyName =='EURO' && availableFunds >=obj.sell){
      console.log(`You can buy ${(availableFunds/obj.sell).toFixed(2)} EURO`);
    }
    else{
    console.log ('Not enought money to buy currency')
  }
}
  }

buyCurrency(userWallet.amountUa,bank);

  function sellCurrency (availableFundsUSA,availableFundsEURO,currency){
  for (const obj of currency){
    if (obj.currencyName =='USD' && availableFundsUSA >= obj.buy){
      console.log(`You can receive ${(availableFundsUSA*obj.buy).toFixed(2)} UAH`);
    }
    else if (obj.currencyName =='EURO' && availableFundsEURO >=obj.buy){
      console.log(`You can receive ${(availableFundsEURO*obj.buy).toFixed(2)} UAH`);
    }
    else{
    console.log ('Not enought money to sell currency')
  }
}
}

sellCurrency(userWallet.amountUsa,userWallet.amountEuro,bank);


// 2)Створити функцію move(яка повертає на скільки кроків змістився користувач ).
// Створити функцію moveUser яка отримує напрямок переміщення і функцію move
// як колбек. 
// moveUser ('north', move, 10) повина повернути 
//( Юзер перемістився на північ на 10 кроків)
let value =10;
let direction ='north';

 const move = (value)=>`на ${value} кроків`;
 const moveUser =function moveUser(direction,fn,value){ 
  console.log(`Юзер перемістився на ${direction}  ${fn(value)} кроків`); 
}
moveUser (direction,move,value);




// 3) Створіть массив в якому видаляється кожний другий елемент
//  ["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
//  в результаті повинен бути ось такий новий массив
//   ["Keep", "Keep", "Keep", ...],
// Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву

let array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
let removeItem = [];
function removeIteminArray( arrItem,removeItemArr){
  for( let i=0; i<arrItem.length; i++){
    if (array.length == 0) {
        console.log('array is empty');
    }

    else {
      removeItemArr.push(arrItem.splice(i+1,1));
    }
    }
    console.log(arrItem);
    }
 
  removeIteminArray(array,removeItem);





// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

let figurs = [
    {
        figure:"circle",
        radius: 10
    },
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
function figureArea (figureArray) {
  for (const obj of figureArray) {
  if (obj.figure == "circle"){
     let circleArea=obj.radius*Math.PI;
     console.log(circleArea);
  }
  else if(obj.figure == "Squar" ){
    let squarArea =Math.pow(obj.sizeA);
    console.log(squarArea);
  }
  else (obj.figure == "Rectangle")
    let retangleArea = obj.sizeA*obj.sizeB;
    console.log(retangleArea);
}
}
figureArea(figurs);

// 5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4
let numbers = [2,3,5,4,8,7,9,10];
const evenNumbersArray = [];
function evenNumberSort(numberArray, sortedArray){
  for (let i = 0; i < numberArray.length; i++){
      if (numberArray[i] % 2 === 0) {
          sortedArray.push(numberArray[i]);
      }
  }
  console.log(sortedArray);
}
evenNumberSort(numbers, evenNumbersArray);

 const multiply4 =evenNumbersArray.map((item)=>item*4);
 console.log(multiply4);



// 6) Створити функцію яка округлює значення массива в більшу сторону [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02]
let numberArray =  [2.5,3.2,5.4,4.6,8.3,7.1,9.5,10.02];
let newArray =[];
function roundingValue (NumbersArray,roundingArray){
  for(let i =0;i<NumbersArray.length;i++){
      NumbersArray[i] = roundingArray.push (Math.ceil(NumbersArray[i]));
  }
  console.log(roundingArray);
}

roundingValue(numberArray,newArray);

// 7)Створити функцію яка повертає массив довжиною 10 в якому всі значення random від 0 до 100

function randomArray(){
let randomArrNumbers = [];
while (randomArrNumbers.length<10) {
  randomArrNumbers.push(Math.ceil(Math.random()*100));
}
console.log(randomArrNumbers);
}
randomArray();