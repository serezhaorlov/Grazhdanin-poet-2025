import { Card } from './Card.js'

export class FeedElement extends Card {//создания элементов ленты инициатив
    constructor (data, templateSelector, openCardPreview) {
        super(data, templateSelector, openCardPreview)
        this._theme = data.theme;
        this._avatar = data.userAvatar;
        this._modifier = 'element';
        this._template = document.querySelector(templateSelector).content.querySelector(`.${this._modifier}`);
    }

    getCard() {
        this._card = this._template.cloneNode(true);
        
        this._cardLikeCounter = this._card.querySelector(`.${this._modifier}__like-counter`);
        this._cardSubheading = this._card.querySelector(`.${this._modifier}__sudheading`);
        
        this._cardHeading = this._card.querySelector(`.${this._modifier}__heading`);
        this._cardDate = this._card.querySelector(`.${this._modifier}__date`);
        this._cardTheme = this._card.querySelector(`.${this._modifier}__theme`);
        this._cardText = this._card.querySelector(`.${this._modifier}__main-text`);
        this._cardAuthor = this._card.querySelector(`.${this._modifier}__author`);
        this._cardAuthorAvatar = this._card.querySelector(`.${this._modifier}__avatar`);
        this._cardBookmark = this._card.querySelector(`.${this._modifier}__bookmark`);
                
        this._cardHeading.textContent = this._heading;
        this._cardDate.textContent = this._date;
        this._cardText.textContent = this._text;
        this._cardTheme.textContent = this._theme;
        this._cardAuthor.textContent = this._author;
        this._cardAuthorAvatar.src = this._avatar
        this._cardSubheading.textContent = this._subheading;
        this._cardLikeCounter.textContent = this._likes;

        this._setEventListeners();

        return this._card
    }
}