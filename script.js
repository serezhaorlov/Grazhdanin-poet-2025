
const checkbox = document.getElementById("checkbox") 
checkbox.disabled = true;//иначе требует крестик

const profileButtonOpen = document.querySelector('.header__profile-title')
const profileWholeBlock = document.querySelector('.header__profile-container')
const createInitiativeButton = document.querySelector('.front-window__create-button')
const cardText = document.querySelector('.card__main-text')
const cardTitle = document.querySelector('.card__heading')


const popupWithProfile = new PopUpWithForm ('.popup', {handleFormSubmit: (inputdata) => {
    profileButtonOpen.textContent = inputdata.text
    popupWithProfile.close()
}});

const popupInitiative = new PopUpWithForm ('.popup-initiative', {handleFormSubmit: (inputdata) => {
    console.log(inputdata)
    cardTitle.textContent = inputdata.name
    cardText.textContent = inputdata.text
    popupInitiative.close()
}})
popupWithProfile.setEventListeners()
popupInitiative.setEventListeners()


const openFullProfile = () => { //фукции потому что потом все равно делать если менять данные профиля через api
    popupWithProfile.open()
}

const openCreateInitiative = () => {
    popupInitiative.open()
}



profileWholeBlock.addEventListener('click', () => openFullProfile())

createInitiativeButton.addEventListener('click', () => openCreateInitiative())



































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



// const profileHeaderButton = document.querySelector('.header__profile-title');
// const regButton = document.querySelector('.header__logo');
// const makeInitiativeButton = document.querySelector('.front-window__create-button');
// const subscribeButton = document.querySelector('.footer__subscribe-button')
// const bookmsrkButton =document.querySelector('.card__bookmark');
// const seeAllButton = document.querySelector('.initiatives__see-all-button')
// const cardButton = document.querySelectorAll('.card');

// const popupProfile = document.querySelector('.popup-profile-full');
// const popupEnter = document.querySelector('.popup');
// const popupSubscribed = document.querySelector('.popup-subscribe');
// const popupReg = document.querySelector('.popup-reg');
// const popupMakeInitiative = document.querySelector('.popup-initiative')
// const popupUser = document.querySelector('.popup-profile-full')
// const popupCard = document.querySelector('.popup-card');

// const open = (popup) => {
//     popup.classList.add('popup_is-opened');
// }

// cardButton.forEach((card) => {
//     card.addEventListener('click', () => open(popupCard))
// })

// profileHeaderButton.addEventListener('click', () => open(popupProfile));
// makeInitiativeButton.addEventListener('click', () => open(popupMakeInitiative));
// subscribeButton.addEventListener('click', () =>open(popupSubscribed));
// regButton.addEventListener('click', () => open(popupUser));
// bookmsrkButton.addEventListener('click', () => open(popupEnter));
// seeAllButton.addEventListener('click', () => open(popupReg)); 