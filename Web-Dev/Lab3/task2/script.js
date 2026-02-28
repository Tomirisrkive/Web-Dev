const taskInput = document.getElementById("taskInput");
const addBot = document.getElementById("addbot");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

addBot.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "🗑";

    checkbox.addEventListener("change", () => {
        span.classList.toggle("done", checkbox.checked);
        applyFilter();
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        applyFilter();
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);
    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    applyFilter();
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        applyFilter();
    });
});

function applyFilter() {
    const items = taskList.querySelectorAll("li");
    items.forEach(li => {
        const isCompleted = li.querySelector("span").classList.contains("done");
        if (currentFilter === "all") {
            li.classList.remove("is-hidden");
        } else if (currentFilter === "active") {
            li.classList.toggle("is-hidden", isCompleted);
        } else if (currentFilter === "completed") {
            li.classList.toggle("is-hidden", !isCompleted);
        }
    });
}