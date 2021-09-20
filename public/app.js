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
  var element = document.getElementById("menuMobile");
  element.classList.toggle("menuMobileOpenButton");
  var element = document.getElementById("menu");
  element.classList.toggle("menuMobileOpenButton");
};      
