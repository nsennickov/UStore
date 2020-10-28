'use strict'
import {allProducts} from "./shop.js";

let cart = [];

// DISPLAY AND HIDE CART ===========================================================
const cartIcon = document.querySelectorAll('.cart');
console.log(cartIcon);
cartIcon.forEach(elem => elem.addEventListener('click', function(e){
    e.preventDefault();
    if(!cartWindow.classList.contains('cart-window-active')){
        showCart()
    }
    cartWindow.classList.toggle('cart-window-active'); 
}));

const hideCart = document.querySelector('.cart-window_close-x').addEventListener('click', function(){
    cartWindow.classList.toggle('cart-window-active'); 
})

const cartWindow = document.querySelector('.cart-window');
const cartContent = document.querySelector('.cart-window-wrapper')
const sumPrice = document.getElementById('price');
const sumCount = document.getElementById('count');

//+1 ICON IN CART IF +1 PRODUCTS


// ADD TO CART FUCNTION=========================================================
const addToCartBtn = document.querySelectorAll('.card-add-to-cart');
addToCartBtn.forEach(elem => {
    elem.addEventListener('click', addToCart)
})

function addToCart(e){
    let parentCard = e.target.closest('.card');
    let currentProd = parentCard.children[0].innerText;

    allProducts.map(elem => {
     if(Object.values(elem).includes(currentProd)){
        if(cart.includes(elem)){
            elem.inCart += 1;
        }else{
            cart.push(elem)
        }
    }
    })  
}
   


// PLUS AND MINUS PRODUCT IN CART FUCNTION=========================================================
function changeCountProd(e){
    let parentCard = e.target.closest('.cart-product-wrapper');
    

    if(e.target.innerHTML == '+'){
        cart.filter(elem => {
            if(elem.count > elem.inCart){
                if(Object.values(elem).includes(parentCard.children[1].innerText)){
                    return elem
                }
            }else if(elem.count <= elem.inCart){
                
            }
        }).map(elem => {elem.inCart += 1})
        
    }else if(e.target.innerHTML == '-'){
        cart.filter((elem, index) => {
            if(Object.values(elem).includes(parentCard.children[1].innerText)){
                if(elem.inCart - 1 == 0){
                    cart.splice(index, 1);
                }else{
                    return elem
                }
            }
        }).map(elem => {
            return elem.inCart -= 1;
        })
    }

    clearCart()
    showCart()
    summuryCount()
    parentCard = e.target.closest('.cart-product-wrapper');
    cart.forEach(elem => {
        if(elem.count <= elem.inCart){
            parentCard.classList.toggle('cart-product-wrapper_wrong')
        }
    })
}




//REMOVE PRODUCTS FROM CART FUNCTION======================================================
function removeCartProd(e){
    if(e.target.classList.contains('minus-btn')){
        let parentCard = e.target.closest('.cart-product-wrapper');
        cartContent.removeChild(parentCard);
    }else{
        clearCart();
        let parentCard = e.target.closest('.cart-product-wrapper');
        let currentProd = parentCard.children[1].innerText;

        cart.forEach((elem, index) => {
            if(Object.values(elem).includes(currentProd)){
                cart.splice(index, 1);
            }
        })
        showCart(); 
    }
    summuryCount()
}



//SHOW THE SUMMARY PRICE AND COUNT OF PROD
function summuryCount(){
    sumCount.innerHTML = 'Count: ';
    sumPrice.innerHTML = 'Price: ';
    
    let a = 0;
    Object.values(cartContent.children).forEach(elem => {
        a += Number(elem.children[3].children[1].innerHTML)
    })
    let sum = 0;
    Object.values(cartContent.children).forEach(elem => {
        sum += Number(elem.children[4].innerHTML)
    })

    sumCount.innerHTML = `Count: ${a}`;
    sumPrice.innerHTML = `Price: ${sum} €`;

}





// DRAW CART PRODUCTS======================================================
function showCart(){
    cart.forEach(elem => {
        cartContent.insertAdjacentHTML('afterbegin', `
        <div class='cart-product-wrapper'>
            <div class='cart-photo'><img src="${elem.img}"></div>
            <div class='cart-name'>${elem.name}</div>
            <div class='cart-brand'>${elem.brand}</div>
            <div class='cart-count'>
                <div class='plus-btn'>+</div>
                <div class='current-value'>${elem.inCart}</div>
                <div class='minus-btn'>-</div>
            </div>
            <div class='cart-price'>${elem.price * elem.inCart}</div>
            <div class='cart-delete'>&#10060</div>
        </>
        `)
    });
    
    const plusBtn = document.querySelectorAll('.plus-btn');
    const minusBtn = document.querySelectorAll('.minus-btn');
    plusBtn.forEach(elem => {
        elem.addEventListener('click', changeCountProd)
    })
    minusBtn.forEach(elem => {
        elem.addEventListener('click', changeCountProd)
    })


    const removeBtn = document.querySelectorAll('.cart-delete');
    removeBtn.forEach(elem => {
        elem.addEventListener('click', removeCartProd);
    })
    
    summuryCount()
}

function clearCart(e){
    while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }
    summuryCount()
}