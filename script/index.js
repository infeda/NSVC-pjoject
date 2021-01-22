const introductionButton = document.querySelector('.introduction__button');
const servicesLink = document.querySelector('.header__text_categ_services');
const contactsLink = document.querySelector('.header__text_categ_contacts');
const formElement = document.querySelector('.feedback__form');
const done = document.querySelector('.text-done');
const adress = document.querySelector('.contacts-list__block_adress');
const email = document.querySelector('.contacts-list__block_email');

introductionButton.addEventListener('click', () => {
  const feedbackInput = document.querySelector('.feedback__input_name');
  feedbackInput.focus();
  feedbackInput.scrollIntoView({block: 'center', behavior: 'smooth'});
});


servicesLink.addEventListener('click', () => {
  const servicesBlock = document.querySelector('.services');
  servicesBlock.scrollIntoView({block: 'center', behavior: 'smooth'});
});

contactsLink.addEventListener('click', () => {
  const contactsBlock = document.querySelector('.contacts');
  contactsBlock.scrollIntoView({block: 'center', behavior: 'smooth'});
});

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  formElement.reset();
  done.classList.add('text-done_visible');

});

adress.addEventListener('click', () => {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPad") != -1) || 
     (navigator.platform.indexOf("iPod") != -1)) {
    window.open("maps://maps.google.com/maps?daddr='verkiu gatve 5, vilnius, LT-08218'");
     } else /* else use Google */
    window.open("https://maps.google.com/maps?daddr='verkiu gatve 5, vilnius, LT-08218'");
})

email.addEventListener('click', () => {
  sendMail();
})


function sendMail() {
  var link = "mailto:info@mtvc.lt"
           + "?cc="
           + "&subject=" + encodeURIComponent("Norėčiau gauti buhalterinę paslaugą")
          //  + "&body=" + encodeURIComponent(formElement.querySelector('.feedback__input_name').value, formElement.querySelector('.feedback__input_tel-number').value)
  ;
  
  window.location.href = link;
}