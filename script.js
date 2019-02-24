let tsk = document.getElementById('task');
//Hide Error Message when input field is clicked
tsk.addEventListener('click', function(){
    errMessage.style.display = 'none';
}) 

//Add Task when input field is not empty and Enter button on the keyboard is Pressed
tsk.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        add();
        show();
    }
})

//Calling My Digital Clock
setInterval(DigitalClock,1000);

// Get Todos
function getTodos(){
    var todos = new Array();
    var todo_str = localStorage.getItem('todo');

    if(todo_str !== null){
        todos = JSON.parse(todo_str);
    }
    return todos;
}

//Add Todo
function add(){

    let task = tsk.value;
    if(task != '' ){
        let todos = getTodos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));
        show();
        document.getElementById("task").value = '';
        return false;
    }else{
        errMessage.style.display = 'block';     
        return false;
       } 
}

//Anonymous
function clearDefault(a){
    if(a.defaultValue == a.value){
        a.value ='';
    }
}

//Remove Todo
function remove(){
    let id = this.getAttribute('id');
    let todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

//Fetch saved Todos from Browser Local Storage and display it
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

//Adding Event Listener to Add button
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

