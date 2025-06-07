const PRODUCT_URL = "https://dummyjson.com/products";
const imagesBox = document.querySelector(".images-box");

const fetchproducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data.products); 
    } catch (error) {
        console.log(error);
    }
};

fetchproducts(PRODUCT_URL);

const displayProducts = (products) => {
    products.forEach((product) => {
        const { thumbnail, category, price } = product; 
        const productCard = document.createElement("div");
        productCard.innerHTML = `
            <div class="the_products">
                <img src="${thumbnail}" alt="" onclick="">
                <div class="categoryAndPrice">
                    <p>${category}</p>  
                    <span>${price}</span>
                </div>
            </div>
        `;
        productCard.classList.add("categoryAndPrice");
        imagesBox.appendChild(productCard); 
    });
};


const searchBar = document.querySelector(".searchContainer input")

searchBar.addEventListener("keyup", (event) =>{
  const term = event.target.value.toLowerCase();
  const products = imagesBox.querySelectorAll(".categoryAndPrice");

  products.forEach((product) => {
    const category = product.querySelector("p").textContent.toLowerCase();

    if(category.toLowerCase().includes(term)){
      product.style.display = "block";
    } else{
      product.style.display = "none";
    }
   })
});
