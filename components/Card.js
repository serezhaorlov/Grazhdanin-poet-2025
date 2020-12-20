export class Card {
    constructor (data, modifier, templateSelector, openCardPreview) {
        this._data = data;
        this._heading = data.heading;
        this._subheading = data.subheading;
        this._theme = data.theme;
        this._date = data.date;
        this._text = data.text;
        this._author = data.user;
        this._likes = data.likes;
        this._modifier = modifier;
        this._template = document.querySelector(templateSelector).content.querySelector(`.${this._modifier}`);
        this._openCardPreview = openCardPreview;
    }

    _checkElement() {
        if (this._modifier === 'element') {
            this._cardTheme = null;
            this._cardLikeCounter = this._card.querySelector(`.${this._modifier}__like-counter`);
            this._cardSubheading = this._card.querySelector(`.${this._modifier}__sudheading`);
            this._cardSubheading.textContent = this._subheading;
            this._cardLikeCounter.textContent = this._likes;
        } else {
            this._cardTheme = this._card.querySelector(`.${this._modifier}__theme`);
            this._cardTheme.textContent = this._theme;
        }
    }

    getCard() {
        this._card = this._template.cloneNode(true);
        this._cardHeading = this._card.querySelector(`.${this._modifier}__heading`);
        this._cardDate = this._card.querySelector(`.${this._modifier}__date`);
        this._cardTheme = this._card.querySelector(`.${this._modifier}__theme`);
        this._cardText = this._card.querySelector(`.${this._modifier}__main-text`);
        this._cardAuthor = this._card.querySelector(`.${this._modifier}__author`);
        this._cardBookmark = this._card.querySelector(`.${this._modifier}__bookmark`);
        
        this._cardHeading.textContent = this._heading;
        this._cardDate.textContent = this._date;
        this._cardTheme.textContent = this._theme;
        this._cardText.textContent = this._text;
        this._cardAuthor.textContent = this._author;

        this._setEventListeners();
        
        return this._card;
    }

    _setEventListeners() {
        this._cardText.addEventListener('click', () => this._openCardPreview(this._data));
    }
}