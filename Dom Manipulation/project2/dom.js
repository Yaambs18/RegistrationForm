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

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 2px #000';


// getElementbyClassName

// var bodyTitle = document.getElementsByClassName('title');
// console.log(bodyTitle);
// bodyTitle[0].style.fontWeight = 'bold';
// bodyTitle[0].style.color = 'green';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].style.backgroundColor = 'green';

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';
}