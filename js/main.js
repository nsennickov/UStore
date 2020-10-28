import {tShirts, sShirts, jackets, pants, boots} from './data.js';


//SCROLL
const scrol = document.querySelector('.intro_after');
scrol.addEventListener('click', scrolDown);
function scrolDown(){
    window.scrollTo(0, 1000);
}


// FUNCTION THAT FILTER PRODUCTS ON MAIN PAGE
let content = document.querySelector('.content');
ShowTopProducts()
function ShowTopProducts(){

    let topProducts = tShirts.filter(elem => {if(elem.top) return elem});
    sShirts.filter(elem => {if(elem.top) return topProducts.push(elem)}) + 
    jackets.filter(elem => {if(elem.top) return topProducts.push(elem)}) + boots.filter(elem => {if(elem.top) return topProducts.push(elem)});
    
    topProducts.forEach(elem => {
            content.insertAdjacentHTML('beforeend', 
            `
            <div class='card'>
                <div class='card-name'>${elem.name}</div>
                <div class='card-photo'><img src="${elem.img}"></div>
                <div class='card-info'>
                    <span class='card-info_style'>Style: ${elem.style}</span>
                    <span class='card-info_brand'>Brand: ${elem.brand}</span>
                    <span class='card-info_count'>${elem.count} left </span>
                    <span class='card-info_text'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse ad sequi. Aliquam, sit, numqua.</span>
                </div>
                <div class='card-buy'>
                    <div class='card-add-to-cart'>Buy now!</div>
                    <div class='card-price'>${elem.price} €</div>
                </div>
            </div>`
            )
    })
}


// burger
const burgBtn = document.querySelector('.burger_btn');
const burgNav = document.querySelector('.burger_nav');
burgBtn.addEventListener('click', function(e){
    e.preventDefault();
    burgBtn.classList.toggle('burger_btn-active')
    burgNav.classList.toggle('burger_nav-active')
})


