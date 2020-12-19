export class UserInfo {
  constructor({userName}){
    this._name = document.querySelector(userName);
  }

  getUserInfo(){
    return {
      name: this._name.textContent,
    };
  }

  setUserInfo(data){
    if (data.text){
      this._name.textContent = data.text;
    }
  }
}
