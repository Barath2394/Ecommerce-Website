const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const countDisplay = document.querySelector('.count');
const addToCartButton = document.querySelector('.add-to-cart-button');

let count = 0;
let productPrice=125.00;
let finalPrice = 0;
minusButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countDisplay.innerHTML = count;
  }
});
plusButton.addEventListener('click', () => {
  count++;
  countDisplay.innerHTML = count;
});
const cartIcon = document.querySelector('.right-navigation-component img:first-child');
const cartCount = document.createElement('span');

addToCartButton.addEventListener('click', () => {
    if(count){
    finalPrice = productPrice * count;
    cartCount.classList.add('cart-count');
    cartCount.innerHTML = count;
    cartIcon.parentNode.appendChild(cartCount);
    }
  });

  const deleteProduct =() =>{
    cartCount.innerHTML = 0;
    cartIcon.parentNode.appendChild(cartCount);
    document.querySelector('.cart-container p').style.display='block';
    document.querySelector('.product-details').style.display='none';
    document.querySelector('.checkout-button').style.display='none';
  }


  const toggleCart = (option) => {
    const cartContainer = document.querySelector('.cart-container');
    if(count){
      const cartProduct = document.querySelector('.product-details');
      document.querySelector('.cart-container p').style.display='none';
      document.querySelector('.checkout-button').style.display='block';
      cartProduct.style.display = 'flex';
      document.querySelector('.cart-product-details p').innerText = `$${productPrice}.00 x ${count} $${finalPrice}.00` ;
    }else if(!count){
      document.querySelector('.cart-container p').style.display='block';
      document.querySelector('.checkout-button').style.display='none';
    }
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
    if(option === 'close-cart' && cartContainer.style.display === 'block'){
        cartContainer.style.display='none';
    }
  }

  


