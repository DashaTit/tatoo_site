"use strict"

import { basketIncludes,
    setBasketLocalStorage,
    getBasketLocalStorage
 } from "../script/utils.js";

let productsData = []
let showBtn = document.querySelector('.show_more');
const products = document.querySelector('.products');
let shownCards = 4;
let countCreateCards = 1;
const cardCount = 4;



getProducts();
// console.log(getProducts())
async function getProducts() {
    if (!productsData.length) {
        const res = await fetch('/product.json');
        productsData = await res.json();
    }

    // if (productsData.length < 4) {
    //     showBtn.classList.add('none')
    // } else {
    //     showBtn.classList.remove('none')
    // }


    renderStartPage(productsData);

    return productsData;
}

function renderStartPage(data) {
    const arrCards = data.slice(0, cardCount);

    console.log(arrCards)

    createCards(arrCards)

    const basket = getBasketLocalStorage();
    chekingActiveBtn(basket);
};


function createCards(data) {
    data.forEach(card => {

        const { id, title, price, sale, status } = card;
        console.log(card)
		const cardItem = 
			`
            <div class="card" data-id="${id}">
            <div class="header_card">
                <div class="card_status">${status}</div>
                <div class="like_status"></div>
            </div>

            <img src="../img/tabs/foxxx_kitsune.png" alt="" class="card-img">

            <div class="under_card">
                <div class="product_name">${title}</div>
                <div class="price">
                <div class="now_price">${price}</div>
                <div class="discount">${sale}</div>
                </div>
            </div>
            <div class="put_bg" ><button class="put" data-id="${id}">Добавить в корзину</button></div>
            </div>
            `
        products.insertAdjacentHTML('beforeEnd', cardItem);
	});
}

function sliceArrCards() {

    if (shownCards >= productsData.length) return;

    countCreateCards++;

    const countShowCards = cardCount * countCreateCards;

    const arrCards = productsData.slice(shownCards, countShowCards);
    createCards(arrCards);

    shownCards = products.children.length;

    if (shownCards >= productsData.length) {
        showBtn.classList.add('none')
    }
}

showBtn.addEventListener('click', sliceArrCards);

products.addEventListener('click', handleCardClick);




function handleCardClick(event) {
    const targetBtn = event.target.closest('.put');
    if (!targetBtn) return;
    console.log(event.target)

    const id = event.target.dataset.id;
    // const id = card.dataset.id;
    const basket = getBasketLocalStorage()

    basket.push(id);

    setBasketLocalStorage(basket)
    chekingActiveBtn(basket);
}


function chekingActiveBtn(basket) {
    const btn = document.querySelectorAll('.put');

    btn.forEach((button) => {
        const card = button.closest('.card');
        const id = card.dataset.id;
        const isInBasket = basket.includes(id);

        button.textContent = isInBasket ? 'В корзине' : 'Добавить в корзину';
    });
}