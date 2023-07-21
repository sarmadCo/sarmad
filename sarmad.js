const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector(".login-button");
const passwordError = document.querySelector(".password-error")
const usernameError = document.querySelector(".username-error")

loginButton.addEventListener("click", () =>{
    const username = usernameInput.value
    const password = passwordInput.value
    if(username && password){
        window.location.href = "https://player.arvancloud.ir/index.html?config=https://nimamoh3ni.arvanlive.ir/majmasarmad/origin_config.json&skin=shaka"
    }else {
        !password &&  passwordError.classList.add("show")
        !username &&  usernameError.classList.add("show")
    }
})

passwordInput.addEventListener("change",(event) => {
    if(event.target.value){
        passwordError.classList.remove("show")
    }
})

usernameInput.addEventListener("change",(event) => {
    if(event.target.value){
        usernameError.classList.remove("show")
    }
})