import Popup from './Popup.js';

export default class PopupWithRequest extends Popup {
    constructor (popup, submitFormHandler, author) {
        super(popup)
        this._popupForm = this._popup.querySelector('.form');
        this._requestInput = this._popupForm.querySelector('.form__request-input');
        this._mainTextInput = this._popupForm.querySelector('.form__name_text');
        this._inputFields = Array.from(this._popupForm.querySelectorAll('.form__input-field'));
        this._pushRequestButton = this._popupForm.querySelector('.form__push-button');
        this._submitFormHandler = submitFormHandler;
    }

    setRequest(request) {
        this._processRequest = request;
    }

    _getRequest() {
        this._processRequest(this._requestInput.value)
    }

    setTextInInput(res) { 
        const number = Object.keys(res).length - 1;//количество объектов вернувшееся с сервера
        const poemObject = res[Math.floor(Math.random()*number)];//рандомный объект с стихотворением, не превыщающая количество объектов
        const poemString = poemObject.fields.text[0]
        this._mainTextInput.value = poemString;
    }

    _setDateWhenCardCreate() {
        const data = new Date();
        const year = data.getFullYear();
        const month = data.getMonth();
        const day = data.getDate();
        const date = `${day}.${month}.${year}`;
        
        return date
    }

    _getInputValues() {
        this._formValues = {};
        this._formValues.date = this._setDateWhenCardCreate();
        this._formValues.user = this._author;
        this._formValues.userAvatar = this._authorAvatar;
        this._formValues.subheading = `Инициатива № ${Math.floor(Math.random()*1000000)}`,
        this._inputFields.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues);
        return this._formValues;
    }

    getAuthorInfo(author) {
        console.log(author);
        this._author = author.name;
        this._authorAvatar = author.avatar;
    }

    _submitHandler () {
        event.preventDefault();
        this._submitFormHandler(this._getInputValues());
        this.close();
    }

    setEventListeners(){
        this._pushRequestButton.addEventListener('click', () => this._getRequest());
        this._popupForm.addEventListener('submit',() => this._submitHandler());
        super.setEventListeners();
    }

    close(){
        super.close();
        this._popupForm.reset();
    }
}    