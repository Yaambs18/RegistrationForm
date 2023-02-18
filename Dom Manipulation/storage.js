// form-script

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// retrieving stored usersDetails from local storage
// var totalUsers = localStorage.getItem('usersCount');
var usersCount = 0;
// if(totalUsers!=null){
//     usersCount = totalUsers;
//     let i=1;
//     while(i<=totalUsers){
//         const li = document.createElement('li');
//         let userObj_deserialized = JSON.parse(localStorage.getItem('user'+i))
//         var userDetails = document.createTextNode(`${userObj_deserialized.name} : ${userObj_deserialized.email}`);
//         li.appendChild(userDetails);

//         // create delete btn element
//         var delBtn = document.createElement('button');
//         delBtn.className = 'delete';
//         var delText = document.createTextNode('Delete');
//         console.log(delBtn.appendChild(delText));
//         li.appendChild(delBtn);
//         userList.appendChild(li);
//         i++;
//     }
// }

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        // usersCount++;

        // adding userdetails to local storage
        // localStorage.setItem('usersCount', usersCount);
        let userObj = {
            name : nameInput.value,
            email : emailInput.value
        }
        let userObj_serialized = JSON.stringify(userObj);
        localStorage.setItem(emailInput.value, userObj_serialized);
        showUserOnScreen(userObj);

        nameInput.value = '';
        emailInput.value = '';
    }
}

function showUserOnScreen(obj){
    const li = document.createElement('li');
    var userDetails = document.createTextNode(`${obj.name} : ${obj.email}`)
    li.appendChild(userDetails);

    // create delete btn element
    var delBtn = document.createElement('button');
    delBtn.className = 'delete';
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);

    // create edit btn element
    var edtBtn = document.createElement('button');
    edtBtn.className = 'edit';
    var edtText = document.createTextNode('Edit');
    edtBtn.appendChild(edtText);
    
    // delete event
    delBtn.onclick = () =>{
        if(confirm('Are you sure ?')){
            userList.removeChild(li);
            localStorage.removeItem(obj.email);
        }
    }

    // edit event
    edtBtn.onclick = () =>{
        userList.removeChild(li);
        localStorage.removeItem(obj.email);
        nameInput.value = obj.name;
        emailInput.value = obj.email;
    }
    
    li.appendChild(delBtn);
    li.appendChild(edtBtn);
    userList.appendChild(li);
}