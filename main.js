// get array of input div
const inputArray = document.querySelector('.form__signup');


//replace array of input div
/* const divFirstName = document.querySelector('.div--firstname'); */
//replace array of input
/* const firstName = document.querySelector('.input__firstname'); */
const inputItem = ["First Name", "Last Name", "Email", "Password"];
const paraError = document.createElement("p");
const iconError = document.createElement("img");

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