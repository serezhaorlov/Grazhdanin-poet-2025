import Popup from './popup.js';


export default class PopUpWithForm extends Popup {
  constructor (popup, {handleFormSubmit}) {
    super(popup)
      this._selectedForm = this._popup.querySelector('.form');
      this._saveButton = this._selectedForm.querySelector('.form__button')
      this._fromButtonReg = this._selectedForm.querySelector('.form__button_reg');
      this._fromTegButton = this._selectedForm.querySelector('#textrequest');
      this._formMainButton = this._selectedForm.querySelector('#texted');
      console.log(this._formMainButton)
      this._handleFormSubmit = handleFormSubmit;
    }

    setInputValue(value) {
      console.log(value)
      this._formMainButton.textContent = value;
      console.log(this._formMainButton.textContent)
    }

    _getInputValues() {
    this._inputList = this._selectedForm.querySelectorAll('.form__name');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues);

    return this._formValues;
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
