const personal = document.getElementsByClassName('personal')[0];
const popup = document.getElementsByClassName('popup')[0];
const btn_x = document.getElementsByClassName('btn_x')[0];
const bg = document.getElementsByClassName('popup_body')[0];
const body = document.body;
const telInput = document.querySelector('.tel_input');
const phoneBtn = document.querySelector('.personal_cab_btn');
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
})