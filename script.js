// const myStorage = window.localStorage;
// const form = document.querySelector('.form');
// const saveButton = document.querySelector(".save-btn");

// const profileName = document.querySelector('.name');
// const profileAge = document.querySelector('.age')

// // const input = document.querySelector(".input-name")
// // const input2 = document.querySelector(".input-age")

// const inputElements = Array.from(document.querySelectorAll(".input"));
// console.log(myStorage);

// function saveInput (event) {
//     event.preventDefault()
//     let values = {}
//     inputElements.forEach(input => values[input.name] = input.value);
//     myStorage.setItem('profile', values)
//     // let name = input.value;
//     // let age = input2.value
//     // console.log(name, age);
//     // myStorage.setItem("name", name);
//     // myStorage.setItem("age", age);
//     // setProfileInfo()
// }


// function setProfileInfo () {
//     profileName.textContent = myStorage.name
//     profileAge.textContent = myStorage.age
// }

// form.addEventListener('submit', saveInput)
// // myStorage.clear()


// window.onload = setProfileInfo();



const profileHeaderButton = document.querySelector('.header__profile-container');
const regButton = document.querySelector('.header__logo');
const makeInitiativeButton = document.querySelector('.front-window__create-button');
const subscribeButton = document.querySelector('.footer__subscribe-button')
const bookmsrkButton =document.querySelector('.card__bookmark');
const seeAllButton = document.querySelector('.initiatives__see-all-button')

const popupProfile = document.querySelector('.popup-profile');
const popupEnter = document.querySelector('.popup');
const popupSubscribed = document.querySelector('.popup-subscribe');
const popupReg = document.querySelector('.popup-reg');
const popupMakeInitiative = document.querySelector('.popup-initiative')
const popupUser = document.querySelector('.popup-profile-full')

const open = (popup) => {
    popup.classList.add('popup_is-opened');
}

profileHeaderButton.addEventListener('click', () => open(popupProfile));
makeInitiativeButton.addEventListener('click', () => open(popupMakeInitiative));
subscribeButton.addEventListener('click', () =>open(popupSubscribed));
regButton.addEventListener('click', () => open(popupUser));
bookmsrkButton.addEventListener('click', () => open(popupEnter));
seeAllButton.addEventListener('click', () => open(popupReg)); 