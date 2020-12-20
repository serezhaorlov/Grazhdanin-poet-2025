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
      heading: 'Название инициативы',
      subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
      theme: 'Тема',
      date: '18.12.2020',
      text: 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
      user: 'Роман Лесной',
      likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },
    {
      heading: 'Название инициативы',
      subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
      theme: 'Тема',
      date: '18.12.2020',
      text: 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
      user: 'Роман Лесной',
      likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },
    {
      heading: 'Название инициативы',
      subheading: `Инициатива № ${Math.floor(Math.random()*1000000)}`,
      theme: 'Тема',
      date: '18.12.2020',
      text: 'Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ',
      user: 'Роман Лесной',
      likes: `${Math.floor(Math.random()*10000)} человек одобрили эту инициативу`
    },
  ]

  export const checkUrl = () => {
    return document.URL.includes('index');
  }
