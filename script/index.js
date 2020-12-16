const introductionButton = document.querySelector('.introduction__button');

introductionButton.addEventListener('click', () => {
    const feedbackInput = document.querySelector('.feedback__input_name');
    feedbackInput.focus();
});