import Popup from './popup.js';

export default class PopUpWithForm extends Popup {
    constructor (popup, {handleFormSubmit}) {
        super(popup)
        this._selectedForm = this._popup.querySelector('.form');
        this._saveButton = this._selectedForm.querySelector('.form__button')
        this._fromButtonReg = this._selectedForm.querySelector('.form__button_reg');
        this._fromTegButton = this._selectedForm.querySelector('#textrequest');
        this._formMainButton = this._selectedForm.querySelector('#texted');
        this._handleFormSubmit = handleFormSubmit;
    }

    // setInputValue(value) {
    //   this._formMainButton.value = value;
    // }
    
    _getInputValues() {
        this._inputList = this._selectedForm.querySelectorAll('.form__name');
        this._formValues = {};
        this._formValues.date = this._setDateWhenCardCreate();
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }


    _setDateWhenCardCreate() {
        const data = new Date();
        const year = data.getFullYear();
        const month = data.getMonth();
        const day = data.getDate();
        const date = `${day}.${month}.${year}`;
        
        return date
    }

    setEventListeners() {
        this._selectedForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputData = this._getInputValues();

            this._handleFormSubmit(inputData)
        });

        super.setEventListeners();
    }

    close(){
        this._selectedForm.reset();

        super.close()
    }
}
