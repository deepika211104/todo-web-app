function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(deleteBtn);
    li.onclick = function() {
        this.classList.toggle('completed');
    };

    taskList.appendChild(li);

    taskInput.value = '';
}
