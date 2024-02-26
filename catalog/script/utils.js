export function getBasketLocalStorage() {
    const cartDataJSON = localStorage.getItem('basket');
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

export function getPrice() {
    const nowPrice = localStorage.getItem('price');
    console.log(nowPrice)
    return nowPrice ? JSON.parse(nowPrice) : [];
}

export function setPrice(price) {
    basketSum = document.querySelector('.basket_sum')
    localStorage.setItem('price', JSON.stringify(price));
}

// Запись id товаров в LS
export function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.bascket_num');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
}

export function basketIncludes(basket) {
    localStorage.setItem('basket', JSON.stringify(basket));

    console.log(localStorage.basket)
}

// Проверка, существует ли товар указанный в LS 
// (если например пару дней не заходил юзер, а товар, который у него в корзине, уже не существует)
export function checkingRelevanceValueBasket(productsData) {
    const basket = getBasketLocalStorage();

    basket.forEach((basketId, index) => {
        const existsInProducts = productsData.some(item => item.id === Number(basketId));
        if (!existsInProducts) {
            basket.splice(index, 1);
        }
    });

    setBasketLocalStorage(basket);
}