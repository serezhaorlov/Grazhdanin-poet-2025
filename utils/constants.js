export const validationElement = {
    formSelector: '.form',
    inputSelector: '.form__input-field',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_unactive',
    inputErrorClass: 'form__name_error',
}

export const userObject = {
    userName: ".profile__name",
}
    
export const ESC_KEY = "Escape"
    
export const template = ".template";
export const popup = ".popup";
export const popupAdd = ".popup-add";
export const popupProfile = ".popup-profile";
export const popupPic = ".popup-pic";
export const popupDelete = ".popup-delete";
export const cardSection = document.querySelector('.cards');
export const elementSection = document.querySelector('.feed');
export const cardPopupElement = '.popup-card';
export const profileWholeBlock = document.querySelector('.header__avatar');
export const createInitiativeButton = document.querySelector('.front-window__create-button');
export const userAvatar = document.querySelector('.header__avatar');
export const userName = document.querySelector('.header__profile-title');
export const popupEditProfileForm = document.querySelector('.form_edit');
export const popupAddInitiativeForm = document.querySelector('.form__add-initiative');
    
export const initialCards = [
    {   heading: 'Вот так я сделался собакой...',
        subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
        theme: 'Животные',
        date: '06.07.1893 - 14.04.1930',
        text: 'Ну, это совершенно невыносимо!Весь как есть искусан злобой.Злюсь не так, как могли бы вы... ',
        user: 'Владимир Маяковский',
        userAvatar: './images/mayakovsky.png',
        likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },
    {
        heading: 'Я не то что схожу с ума...',
        subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
        theme: 'Время',
        date: '24.05.1940 - 28.01.1996',
        text: `Я не то что схожу с ума, но устал за лето.За рубашкой в комод полезешь, и день потерян...`,
        user: 'Иосиф Бродский',
        userAvatar: './images/brodsky.png',
        likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },
]

export const checkUrl = () => {
    return document.URL.includes('feed');
}
