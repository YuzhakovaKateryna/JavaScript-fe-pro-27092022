let firstValue = prompt('Type first value');
let procesedfisrValue = parseInt(firstValue);
//console.log('Type first value', procesedfisrValue);
let operator = prompt('Input operator');
let secondValue = prompt ('Type second value');
let procesedsecondValue = parseInt(secondValue)
//console.log ('Type second value',procesedsecondValue);
let result;
if (operator ==='+'){
   result=procesedfisrValue+procesedsecondValue;
   alert(`${result}`);
}
if (operator ==='-'){
    result=procesedfisrValue-procesedsecondValue;
    alert(`${result}`);
 }
 if (operator ==='*'){
    result=procesedfisrValue*procesedsecondValue;
    alert(`${result}`);
 }
else if (operator==='/') {
if(procesedsecondValue===0){
alert ('ділити на нуль заборонено')
}
else{
    result=procesedfisrValue/procesedsecondValue;
    alert(`${result}`);
}
}


