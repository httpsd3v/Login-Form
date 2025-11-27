const loginBox = document.getElementById("LoginBox");
const registrationBox = document.getElementById("RegistrationBox");

if(loginBox){
    registrationBox.style.display = "none";
    loginBox.style.display = "flex";
}


function showLogin() {
    registrationBox.style.display = "none";
    loginBox.style.display = "flex";
}

function showRegister() {
    registrationBox.style.display = "flex";
    loginBox.style.display = "none";
}