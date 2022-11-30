
//input array = inputArray[index], div array = inputArray.childer[index]
const inputArray = document.querySelector('.form__signup');
const inputItem = ["First Name", "Last Name", "Email", "Password"];
const paraError = document.createElement("p");
const iconError = document.createElement("img");

// SCRIPT FOR EMPTY INPUT

function createIconError () {
    iconError.src = "/images/icon-error.svg";
    iconError.classList.add('icon--error');
}

for (let i = 0; i < inputArray.length - 1; i++) {

    function showErrorMessage() {
        
           if (!inputArray[i].value) {
               
                //error message
                paraError.textContent = `${inputItem[i]} cannot be empty`;
                paraError.classList.add('message--error');
                inputArray.children[i].appendChild(paraError);
               //error border
                inputArray[i].classList.add('input--error--border');
               //error icon
                createIconError();
                inputArray.children[i].appendChild(iconError);

           } else {
                paraError.textContent = "";
                inputArray[i].classList.remove('input--error--border');
                iconError.src = "";
           }
   }

   inputArray[i].addEventListener('input',showErrorMessage);

}

// SCRIPT FOR INVALID EMAIL INPUT

const inputEmail = inputArray[2];
function notEmail () {
     if (inputEmail.value) {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value);
        if (!regexMatch) {
            paraError.textContent = "Looks like this is not an email";
            paraError.classList.add('message--error');
            inputArray.children[2].appendChild(paraError);
        } else {
            paraError.textContent="";
        }
    }
}

inputEmail.addEventListener('input', notEmail);
