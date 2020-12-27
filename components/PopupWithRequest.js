import Popup from './Popup.js';

export default class PopupWithRequest extends Popup {//конструктор попапа для формы содержащей поля для отправки запроса к сервиру
    constructor (popup, submitFormHandler, author) {
        super(popup)
        this._popupForm = this._popup.querySelector('.form');
        this._requestInput = this._popupForm.querySelector('.form__request-input');
        this._mainTextInput = this._popupForm.querySelector('.form__name_text');
        this._inputFields = Array.from(this._popupForm.querySelectorAll('.form__input-field'));
        this._pushRequestButton = this._popupForm.querySelector('.form__push-button');
        this._submitFormHandler = submitFormHandler;
    }

    setRequest(request) {//метод устанавливает метод запроса к серверу в метод соверщения запроса формы
        this._processRequest = request;
    }

    _getRequest() {//метод получающий текст запроса из инпута и передающий методу соверщающему запрос
        this._processRequest(this._requestInput.value)
    }

    setTextInInput(res) { //метод получающий запрос с сервера, обрабатывающий его и устанавливающий строку стихотворения в инпут осоновного текста формы создания инициативы
        const number = Object.keys(res).length - 1;//количество объектов со стихотворениями запроса, вернувшееся с сервера
        const poemObject = res[Math.floor(Math.random()*number)];//выбор рандомного объекта стихотворения из массива объектов стихотворений полученных в запросе
        const poemString = poemObject.fields.text[0];//получения строчки стихотворения из объекта стихотворения
        this._mainTextInput.value = poemString;//передача строчки стихотворения в значение инпута 
    }

    _setDateWhenCardCreate() {//дата создания карточки
        const data = new Date();
        const year = data.getFullYear();
        const month = data.getMonth();
        const day = data.getDate();
        const date = `${day}.${month}.${year}`;
        
        return date
    }

    _getInputValues() {//создание объекта в данными карточки инициативы
        this._formValues = {};
        this._formValues.date = this._setDateWhenCardCreate();
        this._formValues.user = this._author;
        this._formValues.userAvatar = this._authorAvatar;
        this._formValues.subheading = `Инициатива № ${Math.floor(Math.random()*1000000)}`,
        this._inputFields.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    getAuthorInfo(author) {//метод получающий данные пользователя из разметки, создающего карточку с инициативой
        this._author = author.name;
        this._authorAvatar = author.avatar;
    }

    _submitHandler () {//колбэк кнопки сабмита формы
        event.preventDefault();
        this._submitFormHandler(this._getInputValues());
        this.close();
    }

    setEventListeners(){
        this._pushRequestButton.addEventListener('click', () => this._getRequest());// отправка запроса по нажатию на кнопку отправки запроса
        this._popupForm.addEventListener('submit',() => this._submitHandler());
        super.setEventListeners();
    }

    close(){
        super.close();
        this._popupForm.reset();
    }
}    