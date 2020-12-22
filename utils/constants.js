export const formObj = {
    formSelector: '.form',
    inputSelector: '.form__name',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_unactive',
    inputErrorClass: 'form_name_error',
    formCloseButton: '.form__close-button',
    buttonClose: '#button-close',
    submitButtonLoading: '.form__button_loading'
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
  
  export const initialCards = [
    {
      heading: 'Вот так я сделался собакой...',
      subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
      theme: 'Тема',
      date: '18.12.2020',
      text: 'Ну, это совершенно невыносимо!Весь как есть искусан злобой.Злюсь не так, как могли бы вы... ',
      user: 'Владимир Маяковский',
      likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },
    {
      heading: 'Я не то что схожу с ума...',
      subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
      theme: 'Тема',
      date: '18.12.2020',
      text: `Я не то что схожу с ума, но устал за лето.За рубашкой в комод полезешь, и день потерян...`,
      user: 'Иосиф Бродский',
      likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },

  ]
  export const checkUrl = () => {
    return document.URL.includes('index');
  }
