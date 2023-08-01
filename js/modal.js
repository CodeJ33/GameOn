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

const birthValid = document.getElementById('birthdate');
const concoursValid = document.getElementById('quantity');
const condButtonRequiredv = document.getElementById('checkbox1');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birth = document.getElementById('birth');
const mail = document.getElementById('mail');
const cup = document.getElementById('cup');
const conditions = document.getElementById('conditions');






firstName.innerHTML = "";
lastName.innerHTML = "";
birth.innerHTML = "";
mail.innerHTML = "";
location.innerHTML = "";
cup.innerHTML = "";
conditions.innerHtml = "";
modalValidation.style.display = "none";

condButtonRequiredv.checked === false;


let firstNamesubmit = ""


// check firstname
function checkFirstName() {

  const firstNameValid = document.getElementById('first');
  const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;
  if (nameRegex.test(firstNameValid.value) === true) {
    firstName.style.display = "none";
    firstNameValid.style.border = "6px solid #279e7a";
    return true
  }
  else {
    firstName.style.display = "block";
    firstName.innerHTML = "Veuillez rentrer deux caractères minimum et/ou un prénom valide";
    firstNameValid.style.border = "2px solid red";
    return false
  }
}


// check name

function checkName() {
  const nameValid = document.getElementById('last');
  const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;

  if (nameRegex.test(nameValid.value) === true) {
    lastName.style.display = "none";
    nameValid.style.border = "6px solid #279e7a";
    return true
  } else {

    lastName.style.display = "block";
    lastName.innerHTML = "Veuillez rentrer deux caractères minimum et/ou un nom valide";
    nameValid.style.border = "2px solid red";
    return false
  }
}



// check Mail
function checkMail() {

  const mailValid = document.getElementById('email');
  const mailRegex = /^\S+@\S+\.\S+$/;

  if (mailRegex.test(mailValid.value) === true) {
    mail.style.display = "none";
    mailValid.style.border = "6px solid #279e7a";
    return true
  } else {
    mail.style.display = "block";
    mail.innerHTML = "Veuillez rentre un mail valide";
    mailValid.style.border = "2px solid red";
    return false
  }
}



// check Birth
function checkBirth() {
  const birthValid = document.getElementById('birthdate');
  const birthRegex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  if (birthRegex.test(birthValid.value) === true) {
    birth.style.display = "none"
    birthValid.style.border = "6px solid #279e7a";
    return true
  } else {
    birth.style.display = "block";
    birth.innerHTML = "Veuillez rentre une date de naissance valide";
    birthValid.style.border = "2px solid red";
    return false
  }
}




// check Concours
function checkCup() {
  const competitionRegex = /^[0-9]+$/;
  if (competitionRegex.test(concoursValid.value) === true && concoursValid.value <= 99) {
    cup.style.display = "block";
    concoursValid.style.border = "6px solid #279e7a";
    return true
  } else {
    cup.style.display = "block";
    cup.innerHTML = "Nombre ou donnée incorrecte";
    concoursValid.style.border = "2px solid red";
    return false
  }

}



// check Buttons 
function checkButtons() {
  const buttons = document.querySelectorAll('input[name="location"]');
  let button = ""
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      button = buttons[i].value
      return true

    } else {
      location.innerHTML = "Vous devez choisir une ville";

    }
  }
}


// check Conditions
function checkConditions() {

  const conditions = document.getElementById('conditions');

  if (condButtonRequiredv.checked) {
    conditions.style.display = "none";
    return true
  }
  conditions.style.display = "block ";
}

// thanks appear
function launchThanks() {
  modalValidation.style.display = "block";

}

// check Submit
function validate() {
  event.preventDefault();
  if (checkBirth() && checkButtons() && checkConditions() && checkCup() && checkFirstName() && checkName() && checkMail()) {
    launchThanks();
  } else {
    alert("Votre formulaire est incomplet ou des données sont incorrectes");
  }
}










// check Event
function setListeners() {
  const firstNameValid = document.getElementById('first');
  firstNameValid.addEventListener('change', checkFirstName);
  const nameValid = document.getElementById('last');
  nameValid.addEventListener('change', checkName);
  const mailValid = document.getElementById('email');
  mailValid.addEventListener('change', checkMail);
  const birthValid = document.getElementById('birthdate');
  birthValid.addEventListener('change', birthValid);
  const concoursValid = document.getElementById('quantity');
  concoursValid.addEventListener('change', checkCup);
  const buttons = document.querySelectorAll('input[name="location"]');
  buttons.forEach((button) => button.addEventListener('click', checkButtons));
  const condButtons = document.querySelectorAll('input[type="checkbox"]:checked');
  condButtonRequiredv.addEventListener("click", checkConditions);
}


setListeners();
