const divFirstName = document.querySelector('.div--firstname');
const firstName = document.querySelector('.input__firstname');
const formSignUp = document.querySelector('.form__signup');
const para = document.createElement("p");


function showErrorMessage() {
    if (!firstName.value) {
        para.textContent = "First Name cannot be empty"
        para.classList.add('message--error');
        divFirstName.appendChild(para);
    } else {
        para.textContent = "";
    }
}


firstName.addEventListener('input',showErrorMessage );


/* function createPara () {
    para.textContent = "shit";
    divFirstName.appendChild(para);
}

createPara(); */