import PopUpWithForm from "./components/popupWithForms.js";
import {UserInfo} from "./components/userInfo.js";

const checkbox = document.getElementById("checkbox") 
checkbox.disabled = true;//иначе требует крестик

const profileWholeBlock = document.querySelector('.header__profile-container')
const createInitiativeButton = document.querySelector('.front-window__create-button')
const cardText = document.querySelector('.card__main-text')
const cardTitle = document.querySelector('.card__heading')

const userInfo = new UserInfo({ userName: '.header__profile-title'})

const popupWithProfile = new PopUpWithForm ('.popup', {handleFormSubmit: (inputdata) => {
    userInfo.setUserInfo(inputdata) 
    popupWithProfile.close()
}});

const popupInitiative = new PopUpWithForm ('.popup-initiative', {handleFormSubmit: (inputdata) => {
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