// get array of input div
// get array of input


const divFirstName = document.querySelector('.div--firstname');
const firstName = document.querySelector('.input__firstname');
const para = document.createElement("p");
const iconError = document.querySelector('.icon--error');


function showErrorMessage() {
    if (!firstName.value) {
        para.textContent = "First Name cannot be empty"
        para.classList.add('message--error');
        firstName.classList.add('input--error--border');
        divFirstName.appendChild(para);
        iconError.style.display = "block";
    } else {
        para.textContent = "";
        firstName.classList.remove('input--error--border');
        iconError.style.display = "none";
    }
}


firstName.addEventListener('input',showErrorMessage );


/* function createPara () {
    para.textContent = "shit";
    divFirstName.appendChild(para);
}

createPara(); */