const introductionButton = document.querySelector('.introduction__button');
const servicesLink = document.querySelector('.header__text_categ_services');
const contactsLink = document.querySelector('.header__text_categ_contacts');
const formElement = document.querySelector('.feedback__form');
const done = document.querySelector('.text-done');

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