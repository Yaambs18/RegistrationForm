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
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'blue';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';


// // querySelectorAll
// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even)');

// var itemList = document.querySelectorAll('li');
// itemList[1].style.color = 'green';

// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
//     // even[i].style.backgroundColor = '#ccc';
// }



// DOM Traversing

var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// // childNodes
// console.log(itemList.childNodes);  // NodeList

// console.log(itemList.children);  // HTMLCollection
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add attr
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World');

// add text to new div
newDiv.appendChild(newDivText);

// add element to DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

var newItem = document.createElement('li');
newItem.className = 'list-group-item';

var newItemText = document.createTextNode('Hello');
newItem.appendChild(newItemText);

var items = document.querySelector('#items');
var item1 = document.querySelector('.list-group-item');
items.insertBefore(newItem, item1);

console.log(newItem);

container.insertBefore(newDiv, h1);