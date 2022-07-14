password = document.querySelector("#password")
confirmation = document.querySelector("#password_confirmation")
warning = document.querySelector("#warning")
submit = document.querySelector("#form_button")


submit.addEventListener("click", (e) => {
    if(password.value == confirmation.value) {
        warning.textContent = ""
        password.classList.remove("invalid_password")
        confirmation.classList.remove("invalid_password")

        return
    }
    e.preventDefault()
    warning.textContent = "*Passwords do not match"
    password.classList.add("invalid_password")
    confirmation.classList.add("invalid_password")
})