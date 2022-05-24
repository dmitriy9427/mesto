const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');

const profileTitleElement = document.querySelector('.profile__title');
const nameInput = popup.querySelector('.popup__input_text_heading')

const profileSubtitleElement = document.querySelector('.profile__subtitle')
const nameTextInput = document.querySelector('.popup__input_text_subheading')

const formPopupElement = document.querySelector('.popup__form')


function openPopup() {
    nameInput.value = profileTitleElement.textContent;
    nameTextInput.value = profileSubtitleElement.textContent;
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

profileEditBtn.addEventListener('click', openPopup);


popupCloseBtn.addEventListener('click', closePopup);


formPopupElement.addEventListener('submit', function (event) {
    event.preventDefault()
    profileTitleElement.textContent = nameInput.value;
    profileSubtitleElement.textContent = nameTextInput.value;
    closePopup()
})