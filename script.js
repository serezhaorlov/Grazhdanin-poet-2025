
import PopUpWithForm from './components/popUpWithForms.js';
import { PopupCardPreview } from './components/PopupCardPreview.js'
import { initialCards, cardSection, elementSection, template, cardPopupElement, checkUrl, formObj } from './utils/constants.js';
import { Section } from './components/Section.js';
import { Card } from './components/Card.js';

console.log("test");

const checkbox = document.getElementById("checkbox") 
checkbox.disabled = true;//иначе требует крестик

const profileButtonOpen = document.querySelector('.header__profile-title')
const profileWholeBlock = document.querySelector('.header__profile-container')
const createInitiativeButton = document.querySelector('.front-window__create-button')
const cardText = document.querySelector('.card__main-text')
const cardTitle = document.querySelector('.card__heading')

export const cardPopup = new PopupCardPreview(cardPopupElement);

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

const openFullProfile = () => { //фукции потому что потом все равно делать если менять данные профиля через api
    popupWithProfile.open()
}

const openCreateInitiative = () => {
    popupInitiative.open()
}

const indexSection = new Section ({
    items: initialCards.reverse(),
    modifier: 'card',
    renderer: (item, modifier) => {
        const card = new Card(item, modifier, template, (data) => {cardPopup.open(data)});
        const cardElement = card.getCard();
        indexSection.addItem(cardElement);
    }, 
}, cardSection)


const feedSection = new Section ({
    items: initialCards.reverse(),
    modifier: 'element',
    renderer: (item, modifier) => {
        const card = new Card(item, modifier, template, (data) => {cardPopup.open(data)});
        const cardElement = card.getCard();
        feedSection.addItem(cardElement);
    }, 
}, elementSection)

checkUrl() ? indexSection.render() : feedSection.render()

profileWholeBlock.addEventListener('click', () => openFullProfile());
createInitiativeButton.addEventListener('click', () => openCreateInitiative());
popupWithProfile.setEventListeners();
popupInitiative.setEventListeners();
cardPopup.setEventListeners();
