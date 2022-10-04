let login = prompt('Логін');
let password =prompt ('Пароль');


switch(login,password) {
    case 'admin','12345':
    alert('Вітаємо в системі');
    break;
    default:
    alert('Пароль та логін не вірні');
    break;
}
