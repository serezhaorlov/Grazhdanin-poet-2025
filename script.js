import { UserInfo } from "./components/userInfo.js"
import PopUpWithForm from './components/popUpWithForms.js';
import { PopupCardPreview } from './components/PopupCardPreview.js'
import { initialCards, cardSection, elementSection, template, cardPopupElement, checkUrl } from './utils/constants.js';
import { Section } from './components/Section.js';
import { Card } from './components/Card.js';
import { Api } from "./components/api.js";

const checkbox = document.getElementById("checkbox") 
checkbox.disabled = true; //иначе требует крестик

const profileWholeBlock = document.querySelector('.header__profile-container')
const createInitiativeButton = document.querySelector('.front-window__create-button')

const api = new Api({url:'http://buymebuyme.xyz?q='})
api.getAnswer('вихрем')
.then((res) => {
    const a = res[Math.floor(Math.random()*5)];
    console.log(a.fields.text[0])
})

export const cardPopup = new PopupCardPreview(cardPopupElement);

const usernfo = new UserInfo ({userName: '.header__profile-title'});

const popupWithProfile = new PopUpWithForm ('.popup', {handleFormSubmit: (inputdata) => {
    usernfo.setUserInfo(inputdata);
    popupWithProfile.close();
}});

const popupInitiative = new PopUpWithForm ('.popup-initiative', {
    handleFormSubmit: (inputdata) => {
        api.getAnswer(inputdata.theme)
            .then((res) => {
                console.log(res)
                const number = Object.keys(res).length - 1;//количество объектов вернувшееся с сервера
                const poemObject = res[Math.floor(Math.random()*number)];//рандомный объект с стихотворением, не превыщающая количество объектов
                const poemString = poemObject.fields.text[0]
                return poemString;
            })
            .then ((res) => {
                const popup = document.querySelector('.popup-initiative');
                const textInput = popup.querySelector('#texted');
                textInput.value = res;
            })
            
        const modifier = 'card';
        const card = new Card(inputdata, modifier, template, (inputdata) => {cardPopup.open(inputdata)});
        const cardElement = card.getCard();
        indexSection.addItem(cardElement);
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
}, elementSection);

checkUrl() ? indexSection.render() : feedSection.render()

profileWholeBlock.addEventListener('click', () => openFullProfile());
createInitiativeButton.addEventListener('click', () => openCreateInitiative());
popupWithProfile.setEventListeners();
popupInitiative.setEventListeners();
cardPopup.setEventListeners();
