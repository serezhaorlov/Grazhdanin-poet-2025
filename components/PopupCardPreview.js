import Popup from './popup.js';

export class PopupCardPreview extends Popup {
    constructor (popup) {
        super(popup);
        this._popupHeading = this._popup.querySelector('.popup-card__heading');
        this._popupSubheading = this._popup.querySelector('.popup-card__sudheading');
        this._popupAuthor = this._popup.querySelector('.popup-card__author');
        this._popupDate = this._popup.querySelector('.popup-card__date');
        this._popupText = this._popup.querySelector('.popup-card__text');
        this._popupLike = this._popup.querySelector('.popup-card__like-counter');
    }

    open ({heading, subheading, theme, date, text, user, likes}) {
        this._popupHeading.textContent = heading;
        this._popupSubheading.textContent = subheading;
        this._popupAuthor.textContent = user;
        this._popupDate.textContent = date;
        this._popupText.textContent = text;
        this._popupLike.textContent = likes;
        super.open();
    }
}