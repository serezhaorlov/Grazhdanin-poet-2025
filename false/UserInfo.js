export class UserInfo {// объект информации пользователя
    constructor(userAvatarSelector, userNameSelector){
        this._avatarProfile = userAvatarSelector
        this._nameProfile = userNameSelector;
    }

    setUserInfo(data){
        this._avatarProfile.src = data.avatar;
        this._nameProfile.textContent = data.name;
        console.log(this.getUserInfo());
    }

    getUserInfo(){
        this._profileInfo = {};
        this._profileInfo.name = this._nameProfile.textContent;
        this._profileInfo.avatar = this._avatarProfile.src;
        return this._profileInfo;
    }
}
