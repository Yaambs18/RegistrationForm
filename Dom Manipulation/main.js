// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.style.color = 'green';
ul.children[1].style.color = 'yellow';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';



// event
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("Button is clicked");
});

btn.addEventListener('mouseover', (e) =>{
    console.log("Mouse over button");
});

btn.addEventListener('mouseout', (e) =>{
    console.log("Mouse hovered out of button");
});


// form-script

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        console.log(nameInput.value);
        console.log(emailInput.value);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}