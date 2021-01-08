// Define UI Vars
const form = document.querySelector('.task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listeners
loadEventListeners();

//eventlistener wrapper
function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear tasks event
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

function filterTasks(e){
    const filterText = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            console.log(item, filterText, item.toLowerCase().indexOf(filterText));
            if(item.toLowerCase().indexOf(filterText) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
}

function clearTasks(){
    //taskList.innerHTML = '';

    //removeChild method is aster than innerHtml
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }    
}

function addTask(e){
    //Check for input 
    if (taskInput.value === ''){
        alert('Enter a task');
    }
    //add list item
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    //add delete link and icon
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = '';

    e.preventDefault();
}