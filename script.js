import { UserInfo } from "./components/UserInfo.js"
import PopUpWithForm from './components/PopUpWithForms.js';
import { PopupCardPreview } from './components/PopupCardPreview.js'
import PopupWithRequest from './components/PopupWithRequest.js'
import { Section } from './components/Section.js';
import { Card } from './components/Card.js';
import { FeedElement } from './components/FeedElements.js'
import { Api } from "./components/Api.js";
import { FormValidator } from "./components/FormValidator.js"
import {validationElement, 
        initialCards, 
        cardSection, 
        elementSection, 
        template, 
        cardPopupElement, 
        profileWholeBlock, 
        createInitiativeButton, 
        userAvatar, 
        userName, 
        popupEditProfileForm, 
        popupAddInitiativeForm, 
        checkUrl} from './utils/constants.js';


const popupEditProfileValidator = new FormValidator(validationElement, popupEditProfileForm);//валидация редактирования профиля
popupEditProfileValidator.enableValidation();

const popupAddInitiativeValidator = new FormValidator(validationElement, popupAddInitiativeForm);//валидация добавления инициатвы
popupAddInitiativeValidator.enableValidation();

const api = new Api({url:'https://buymebuyme.xyz?q='})//api сервера

const cardPopup = new PopupCardPreview(cardPopupElement);//попап превью карточки

const userInfo = new UserInfo (userAvatar, userName);//информация пользователя

const popupEditProfile = new PopUpWithForm ('.popup-edit', (inputdata) => {userInfo.setUserInfo(inputdata)});//попап редактирования профиля 

const createInitiativePopup = new PopupWithRequest('.popup-initiative', (data) => addCard(data));//попап создания инициативы

createInitiativePopup.setRequest((value) => {//создания инициативы из ответа сервера
        api.getAnswer(value)
        .then ((res) => {
            if(res.length === 0) {
                popupAddInitiativeValidator.showServerError()// проверка на ошибку в ответе сервера
            } else {
                createInitiativePopup.setTextInInput(res);//данные с сервера передаются в инпут попапа создания инициативы
            }
        })
})

const openFullProfile = () => { //функция открытия попапа редактирования профиля, сброс ошибок валидации
    popupEditProfileValidator.resetErrorMessage();
    popupEditProfileValidator.toggleButtonState();
    popupEditProfile.open();
}

const openCreateInitiative = () => {//функция открытия попапа создания инициативы, сброс ошибок, получения заполненой информации о пользователя из разметки страницы
    popupAddInitiativeValidator.resetErrorMessage();
    // popupAddInitiativeValidator.toggleButtonState();
    createInitiativePopup.open();
    createInitiativePopup.getAuthorInfo(userInfo.getUserInfo());
}

const addCard = (cardData) => {//создание карточки на главной странице
    const card = new Card(cardData, template, (data) => cardPopup.open(data));
    indexSection.addItem (card.getCard());
} 

const addFeedElements = (CardData) => {// создание элемента ленты на странице ленты
    const element = new FeedElement (CardData, template, (data) => {cardPopup.open(data)});
    const elementCard = element.getCard();
    feedSection.addItem(elementCard);
}

const indexSection = new Section ({//секция для карточек на главной странице
    items: initialCards.reverse(),
    renderer: (item) => addCard(item), 
}, cardSection)

const feedSection = new Section ({//секция для карточек на странице ленты
    items: initialCards.reverse(),
    renderer: (item) => addFeedElements(item)
}, elementSection);

if(checkUrl()){//проверка url страницы, в зависимости от этого вызывается соответствующий рендер карточек, устанавливаются соответствующие слушателя(во избежания ошибок в консоли)
    feedSection.render()
} else {
    indexSection.render()
    createInitiativeButton.addEventListener('click', () => openCreateInitiative());//слушатель, который вызывает функцию открывающую попап создания инициативы
} 

profileWholeBlock.addEventListener('click', () => openFullProfile());//слушатель, который вызывает функцию открывающую попап редактирования профиля
popupEditProfile.setEventListeners();//слушатель попапа
createInitiativePopup.setEventListeners();//слушатель попапа
cardPopup.setEventListeners();//слушатель попапа