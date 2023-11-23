const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const sortBtn = document.querySelector(".sort-btn"); 

function addTask() {
    if (inputBox.value === '') {
        alert("Add something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
}

function sortTasks() {
    const tasks = Array.from(listContainer.children);
    tasks.sort((a, b) => {
        return a.innerText.localeCompare(b.innerText);
    });
    listContainer.innerHTML = "";
    tasks.forEach(task => listContainer.appendChild(task));
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
sortBtn.addEventListener("click", sortTasks);
