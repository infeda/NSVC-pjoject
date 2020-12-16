const introductionButton = document.querySelector('.introduction__button');
const servicesLink = document.querySelector('.header__text_categ_services');
const contactsLink = document.querySelector('.header__text_categ_contacts');

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