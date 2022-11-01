// 1) Створити функцію яка отримує невизначену кількість аргументів і вираховує їх суму
function sumAllArgument (...arg){
    let sumArg =0 ;
    for (let item of arg) {
        sumArg +=item;  
    }
    return  sumArg
}
console.log(`The sum of all item ${sumAllArgument(20,25,30)}`);


// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає рік народження і якщо сьогодні день народження користувача то вивести привітання

function DeterminateBirthdayDate(){
let inputDate  = new Date(parseInt(prompt('Input year',)),parseInt(prompt('Input month',)-1),parseInt(prompt('Input day',)));
let birthday = new Date();
    if (inputDate.getDate()== birthday.getDate() || inputDate.getMonth() ==birthday.getMonth()){
        alert('Happy Birthday')
    }
    else{
        console.log(`Year of birth ${inputDate.getUTCFullYear()}`);
    }
    console.log(inputDate.toDateString());
}
console.log(DeterminateBirthdayDate());



// 3) Створити функцію яка з массиву вибирає всі булеві значення
const unsorted = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];
const boolArr = [];
function sortBoolArr(unsortedArray,boolArray){
   
    for(let iterator of unsortedArray.flat()){
        if ( typeof iterator == 'boolean'|| typeof iterator.a == 'boolean'){
            boolArray.push(iterator)
        }
    }
    return boolArray
}

console.log(sortBoolArr(unsorted,boolArr));
// 4) Створити функцію яка повертає сторіччя, функція отримує рік
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20
function defineCentury () {
    let year = parseInt(prompt('Input year'));
    if ( year >=  2000){
        console.log(20 ,'century');
    } 
   else if ( year >= 1810){
        console.log(19 ,'century');
    }
    else  if ( year >= 1700){
        console.log(17 ,'century');
    }
    else  if ( year >=  1601){
        console.log(16 ,'century');
    }
}

defineCentury ()


// 5) Створити функцію яка повертає скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )

function daysInMonth(days){
    days = new Date()
    let month = days.getMonth();
    let year = days.getFullYear();
    console.log(`This month has ${new Date(year,month,0).getDate()} days`)
    console.log(`Next month will be a ${new Date(year,month+1,0).getDate()} days`)
}

daysInMonth();
