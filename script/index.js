const introductionButton = document.querySelector('.introduction__button');
console.log(introductionButton);

introductionButton.addEventListener('click', () => {
    document.querySelector('.feedback__input_name').focus();
    console.log('button click');
});