export class Card {
    constructor (data, templateSelector, openCardPreview) {
        this._data = data;//объект с данными передающийся в попап превью карточки инициативы
        this._heading = data.heading;
        this._subheading = data.subheading;
        this._theme = data.theme;
        this._date = data.date;
        this._text = data.text;
        this._author = data.user;
        this._likes = data.likes;
        this._modifier = 'card';//модификатор создаваемой инициативы в соотвествии со секцией рендера
        this._template = document.querySelector(templateSelector).content.querySelector(`.${this._modifier}`);
        this._openCardPreview = openCardPreview;
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

    _bookmarkFunction() {
        this._cardBookmark.classList.toggle('card__bookmark_active');
    }

    _setEventListeners() {
        this._cardText.addEventListener('click', () => this._openCardPreview(this._data));
        if (this._modifier === 'card'){//проверка для элемента закладки карточек инициатив на главной странице
            this._cardBookmark.addEventListener('click', () => this._bookmarkFunction())
        }
    }
}