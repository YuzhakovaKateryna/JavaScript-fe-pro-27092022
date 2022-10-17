//const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
//1)Створити функцію яка отримує массив і вибирає з 
// нього всі парні числа і розміщує в новому масиві. 
// Функція повина повертати массив з парними номерами.

const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
const evenNumbersArray = [];
const oddNumbersArray =[];

function evenNumberSort(numberArray, sortedArray){
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i] % 2 === 0) {
            sortedArray.push(numberArray[i]);
        }
    }
    console.log(sortedArray);
}

evenNumberSort(arrRandomNumbers, evenNumbersArray);
// 2)Створити функцію яка заповнює глобальну змінну непарними числами, 
// а потім сортує їх в порядку зростання.

function oddNumberSort(numberArray, sortedArray){
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i] % 2 !== 0) {
            sortedArray.push(numberArray[i])
             
        }
    }
    console.log(sortedArray);
}

oddNumberSort(arrRandomNumbers,oddNumbersArray );


// 3)Створити функцію яка перемножає всі значення массиву на 2 і записує
//  їх в новий массив який повертає

const multiplyOn2 = [];
function multiply2 (numberArray, sortedArray){
for (let i = 0; i < numberArray.length; i++){
    let result1 ;
   result1= numberArray[i] * 2 
        sortedArray.push(result1);
    
}
console.log(sortedArray);
}

multiply2(arrRandomNumbers,multiplyOn2); 

// multiplyOn2(arrRandomNumbers,multiply2 );


// const multiply1 = arrRandomNumbers.map(x => x*2);
// console.log(multiply1);





// 4)Створити функції дій калькулятора (додавання, ділення, множення, віднімання).
// При введені операції викликати ту чи іншу функцію з отриманими данними ( для вирішення можна викорисатти if або switch)

let firstValue = prompt('Type first value');
let procesedfirstValue = parseInt(firstValue);
let operator = prompt('Input operator');
let secondValue = prompt ('Type second value');
let procesedsecondValue = parseInt(secondValue);
let operation;
let  result;
if (operator ==='+') {
        function plus (firstValue ,secondValue){
            result= firstValue+secondValue;;
            return result;
         }
         console.log(plus(procesedfirstValue ,procesedsecondValue));
        }

else if (operator ==='-') {
            function minus (firstValue ,secondValue){
                result= firstValue-secondValue;;
                return result;
             }
             console.log(minus(procesedfirstValue ,procesedsecondValue));
            }

else if (operator ==='*') {
                function multiply (firstValue ,secondValue){
                    result= firstValue*secondValue;;
                    return result;
                 }
                 console.log(multiply(procesedfirstValue ,procesedsecondValue));
                }  

else  if (operator ==='/') {
                    function divide (firstValue ,secondValue){
                        if(procesedsecondValue===0){
                            alert ('ділити на нуль заборонено')
                     }
                        result= firstValue/secondValue;;
                        return result;
                     }
                     console.log(divide(procesedfirstValue ,procesedsecondValue));
                    }
                
// 5) створити функцію яка видаляє всі boolean значення з массиву
// і повертає массив тільки з стрінгами

const boolArr = ['aaa', true, 'ccc', false, 'false']
const stringArr = [];
function removeBoolArr(boolArray, stringArray){
    for (let i = 0; i < boolArray.length; i++){
        if ( typeof boolArray[i] === 'boolean') {
              
        }
        else {
            stringArray.push (boolArray[i]);
        }
    }
    console.log(stringArray);
}

removeBoolArr (boolArr,stringArr);


// 6) створити функцію яка замінює в массиві на ;)
const smile = [':)', '=)',':)', '=)',':)', '=)'];
function replaceToWink(smileArray){
    for (let i = 0; i < smileArray.length; i++){
        if (smileArray[i]=='=)') {
            smileArray[i] = ';)'
        }
        }
        console.log(smileArray);
        }

replaceToWink (smile);

// // 7) створити функцію яка отримує аргумент, якщо це 'last'
//  то функція поміщає останній елемент массиву в новий массив і
//   видаляє останній елемент массиву, якщо аргумент 'first' то також 
//   записує перший елемент массиву до нового 
// // массиву і видаляє перший елемент з поточного

const animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
const newAnimals =[];
const chooseAnimal = prompt('Choose (first or last)');
function removeAnimals(animalsArray, newAnimalsArray){{
        if (chooseAnimal === 'first') {
            newAnimalsArray.push( animalsArray.shift());      
        }
        else  if(chooseAnimal === 'last'){
            newAnimalsArray.push(animalsArray.pop());
        }
    }
    console.log(animalsArray);
    console.log(newAnimalsArray);
}

removeAnimals(animals,newAnimals);


