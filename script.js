/* const fullname = document.getElementById("name")
const email = document.getElementById("email")
const myBtn = document.getElementById("save")
const delBtn = document.getElementById("del")

let personFromLocal = localStorage.getItem("person")

if(personFromLocal) {
    let localObject = JSON.parse(personFromLocal)

    console.log(localObject)

    fullname.value = localObject.name
    email.value = localObject.email
}


myBtn.addEventListener("click", function(e) {
    e.preventDefault()
    let inputValue = fullname.value
    let emailValue = email.value

    let personValues = {
        name: inputValue,
        email: emailValue
    }

    localStorage.setItem("person", JSON.stringify(personValues))

    fullname.value = ""
    email.value = ""
})

delBtn.addEventListener("click", function(e) {
    e.preventDefault()

    localStorage.removeItem("person")
    
})
 */

const modalBtn = document.getElementById("modalBtn")
const closeModalBtn = document.getElementById("close-icon")
const modal = document.querySelector(".modal")
const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")
const loginBtn = document.getElementById("login")
const headerMssg = document.querySelector("h1")

const loggedUser = localStorage.getItem("logCred")

if(loggedUser) {
    const localObject = JSON.parse(loggedUser)

    headerMssg.classList = "activeHeader"
    headerMssg.innerText = `Welcome ${localObject.userEmail}`
    modalBtn.innerText = "Logout"
}

loginBtn.addEventListener("click", function(e) {
    e.preventDefault()

    const loginValues = {
        userEmail: emailInput.value,
        userPassword: passInput.value 
    }

    localStorage.setItem("logCred", JSON.stringify(loginValues))
    headerMssg.classList = "activeHeader"
    headerMssg.innerText = `Welcome ${emailInput.value}`
    modalBtn.innerText = "Logout"
    emailInput.value = ""
    passInput.value = ""
    closeModal()
})

modalBtn.addEventListener("click", function(e) {
    e.preventDefault()

    if(loggedUser) {
        localStorage.removeItem("logCred")
        modalBtn.innerText = "Login"
        headerMssg.classList = ""
    } else {
        modal.classList += " modalActive"
    }
})

closeModalBtn.addEventListener("click", function() {
    closeModal()
})

function closeModal() {
    modal.classList = "modal"
}

