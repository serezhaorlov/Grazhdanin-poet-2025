import { UserInfo } from "./components/UserInfo.js"
import PopUpWithForm from './components/PopUpWithForms.js';
import { PopupCardPreview } from './components/PopupCardPreview.js'
import PopupWithRequest from './components/PopupWithRequest.js'
import { initialCards, cardSection, elementSection, template, cardPopupElement, profileWholeBlock, createInitiativeButton, userAvatar, userName, checkUrl} from './utils/constants.js';
import { Section } from './components/Section.js';
import { Card } from './components/Card.js';
import { FeedElement } from './components/FeedElements.js'
import { Api } from "./components/Api.js";

// const checkbox = document.getElementById("checkbox") 
// checkbox.disabled = true; //иначе требует крестик

const api = new Api({url:'https://buymebuyme.xyz?q='})

const cardPopup = new PopupCardPreview(cardPopupElement);

const userInfo = new UserInfo (userAvatar, userName);

const popupEditProfile = new PopUpWithForm ('.popup-edit', (inputdata) => {userInfo.setUserInfo(inputdata)});

const createInitiativePopup = new PopupWithRequest('.popup-initiative', (data) => addCard(data));

createInitiativePopup.setRequest((value) => {
        api.getAnswer(value)
        .then ((res) => {
            if(res.length === 0) {
                console.log("error")
            } else {
                createInitiativePopup.setTextInInput(res);
            }
        })
        .catch(err => console.log(err))
})


const openFullProfile = () => { //фукции потому что потом все равно делать если менять данные профиля через api
    popupEditProfile.open()
}

const openCreateInitiative = () => {
    createInitiativePopup.open();
    createInitiativePopup.getAuthorInfo(userInfo.getUserInfo());
}

const addCard = (cardData) => {
    const card = new Card(cardData, template, (data) => cardPopup.open(data));
    indexSection.addItem (card.getCard());
} 

const addFeedElements = (CardData) => {
    const element = new FeedElement (CardData, template, (data) => {cardPopup.open(data)});
    const elementCard = element.getCard();
    feedSection.addItem(elementCard);
}

const indexSection = new Section ({
    items: initialCards.reverse(),
    renderer: (item) => addCard(item), 
}, cardSection)

const feedSection = new Section ({
    items: initialCards.reverse(),
    renderer: (item) => addFeedElements(item)
}, elementSection);

if(checkUrl()){
    feedSection.render()
} else {
    indexSection.render()
    createInitiativeButton.addEventListener('click', () => openCreateInitiative());
} 

profileWholeBlock.addEventListener('click', () => openFullProfile());
// createInitiativeButton.addEventListener('click', () => openCreateInitiative());
popupEditProfile.setEventListeners();
createInitiativePopup.setEventListeners();
cardPopup.setEventListeners();