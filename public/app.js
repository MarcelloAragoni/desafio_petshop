fetch('./products.json')
  .then((response)=>response.json())
  .then((data)=>buildProducts(data.products))
  .then(productsHtml => productList(productsHtml))

function buildProducts(products){
  return products.map(product => {
    return `
    <li class="product">
      <img src="${product.image}" alt="">
      <p>${product.title}</p>
      <img src="./imgs/product/rate.png" alt="">
      <div class='icons'>
        <img src="./imgs/header/wish.png" alt="">
        <img src="./imgs/header/cart.png" alt="">
      </div>
      <div class="price">
       <p>${product.price}</p>
       <p class="discount">${product.price_off}</p>
      </div>
      <button class="buyButton">Comprar</button>
    </li>    
    `
  })
}

function productList(productsHtml){
 
  const el = document.querySelector('[data-products]');
  const el2 = document.querySelector('[data-products="2"]')
  el.innerHTML=productsHtml.join('');
  el2.innerHTML=productsHtml.join('');
}


function menuMobile(){
  const menuMobile = document.getElementById("menuMobile");
  menuMobile.classList.toggle("menuMobileOpenButton");
  const menu = document.getElementById("menu");
  menu.classList.toggle("menuMobileOpenButton");
}; 

function searchForm(){
  const searchButton = document.getElementById("search-button");
  searchButton.classList.toggle("show");
  const searchForm = document.getElementById("search-form");
  searchForm.classList.toggle("show");
};  

const closeNewsLetterEl = document.getElementById("close-newsletter");
closeNewsLetterEl.addEventListener('click',closeNewsLetter);
function closeNewsLetter(event){
  const newsLetterEl = event.currentTarget.closest('.newsLetter');
  const layerEl = document.querySelector('.newsLetter-layer');
  layerEl.remove();
  newsLetterEl.remove();
}
