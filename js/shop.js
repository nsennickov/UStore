'use strict';
import {tShirts, sShirts, jackets, pants, boots} from './data.js';

//Burger
const burgBtn = document.querySelector('.burger_btn');
const burgNav = document.querySelector('.filters');
const listDev = document.querySelector('.list');
burgBtn.addEventListener('click', function(e){
    e.preventDefault();
    burgBtn.classList.toggle('burger_btn-active')
    burgNav.classList.toggle('filters-active')
    listDev.classList.toggle('list-hidden')
})


const menuBtn = document.querySelector('.nav-low-size');
const menuContent = document.querySelector('nav');
const menuBtnArrow = document.querySelector('.nav-low-size_btn')
menuBtn.addEventListener('click', function(e){
    e.preventDefault();
    menuBtnArrow.classList.toggle('nav-low-size-active_btn');
    menuContent.classList.toggle('nav-active');
})

//Show ul filters onclick
const filterLabels = document.querySelectorAll('.filter_label');

filterLabels.forEach(elem => {
    elem.children[0].addEventListener('click', function(){
        if(!elem.children[2].className.includes('active')){//If ul have no class active
            //Add active to ul and rotate a arrowdown
            elem.children[1].style.transform = 'rotate(-135deg)'
            Object.values(elem.children).forEach((e, index) => {
                if(index >= 2){
                    e.classList.replace('filter_ul', 'active')
                }
            })
        }else{//if Ul have active 
            //remove it and rotate arrowup
            elem.children[1].style.transform = 'rotate(45deg)';
            Object.values(elem.children).forEach((e, index) => {
                if(index >= 2){
                    e.classList.replace('active', 'filter_ul')
                }
            })
        }

    })  
})



//  Create Array with all products
let allProducts = [];
tShirts.map(elem => {allProducts.push(elem)}) + pants.map(elem => {allProducts.push(elem)}) + jackets.map(elem => {allProducts.push(elem)}) + 
sShirts.map(elem => {allProducts.push(elem)}) + boots.map(elem => {allProducts.push(elem)});

//Generate web page with all products
const content = document.querySelector('.products');

allProducts.forEach((elem, index) => {
    if(index < 9){
        generatePage(elem)
    }
})

