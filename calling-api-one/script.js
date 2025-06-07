const PRODUCT_URL = "https://fakestoreapi.com/products";
const imageContainer = document.querySelector(".imageContainer")

// PROMISE.......
// const fetchproducts =(url) =>{
//      fetch(url)
//     .then ((Response )=>(Response.json()))
//     .then((data)=>{console.log(data)})
//     .catch((error)=> console.log(error))
// }


const fetchproducts = async(url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data)
    }catch (error){
        console.log(error)
    }
}

fetchproducts(PRODUCT_URL)

const displayProducts = (products) => {
    products.forEach((product) => {
        const {image, category, price} = product;
        const productCard = document.createElement("div")
        productCard.innerHTML = `
        <div>
        <img src="${image}" alt="">
        <div class=categoryAndPrice>
        <p>${category}<p>
        <span>${price}<span>
        </div>
        </div>
        `
    
        productCard.classList.add("categoryAndPrice")
        productCard.style.backgroundColor = "#333"
        imageContainer.appendChild(productCard)
    });
}


const searchBar = document.querySelector(".searchContainer input")

searchBar.addEventListener("keyup", (event) =>{
  const term = event.target.value.toLowerCase();
  const products = imageContainer.querySelectorAll(".categoryAndPrice");

  products.forEach((product) => {
    const category = product.querySelector("p").textContent.toLowerCase();

    if(category.toLowerCase().includes(term)){
      product.style.display = "block";
    } else{
      product.style.display = "none";
    }
   })
});


