const input_box = document.getElementById("input-box");
const tasks_container = document.getElementById("tasks-container");

function addTask() {
  if (input_box.value === " ") {
    alert("Please write something!!! ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    tasks_container.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  saveTasks();
}

tasks_container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTasks();
    }
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTasks();
    }
  },
  false
);


function saveTasks() {
  localStorage.setItem("task", tasks_container.innerHTML);
}

function showTasks() {
    tasks_container.innerHTML = localStorage.getItem("task")
}
showTasks();