// console.dir(document);
// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'newTitle';
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.forms[0]);
// console.log(document.links);


// getelementbyID

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 2px #000';


// getElementbyClassName

// var bodyTitle = document.getElementsByClassName('title');
// console.log(bodyTitle);
// bodyTitle[0].style.fontWeight = 'bold';
// bodyTitle[0].style.color = 'green';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].style.backgroundColor = 'green';

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'red';
// }


// getElementByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[0].style.fontWeight = 'bold';
// li[0].style.color = 'green';

// for(let i=0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
//     li[i].style.color = 'red';
// }

// querySelector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'blue';


// querySelectorAll
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd');
var even = document.querySelectorAll('li:nth-child(even');

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}