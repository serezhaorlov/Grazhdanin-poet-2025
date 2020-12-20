export class Api {
    constructor(options) {
        this._url = options.url;
    }

    getAnswer(request) {
        return fetch (`${this._url}${request}&onlyLines=${1}`, {
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .catch((res) => {
            return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
        })
    }
}