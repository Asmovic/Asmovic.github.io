setInterval(DigitalClock,1000);
function getTodos(){
    var todos = new Array();
    var todo_str = localStorage.getItem('todo');

    if(todo_str !== null){
        todos = JSON.parse(todo_str);
    }
    return todos;
}

function add(){
    let task = document.getElementById('task').value;
    let todos = getTodos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function clearDefault(a){
    if(a.defaultValue == a.value){
        a.value ='';
    }
}

function remove(){
    let id = this.getAttribute('id');
    let todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

function show(){
    let todos = getTodos();

    let html = '<ul>';
    for(i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class = "remove" id = "' + i + '"> Delete </button> </li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    let buttons = document.getElementsByClassName('remove');
    for(i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove,false);
    }
    
}

document.getElementById('add').addEventListener('click', add,false);
show();


//Digital Clock

function DigitalClock(){
let now = new Date();
hours = now.getHours();
minutes = now.getMinutes();
seconds = now.getSeconds();
period = 'AM';

if(hours >=12){
    period = 'PM';
}

if(minutes < 10){
    minutes = '0'+minutes;
}

if(seconds < 10){
    seconds = '0'+seconds;
}

display = document.querySelector('#display');
display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + period;
}

