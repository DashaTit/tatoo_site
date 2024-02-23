// const personal = document.getElementsByClassName('personal')[0];
// const popup = document.getElementsByClassName('popup')[0];
// const btn_x = document.getElementsByClassName('btn_x')[0];
// const bg = document.getElementsByClassName('popup_body')[0];
// const body = document.body;
// const telInput = document.querySelector('.tel_input');
// const phoneBtn = document.querySelector('.personal_cab_btn');
// const secPopup = document.querySelector('.modal_pin_code');
// let phoneNumber = '';
// const pinCode_btnX = document.querySelector('.pin_code_x')
// const telChange = document.querySelector('.tel_mask')
// const returnLink = document.querySelector('.no_code')
// const time = document.querySelector('.time')
// const bgCode = document.querySelector('.pin_code_body')
// //poppup
// document.body.style.overflowY = 'scroll';
// personal.addEventListener('click', {
//   handleEvent(event) {

//     popup.classList.add('open');
//     document.body.style.overflowY = 'hidden';
//   }
// });

// btn_x.addEventListener('click', {
//   handleEvent(event) {
//     popup.classList.remove('open');
//     document.body.style.overflowY = 'scroll';
//   }
// });

// bg.addEventListener('click', function (e) {
//   if (e.target === bg) {
//     popup.classList.remove('open');
//     document.body.style.overflowY = 'scroll';
//   }
// });

// //TEL MASK
// const mask = IMask(telInput, {
//   mask: '{+7}(000)-000-00-00'
// });

// telInput.addEventListener('input', function() {
//   console.log('wk')
//   if (mask.masked.isComplete) {
//     phoneBtn.classList.add('active');
    
//   } else {
//     phoneBtn.classList.remove('active');
//   }
// });

// //LOGIN SMS  phoneBtn
// phoneBtn.addEventListener('click', function (e) {
//   console.log('sksk');
//   popup.classList.remove('open');
//   secPopup.classList.add('open');

//   console.log(mask.masked.value);
//   telChange.innerHTML = mask.masked.value;


// });


// pinCode_btnX.addEventListener('click', {
//   handleEvent(event) {
//     secPopup.classList.remove('open');
//     document.body.style.overflowY = 'scroll';
//   }
// });
// bg.addEventListener('click', function (e) {
//   if (e.target === bg) {
//     popup.classList.remove('open');
//     document.body.style.overflowY = 'scroll';
//   }
// });

// returnLink.addEventListener('click', function (e) {
//   secPopup.classList.remove('open');
//   popup.classList.add('open');

// })

// bgCode.addEventListener('click', function (e) {
//   if (e.target === bgCode) {
//     secPopup.classList.remove('open');
//     document.body.style.overflowY = 'scroll';
//   }
// });


// const burgerMenu = document.querySelector(".burger");
// const burgerPopup = document.querySelector(".popup-burger");
// let burgerStatus = true;
// const categories = document.querySelector(".burger-categories");
// const brends = document.querySelector(".burger-brends");
// const headerCategories = document.querySelector(".header_categories");
// const headerBrends = document.querySelector(".header_brends")

// burgerMenu.addEventListener("click", function () {
//     burgerPopup.classList.toggle("active");
//     categories.classList.add("active");
//     brends.classList.remove("active");
//     headerCategories.classList.add("active");
//     headerBrends.classList.remove("active");
// })

// headerCategories.addEventListener("click", function () {
//     categories.classList.add("active");
//     brends.classList.remove("active");
//     headerCategories.classList.add("active");
//     headerBrends.classList.remove("active");
// })

// headerBrends.addEventListener("click", function () {
//     categories.classList.remove("active");
//     brends.classList.add("active");
//     headerCategories.classList.remove("active");
//     headerBrends.classList.add("active");
// })

let productsData = []
let showBtn = document.querySelector('.show_more');
const products = document.querySelector('.products');
let shownCards = 4;
let countCreateCards = 1;
const cardCount = 3;



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
};


function createCards(data) {
    data.forEach(card => {

        const { id, title, price, sale, status } = card;
        console.log(card)
		const cardItem = 
			`
            <div className="card" data-product-id="${id}">
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
            </div>
            `
        products.insertAdjacentHTML('beforeEnd', cardItem);
	});
}

function sliceArrCards() {

    if (shownCards >= productsData.length) return;

    countCreateCards++;

    const countShowCards = cardCount * countCreateCards;

    const arrCards = productsData.slice(shownCards-1, countShowCards);
    createCards(arrCards);

    shownCards = products.children.length;

    if (shownCards >= productsData.length) {
        showBtn.classList.add('none')
    }
}

showBtn.addEventListener('click', sliceArrCards);

