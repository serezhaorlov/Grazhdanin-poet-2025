const myStorage = window.localStorage;
const form = document.querySelector('.form');
const saveButton = document.querySelector(".save-btn");

const profileName = document.querySelector('.name');
const profileAge = document.querySelector('.age')

// const input = document.querySelector(".input-name")
// const input2 = document.querySelector(".input-age")

const inputElements = Array.from(document.querySelectorAll(".input"));
console.log(myStorage);

function saveInput (event) {
    event.preventDefault()
    let values = {}
    inputElements.forEach(input => values[input.name] = input.value);
    myStorage.setItem('profile', values)
    // let name = input.value;
    // let age = input2.value
    // console.log(name, age);
    // myStorage.setItem("name", name);
    // myStorage.setItem("age", age);
    // setProfileInfo()
}


function setProfileInfo () {
    profileName.textContent = myStorage.name
    profileAge.textContent = myStorage.age
}

form.addEventListener('submit', saveInput)
// myStorage.clear()

window.onload = setProfileInfo();