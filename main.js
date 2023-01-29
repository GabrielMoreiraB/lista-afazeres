const btn = document.querySelector('#add-btn');


function addTask(){
    const taskTitle = document.querySelector('#task-title').value;

    if(taskTitle){
        const template = document.querySelector('.template');
        const newTask =template.cloneNode(true);
        
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        newTask.querySelector('#task-title').textContent = taskTitle;

        const taskList = document.querySelector('#task-list');
        taskList.appendChild(newTask);

        const removeBtn = newTask.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function (){
            removeTesk(this);
            
        });

        const doneBtn = newTask.querySelector('.done-btn');
        doneBtn.addEventListener('click', function(){
            doneTesk(this);
        });
    }
    document.querySelector('#task-title').value='';
}

function doneTesk(task){
    task.parentNode.classList.toggle('done')
}

function removeTesk(task){
    task.parentNode.remove(true);
}

btn.addEventListener('click', function(event){
    event.preventDefault();
    addTask();
})


