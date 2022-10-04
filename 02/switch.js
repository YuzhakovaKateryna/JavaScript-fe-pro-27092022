let day = prompt('Type day');
switch(day){
    case 'Th':
    case 'Thu':
    alert ('Урок в 19:00')
    break;
    case 'Mo':
    case 'Wd':
    case 'Fr':
    case 'Su':
    case 'Sa':
    alert('Free day')
    break;
    default:  
        alert ('Error')
}