//Func that create a card with products
function generatePage(elem){
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
            <div class='card-add-to-cart'>Add to cart</div>
            <div class='card-price'>${elem.price} €</div>
        </div>
    </div>`
    )
}    
//Func that clear a web page wuth a card products
function clearPage(){
    let current = content.childElementCount;
    for(let i = 0; i < current; i++){
        content.removeChild(content.children[0])
    }
}

//Change Web pages 
const prevBtn = document.querySelector('.prevBtn').addEventListener('click', swapPage);
const nextBtn = document.querySelector('.nextBtn').addEventListener('click', swapPage);
const currentPage = document.querySelector('.list_current');
currentPage.innerHTML = '1';



let i = 9; // i its first item in second page
let obj = allProducts;
function swapPage(e){
    if(e.target.classList.contains('nextBtn')){
        let j = i + 9; //j its last item in second page page
        if(i < obj.length){
            clearPage();

            //Add next page products
            obj.forEach((elem, index) => {
                if(i <= index && index < j){
                    generatePage(elem);
                }
            })
            currentPage.innerHTML = Number(currentPage.innerHTML) + 1;
            i += 9;
        }
    }else if(e.target.classList.contains('prevBtn')){
        let k = i - 9; // k its last item in first page
        let j = k - 9; //j its first item in first page

        if(j >= 0){
            clearPage();

            //Add prev page products
            obj.forEach((elem, index) => {
                if(j <= index && index < k){
                    generatePage(elem);
                }
            })
            currentPage.innerHTML = Number(currentPage.innerHTML) - 1;
            i -= 9;
        }
    }
}


// FILTER FUNCTION !!!!!!!!!!!!!!!!!!!!!!!!!!@@
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// HERE IS FUNC THAT mAKE SEARCH OF LIST ITEM
const searchInput = document.querySelector('.search').addEventListener('click', searchProd);

function searchProd(){
    let input = document.querySelector('.search_input').value; //Get input value
    clearPage();

    obj = allProducts.filter(element => {
        element['search'].forEach(elem => {
            if(elem == input){
                return elem
            }
        })
    })

    obj.forEach((elem, index) => {
        if(index < 9){
            generatePage(elem)
        }
    })


}

// HERE IS FUNC THAT MAKE SORT BY NAME OR PRICE OR BRAND
let slider = document.querySelectorAll('.sort_hidden');
slider.forEach(elem => {elem.addEventListener('click', sortProducts)})
let isSorted = false;

function sortProducts(e){
    clearPage();
    slider.forEach(elem => {
        elem.classList.replace('sort_active', 'sort_hidden');
    })
    e.target.classList.replace('sort_hidden', 'sort_active');


    if(e.target.innerHTML == 'Sort by name'){
        if(isSorted){
            obj.sort((a, b) => { 
                if(a.name > b.name){
                    return 1
                }else if(a.name < b.name){
                    return -1
                }
            })
        }else{
            obj.sort((a, b) => { 
                if(a.name < b.name){
                    return 1
                }else if(a.name > b.name){
                    return -1
                }
            })
        }
        obj.forEach((elem, index) => {
            if(index < 9){
                generatePage(elem)
            }
        })

    }else if(e.target.innerHTML == 'Sort by price'){
        if(isSorted){
            obj.sort((a, b) => { return a.price - b.price})
        }else{
            obj.sort((a, b) => { return b.price - a.price})
        }
        obj.forEach((elem, index) => {
            if(index < 9){
                generatePage(elem)
            }
        })
        
    }else if(e.target.innerHTML == 'Sort by brand'){
        if(isSorted){
            obj.sort((a, b) => { 
                if(a.brand > b.brand){
                    return 1
                }else if(a.brand < b.brand){
                    return -1
                }
            })
        }else{
            obj.sort((a, b) => { 
                if(a.brand < b.brand){
                    return 1
                }else if(a.brand > b.brand){
                    return -1
                }
            })
        }
        obj.forEach((elem, index) => {
            if(index < 9){
                generatePage(elem)
            }
        })
    }else if(e.target.innerHTML == 'No sort'){
        allProducts.forEach((elem, index) => {
            if(index < 9){
                console.log('qwe')
                generatePage(elem)
            }
        })
    }


    if(isSorted){
        isSorted = false;
    }else{
        isSorted = true;
    }
}


// sadsadsadasd
var rangeSlider = document.getElementById('filter_price');

noUiSlider.create(rangeSlider, {
    start: [0, 213],
    connect: true,
    range: {
        'min': 0,
        'max': 213,
    },
    tooltips: true,
    step: 1,
    pips: {
        mode: 'range',
        stepped: true,
        density: 5
    }

});

const touchArea = document.querySelectorAll('.noUi-touch-area');
const toolTip = document.querySelectorAll('.noUi-tooltip');
touchArea.forEach(elem => elem.addEventListener('mouseup', noUiFilter));

function noUiFilter(){
    clearPage();
    let minPrice = toolTip[0].innerText;
    let maxPrice = toolTip[1].innerText;

    obj = allProducts.filter(elem => {
        if(Number(minPrice) <= elem.price && elem.price <= Number(maxPrice)){
            return elem
        }
    }).forEach((elem, index) => {
        if(index < 9){
            generatePage(elem)
        }
    })
}

//FUCNTION THAT FILTER PRODUCts In weB paGE
const styleLabel = document.getElementById('style_label');

const allLabels = document.querySelectorAll('.filter_check_box');
allLabels.forEach(elem => {
    elem.addEventListener('click', onClickFilter)
})

function onClickFilter(e){
    obj = [];
    clearPage();
    let fillters = {
        type: [],
        brand: [],
        style: [],
    };
    
    Object.values(allLabels).filter(elem => {
        if(elem.checked){
            if(elem.dataset.type){
                fillters.type.push(elem.dataset.type)
            }else if(elem.dataset.brand){
                fillters.brand.push(elem.dataset.brand)
            }else if(elem.dataset.style){
                fillters.style.push(elem.dataset.style)
            }
        }
    });

    let checkedFilters=[...fillters.type,...fillters.brand,...fillters.style]
    if(checkedFilters.length > 0){
        obj = allProducts.map((elem)=>{
            return checkedFilters.map((innerElem)=>{
                if(Object.values(elem).includes(innerElem)){
                    return elem
                }
            })
        }).map((elem)=>{return elem.filter((innerElem)=>{
            if(innerElem!='undefined'){
                return innerElem
            }
        })}).filter(elem => {
        
            if(elem.length == checkedFilters.length){
               return elem
            }   
        }).map(elem=>elem.find(elem=>elem))

        obj.forEach((elem, index) => {
            if(index < 9){
                generatePage(elem)
            }
        })
    }else{
        allProducts.forEach((elem, index) => {
            if(index < 9){
                generatePage(elem)
            }
        })
    }
}





export {allProducts}