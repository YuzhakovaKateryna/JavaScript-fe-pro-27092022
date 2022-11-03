// / 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li
// 2) Підключити скрипт і зробити виборку li елементи в списку
window.onload = () =>{
    let selectedli = document.querySelectorAll('li');
    console.log(selectedli);
 // 3) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу
// вивести в консоль

let parentElement = document.querySelector('li');
console.log(parentElement.parentNode);

// 4) Зробити цикл який знаходить  nextElementSibling після active в списку і додає їх в новий массив */}
let activeClass= document.querySelector('.active').nextElementSibling;
let [...children] = document.querySelector('.menu-list').children;
let nextSiblingArray = [];
for (const i of children) {
    if(i == activeClass){
        nextSiblingArray.push(i.innerHTML);
    }
}
console.log(nextSiblingArray);

// 5) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
    class AddFilm {
        constructor(year,genre,name,views){
            this.year = year;
            this.genre = genre;
            this.name =name;
            this.views=views;
        }
    }

  
// 6) За допомогою деструктурізації переберіть массив створених обєктів фільму і виведіть значення по року випуску фільму
let filmOne = new AddFilm('2008','fantasy','Twilight','1000000');
let filmTwo = new AddFilm('1997','fantasy','Harry Potter and the Philosophers Stone','5000562632000');
let filmThree = new AddFilm('1999','fantasy','The Matrix','5000008269860');
console.log (filmOne,filmTwo,filmThree);
let films = [filmOne,filmTwo,filmThree];

function SortedByYear(year){
    return[...year].sort((a, b) => a.year - b.year);
}
console.log(SortedByYear(films))
// 7) створіть такуж функцію але яка сортує по кількості переглядів
function SortedByViews(views){
    return[...views].sort((a, b) => a.views - b.views);
}
console.log(SortedByViews(films));
// В html виберіть header, footer, nav  та обєднайте отримані селектори в 1 массив\
let blockElement=[document.querySelector('header'),document.querySelector('footer'),document.querySelector('nav')] 
console.log(blockElement);
// 9) Самостійно опрацюйте можливості виборки через querySelector
let button  = document.querySelector('.start');
console.log(button);

}


