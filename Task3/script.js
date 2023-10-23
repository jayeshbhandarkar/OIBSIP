const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="completeTask(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>`;
    pendingList.appendChild(li);

    taskInput.value = "";
}

function completeTask(button) {
    const li = button.parentElement;
    completedList.appendChild(li);
    li.classList.add("completed");
    button.parentNode.removeChild(button);
}

function deleteTask(button) {
    const li = button.parentElement;
    li.parentNode.removeChild(li);
}
