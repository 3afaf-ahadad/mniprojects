let input_box = document.getElementById("input-box");
let tasks_box = document.getElementById("tasks-box");

function AddingTask() {
  if (input_box.value === " ") {
    alert("Veuillez saisir une tâche!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    tasks_box.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  saveTasks();
}

tasks_box.addEventListener(
  "click",
  function (eve) {
    if (eve.target.tagName === "LI") {
      eve.target.classList.toggle("checked");
      saveTasks();
    } else if (eve.target.tagName == "SPAN") {
      eve.target.parentElement.remove();
      saveTasks();
    }
  },
  false
);


function saveTasks() {
  localStorage.setItem("task", tasks_box.innerHTML);
  localStorage.setItem("mode",  document.body.style.backgroundColor.innerHTML);
}

function showTasks() {
  tasks_box.innerHTML = localStorage.getItem("task");
  document.body.style.backgroundColor.innerHTML = localStorage.getItem("mode");
}
showTasks();


input_box.addEventListener("input", function filter() {
  const filterText = input_box.value;
  const allItems = document.querySelectorAll("li");
  allItems.forEach((li) => {
    if (li.textContent.includes(filterText)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});
showTasks();


function DarkMode(){
  document.body.classList.add('dark');
  document.body.style.backgroundColor = "rgb(73, 50, 88)";
  document.getElementById("todo-list").style.background = "linear-gradient(120deg,rgb(58, 42, 99), #d199df)";
  document.getElementById("add").style.backgroundColor = "rgb(47, 30, 58)";
  localStorage.setItem("mode", "dark");
}
showTasks();

function ClairMode(){
  document.body.classList.remove('dark');
  document.body.style.backgroundColor = "#d5c0c0";
  document.getElementById("todo-list").style.background = "linear-gradient(120deg, #ffc0a7, #ffffff)";
  document.getElementById("add").style.backgroundColor = "#c09e9e";
  localStorage.setItem("mode", "light");
}
showTasks();
