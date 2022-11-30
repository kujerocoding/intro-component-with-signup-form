// get array of input div
const inputArray = document.querySelector('.form__signup');


//replace array of input div
const divFirstName = document.querySelector('.div--firstname');
//replace array of input
const firstName = document.querySelector('.input__firstname');
const para = document.createElement("p");
const iconError = document.querySelector('.icon--error');
const inputItem = ["First Name", "Last Name", "Email", "Password"];

for (let i = 0; i < inputArray.length - 1; i++) {

    function showErrorMessage() {
        
           if (!inputArray[i].value) {
               
               para.textContent = `${inputItem[i]} cannot be empty`;
               para.classList.add('message--error');
               inputArray[i].classList.add('input--error--border');
               inputArray.children[i].appendChild(para);

               /* iconError.style.display = "block"; */
           } else {
               para.textContent = "";
               inputArray[i].classList.remove('input--error--border');
               /* iconError.style.display = "none"; */
           }
       
   }

   inputArray[i].addEventListener('input',showErrorMessage );

}



/* function createPara () {
    para.textContent = "shit";
    divFirstName.appendChild(para);
}

createPara(); */