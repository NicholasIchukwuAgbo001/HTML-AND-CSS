const taskForm =  document.querySelector("#to-do-form");
const taskList =  document.querySelector("#task-list");
const searchBar = document.forms["Search-form"].querySelector
("input");


taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = document.querySelector("#to-do-form input").value.trim();
  if (value != "") {
    const tag = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const valueSpan = document.createElement("span");
    const deleteSpan = document.createElement("span");
    valueSpan.textContent = value;
    deleteSpan.textContent = "delete";
    tag.appendChild(checkBox);
    tag.appendChild(valueSpan);
    tag.appendChild(deleteSpan);
    taskList.appendChild(tag);
    valueSpan.classList.add("task-name"); 
    deleteSpan.classList.add("delete-button");
    checkBox.classList.add("checkbox");
  }
});


taskList.addEventListener("click", (event) => {
    const deleteBtn = event.target.textContent
    if(deleteBtn == "delete"){
        const li = event.target.parentElement
        taskList.removeChild(li)
    }
});

searchBar.addEventListener("keyup", (event) =>{
    const term = event.target.value.toLowerCase();
    const books = booklist.querySelectorAll("li");

    books.forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().includes(term)){
            book.style.display = "block";
        } else{
            book.style.display = "none";
        }
    }) 
});


