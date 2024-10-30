const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; 
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7"; 
        span.className = "remove"; 
        li.appendChild(span);

        span.addEventListener('click', function() {
            li.remove(); // Simplified removal of the list item
        });
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the 'checked' class
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the list item
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
} 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
