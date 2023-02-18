var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', deleteItem);

// Add item 
function addItem(e){
    e.preventDefault();

    // Get Input
    var newItem = document.getElementById('item').value;

    // createElement
    var newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    // Add text node with input value
    newLi.appendChild(document.createTextNode(newItem));

    // create edit button element
    var editBtn = document.createElement('button');
    // add classes to edit btn
    editBtn.className = 'btn btn-primary btn-sm ml-1 float-right edit'; 
    // append text node
    editBtn.appendChild(document.createTextNode('Edit')); 
    // Add edit button element to newLi
    newLi.appendChild(editBtn);

    // create delete button element
    var delButton = document.createElement('button');
    // add classes to del btn
    delButton.className = 'btn btn-danger btn-sm float-right delete'; 
    // append text node
    delButton.appendChild(document.createTextNode('X')); 
    // Add delete button element to newLi
    newLi.appendChild(delButton);

    // add newLi to list
    itemList.appendChild(newLi);
}

// Remove item
function deleteItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}