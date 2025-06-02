// const wrapper = document.getElementById("add-book")

// const bookList = document.getElementsByClassName("title")

// const ul = document.getElementsByTagName("ul")
// console.log(ul)

// const li = document.getElementsByTagName("li")
// console.log(li)

//query selector......

// const liTag = document.querySelectorAll(".title")
// console.log(liTag)


// bookList.forEach(element => Array.from(bookList));/ false

// const isArray = Array.isArray(Array.from(bookList))

// let arr = Array.from(bookList)

// arr.forEach((element) =>{
//     console.log(element)
// })

// console.log(isArray)


//DELETE


const booklist = document.querySelector("#book-list ul")

console.log(booklist)

booklist.addEventListener("click", (event) => {
    const deleteBtn = event.target.textContent
    if(deleteBtn == "delete"){
        const li = event.target.parentElement
        booklist.removeChild(li)
    }
});

const addBookForm =  document.querySelector("#add-book");
addBookForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    let value = document.querySelector("#add-book input").value.trim();
    if(value != ""){
        const liTag = document.createElement("li");
        const valueSpan = document.createElement("span");
        const deleteSpan = document.createElement("span");

        valueSpan.textContent = value;
        deleteSpan.textContent = "delete";

        liTag.appendChild(valueSpan);
        liTag.appendChild(deleteSpan);
        booklist.appendChild(liTag); 


         valueSpan.classList.add("name");
         deleteSpan.classList.add("delete");

    }
});

const searchBar = document.forms["search-books"].querySelector 
("input");

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