import Popup from './Popup.js';

export default class PopUpWithForm extends Popup {//попап форм
    constructor (popup, submitFormHandler) {
        super(popup)
        this._popupForm = this._popup.querySelector('.form');
        this._inputFields = Array.from(this._popupForm.querySelectorAll('.form__input-field'));
        this.submitFormHandler = submitFormHandler;
    }
    
    _getInputValues() {
        this._formValues = {};
        this._inputFields.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    _submitHandler () {
        event.preventDefault();

        this.submitFormHandler(this._getInputValues());
        this.close();
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', this._submitHandler.bind(this));
        super.setEventListeners();
    }

    close(){
        super.close()
        this._popupForm.reset();
    }
}
