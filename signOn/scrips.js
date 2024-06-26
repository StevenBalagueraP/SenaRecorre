var eye = document.getElementById("Eye")
var passwordInput = document.getElementById("password")
eye.addEventListener("click", function(){
    if(passwordInput.type == "password"){
        passwordInput.type = "text"
        eye.src = "../images/BlockedPassowrd.ico"
    }else{
        passwordInput.type = "password"
        eye.src = "../images/eye.ico"
    }
})