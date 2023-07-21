function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal 

let crossCloseModal = document.querySelector(".close");
crossCloseModal.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}



// Retrieve form fields

const firstNameValid = document.getElementById('first');
const nameValid = document.getElementById('last');
const mailValid = document.getElementById('email');
const birthValid = document.getElementById('birthdate');
const concoursValid = document.getElementById('quantity');
const condButtonRequiredv = document.getElementById('checkbox1');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birth = document.getElementById('birth');
const mail = document.getElementById('mail');
const cup = document.getElementById('cup');
const conditions = document.getElementById('conditions');

// Regex 
const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;
const mailRegex = /^\S+@\S+\.\S+$/;
const birthRegex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
const competitionRegex = /^[0-9]+$/;

// check firstname


firstName.innerHTML = "";
firstNameValid.addEventListener('change', () => {



  if (nameRegex.test(firstNameValid.value) === true) {
    firstName.style.display = "none";
    firstNameValid.style.border = "6px solid #279e7a";
    return true;
  }
  else {
    firstName.style.display = "block";
    firstName.innerHTML = "Veuillez rentrer deux caractères minimum";
    firstNameValid.style.border = "2px solid red";
    return false
  }
})

// check name
lastName.innerHTML = "";

nameValid.addEventListener('change', () => {

  if (nameRegex.test(nameValid.value) === true) {
    lastName.style.display = "none";
    nameValid.style.border = "6px solid #279e7a";
    return true;
  } else {

    lastName.style.display = "block";
    lastName.innerHTML = "Veuillez rentrer deux caractères minimum";
    nameValid.style.border = "2px solid red";
    return false
  }
})


// check mail
mail.innerHTML = "";
mailValid.addEventListener('change', () => {

  if (mailRegex.test(mailValid.value) === true) {
    mail.style.display = "none";
    mailValid.style.border = "6px solid #279e7a";
    return true;
  } else {
    mail.style.display = "block";
    mail.innerHTML = "Veuillez rentre un mail valide";
    mailValid.style.border = "2px solid red";
    return false
  }
})


// check Birth

birth.innerHTML = "";
birthValid.addEventListener('change', () => {
  console.log(birthValid.value)

  if (birthRegex.test(birthValid.value) === true) {
    birth.style.display = "none"
    birthValid.style.border = "6px solid #279e7a";
    return true;
  } else {
    birth.style.display = "block";
    birth.innerHTML = "Veuillez rentre une date de naissance valide";
    birthValid.style.border = "2px solid red";
    return false
  }

})



// check Concours
cup.innerHTML = "";
concoursValid.addEventListener('change', () => {


  if (competitionRegex.test(concoursValid.value) === true && concoursValid.value <= 99) {
    cup.style.display = "none";
    concoursValid.style.border = "6px solid #279e7a";
    return true;
  } else {
    cup.style.display = "block";
    cup.innerHTML = "Nombre ou donnée incorecte";
    concoursValid.style.border = "2px solid red";
    return false
  }
})


// check Buttons 


location.innerHTML = "";
const buttons = document.querySelectorAll('input[name="location"]');
for (let button of buttons)
  button.addEventListener("click", () => {
    let selectedButton;
    if (button.checked) {
      selectedButton = button.value;
      console.log(button.value)
      location.innerHTML = "Champs valide";
    } else {
      location.innerHTML = "Vous devez choisir une ville";

    }
  })



// check Conditions
conditions.innerHtml = "";
const condButtons = document.querySelectorAll('input[type="checkbox"]:checked');
condButtonRequiredv.addEventListener("click", () => {
  if (condButtonRequiredv.checked === true) {
    conditions.style.display = "none";
  } else {
    conditions.style.display = "block ";

  }

})




// check Event



// check Submit
const submitButton = document.querySelector('.btn-submit').addEventListener("click", () => {
  alert("Vous avez soumis le formulaire")
})

