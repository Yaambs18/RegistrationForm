// form-script

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// retrieving stored usersDetails from local storage
var totalUsers = localStorage.getItem('usersCount');
var usersCount = 0;
if(totalUsers!=null){
    usersCount = totalUsers;
    let i=1;
    while(i<=totalUsers){
        const li = document.createElement('li');
        var userDetails = document.createTextNode(localStorage.getItem('user'+i));
        li.appendChild(userDetails);
        userList.appendChild(li);
        i++;
    }
}
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        usersCount++;
        console.log(nameInput.value);
        console.log(emailInput.value);
        const li = document.createElement('li');
        var userDetails = document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
        li.appendChild(userDetails);
        userList.appendChild(li);

        // adding userdetails to local storage
        localStorage.setItem('usersCount', usersCount);
        localStorage.setItem('user'+usersCount, `${nameInput.value} : ${emailInput.value}`);

        nameInput.value = '';
        emailInput.value = '';
    }
}
