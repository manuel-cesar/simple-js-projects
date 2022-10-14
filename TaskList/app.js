//---SELECT ELEMENTS---
const alert = document.querySelector('.alert');
const form = document.querySelector('.list-form');
const task = document.getElementById('task');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.list-container');
const list = document.querySelector('.task-list');
const clearBtn = document.querySelector('.clear-btn');

//Edit a task
let editElement;
let editFlag = false;
let editId = '';

//----EVENT LISTENERS----
//Submit form
form.addEventListener('submit', addItem);
//clear items
clearBtn.addEventListener('click', clearItems);

//load items
window.addEventListener('DOMContentLoaded', setupItems);


//----FUNCTIONS----
//+Edit Function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //Edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //Set form value
    task.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';
}
//+Delete Function
function deleteItem(e){
    //Select task 
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('task Removed','success');
    setBackToDefault();
    //Remove from storage
    removeFromLocalStorage(id);
    
}
//+Clear items
function clearItems() {
    const items = document.querySelectorAll('.task');

    if(items.length > 0){
        items.forEach(function(item) {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('Empty list','success');
    setBackToDefault();
    localStorage.removeItem('list');
}

//+Add item
function addItem(e) {
    e.preventDefault();
    const value = task.value;
    const id = new Date().getTime().toString(); //To easily create a unique id for this project.

    if(value  && !editFlag){
        createListItem(id,value);
        //display alert
        displayAlert('Task added successfully','success');
        //Show list container
        container.classList.add('show-container');
        //add to local storage
        addToLocalStorage(id,value);
        //set Back to default
        setBackToDefault();
    }
    else if(value  && editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        //Edit local storage
        editLocalStorage(editId,value);
        setBackToDefault();

    }
    else{
        displayAlert('Enter a task to add','danger')
    }
}
//+Display alert 
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //Remove alert message
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000)
}

//+Set back to default
function setBackToDefault(){
    task.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}



//----SAVE LIST LOCALLY----
function addToLocalStorage(id,value){
    const task = {id, value};
    let items = getLocalStorage();
    items.push(task);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !== id){
            return item;
        }
    })
    localStorage.setItem('list',JSON.stringify(items));
}

function editLocalStorage(id,value) {
    items = getLocalStorage();
    items = items.map(function(item){
        if(item.id = id){
            item.value = value;
        }
    return item;
    })
    localStorage.setItem('list',JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list')? JSON.parse(localStorage.getItem('list')) : [];
}


//----SET UP ITEMS----
function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id,item.value)
        })
        container.classList.add('show-container')
    }

}

function createListItem(id,value){
    const element = document.createElement('article')
    //add task class
    element.classList.add('task-item');
    //add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                 <i class="fas fa-trash"></i>
                            </button>
                        </div>`;
    
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click',deleteItem);
    editBtn.addEventListener('click',editItem);
    
    //append child
    list.appendChild(element);
}
