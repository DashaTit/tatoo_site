const personal = document.getElementsByClassName('personal')[0];
const popup = document.getElementsByClassName('popup')[0];
const btn_x = document.getElementsByClassName('btn_x')[0];
const bg = document.getElementsByClassName('popup_body')[0];
const body = document.body;
const telInput = document.querySelector('.tel_input');
const phoneBtn = document.querySelector('.personal_cab_btn');
const secPopup = document.querySelector('.modal_pin_code');
let phoneNumber = '';
const pinCode_btnX = document.querySelector('.pin_code_x')
const telChange = document.querySelector('.tel_mask')
const returnLink = document.querySelector('.no_code')
const time = document.querySelector('.time')
const bgCode = document.querySelector('.pin_code_body')
//poppup
document.body.style.overflowY = 'scroll';
personal.addEventListener('click', {
  handleEvent(event) {

    popup.classList.add('open');
    document.body.style.overflowY = 'hidden';
  }
});

btn_x.addEventListener('click', {
  handleEvent(event) {
    popup.classList.remove('open');
    document.body.style.overflowY = 'scroll';
  }
});

bg.addEventListener('click', function (e) {
  if (e.target === bg) {
    popup.classList.remove('open');
    document.body.style.overflowY = 'scroll';
  }
});

//TEL MASK
const mask = IMask(telInput, {
  mask: '{+7}(000)-000-00-00'
});

telInput.addEventListener('input', function() {
  console.log('wk')
  if (mask.masked.isComplete) {
    phoneBtn.classList.add('active');
    
  } else {
    phoneBtn.classList.remove('active');
  }
});

//LOGIN SMS  phoneBtn
phoneBtn.addEventListener('click', function (e) {
  console.log('sksk');
  popup.classList.remove('open');
  secPopup.classList.add('open');

  console.log(mask.masked.value);
  telChange.innerHTML = mask.masked.value;


});


pinCode_btnX.addEventListener('click', {
  handleEvent(event) {
    secPopup.classList.remove('open');
    document.body.style.overflowY = 'scroll';
  }
});
bg.addEventListener('click', function (e) {
  if (e.target === bg) {
    popup.classList.remove('open');
    document.body.style.overflowY = 'scroll';
  }
});

returnLink.addEventListener('click', function (e) {
  secPopup.classList.remove('open');
  popup.classList.add('open');

})

bgCode.addEventListener('click', function (e) {
  if (e.target === bgCode) {
    secPopup.classList.remove('open');
    document.body.style.overflowY = 'scroll';
  }
});

//TAB PRODUCT CARDS
const tabText = document.querySelectorAll('.tab_text');
const tabContent = document.querySelectorAll(".tab");
const like = document.querySelector(".like_status")

like.addEventListener("click", function() {
  like.classList.toggle('active')
})

tabText.forEach(function(item) {
  item.addEventListener("click", function() {
    console.log("click")
    let currentLink = item;
    let tabId = currentLink.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    tabText.forEach(function(item) {
      item.classList.remove("active");
    });

    tabContent.forEach(function(item) {
      item.classList.remove('active')
    })
    

    currentLink.classList.add('active');
    currentTab.classList.add("active");
    })
})

// КАТАЛОГ
const burgerMenu = document.querySelector(".burger");
const burgerPopup = document.querySelector(".popup-burger");
let burgerStatus = true;
const categories = document.querySelector(".burger-categories");
const brends = document.querySelector(".burger-brends");
const headerCategories = document.querySelector(".header_categories");
const headerBrends = document.querySelector(".header_brends")

burgerMenu.addEventListener("click", function () {
    burgerPopup.classList.toggle("active");
    categories.classList.add("active");
    brends.classList.remove("active");
    headerCategories.classList.add("active");
    headerBrends.classList.remove("active");
})

headerCategories.addEventListener("click", function () {
    categories.classList.add("active");
    brends.classList.remove("active");
    headerCategories.classList.add("active");
    headerBrends.classList.remove("active");
})

headerBrends.addEventListener("click", function () {
    categories.classList.remove("active");
    brends.classList.add("active");
    headerCategories.classList.remove("active");
    headerBrends.classList.add("active");
})