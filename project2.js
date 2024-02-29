document.addEventListener("DOMContentLoaded", function () {
    const tasks = [];
  
    const taskForm = document.getElementById("taskForm");
    const taskTitle = document.getElementById("taskTitle");
    const taskPriority = document.getElementById("taskPriority");
    const taskStatusPending = document.getElementById("pending");
    const taskStatusCompleted = document.getElementById("completed");
    const taskList = document.getElementById("taskList");
  
    taskForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      let title = taskTitle.value;
      let priority = taskPriority.value;
      let status = taskStatusPending.checked
        ? taskStatusPending.value
        : taskStatusCompleted.value;
  
      let task = { title, priority, status };
      tasks.push(task);
  
      let li = document.createElement("li");
      li.className = `task ${priority}-priority`;
      li.innerHTML = `${title} - ${priority} - ${status} 
          <button class="remove" style="color: black">Remove</button>
          <button class="complete" style="color: black">Mark as Complete</button>`;
  
      taskList.appendChild(li);
      taskForm.reset();
    });
  
    taskList.addEventListener("click", function (event) {
      if (event.target.className == "remove") {
        let li = event.target.parentNode;
        let title = li.firstChild.textContent;
        let index = tasks.findIndex((task) => task.title === title);
        tasks.splice(index, 1);
        taskList.removeChild(li);
      } else if (event.target.className == "complete") {
        let li = event.target.parentNode;
        li.style.textDecoration = "line-through red 2.5px";
      }
    });
  });
  