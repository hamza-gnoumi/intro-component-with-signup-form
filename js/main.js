let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");

document.forms[0].addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
});


let setError = (element, message) => {
    let inputcontrol = element.parentElement;
    let ImgError = inputcontrol.querySelector("img");
    let texterror = inputcontrol.querySelector(".error");
    texterror.innerText = message;

    ImgError.style.display = "block";
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove("success");
}


let setSuccess = (element) => {
    let inputcontrol = element.parentElement;
    let ImgError = inputcontrol.querySelector("img");
    let texterror = inputcontrol.querySelector(".error");
    texterror.innerText = "";

    ImgError.style.display = "none";
    inputcontrol.classList.remove('error');
    inputcontrol.classList.add("success");
}
function ValidateEmail(input) {
    emailvalue = input.value.trim();

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailvalue === "" || !emailvalue.match(validRegex))
        return false
    else
        return true


}
function validateForm() {
    if (firstName.value === "")
        setError(firstName, "First Name cannot be empty");
    else
        setSuccess(firstName);
    if (lastName.value === "")
        setError(lastName, "Last Name cannot be empty");
    else
        setSuccess(lastName);
    if (!ValidateEmail(email))
        setError(email, "Please provide a valid email");
    else
        setSuccess(email);
    if (password.value === "")
        setError(password, "password cannot be empty");
    else
        setSuccess(password);


}










// let setError = (element) => {
//     let inputcontrol = element.parentElement;
//     let errorDisplay = inputcontrol.querySelector(".error");
//     // Add Icon Error
//     imgError.style.display = "block"
//     //Add Msg Error
//     errorDisplay.innerText = "Please provide a valid email";
//     inputcontrol.classList.add('error');
//     inputcontrol.classList.remove('success');
// };
// let setSuccess = element => {
//     let inputcontrol = element.parentElement;
//     let errorDisplay = inputcontrol.querySelector(".error");
//     // remove Icon Error
//     imgError.style.display = "none"
//     //remove Msg Error
//     errorDisplay.innerText = "";
//     inputcontrol.classList.remove('error');
//     inputcontrol.classList.add('success');
// };


