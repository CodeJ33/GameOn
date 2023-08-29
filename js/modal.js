function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * @description Récupération élements du DOM
 */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


/** 
 * @description Lancement de la modale au clic
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


/**
 * @function launchModal 
 * @description Fonction qui affiche la modale
*/
function launchModal() {
  modalbg.style.display = "block";
}


/**
 * @function closeModal()
 * @description Fonction qui ferme la modale
*/
let crossCloseModal = document.querySelector(".close");
crossCloseModal.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";

}


/** 
 * @function closeModalValidation
 * @description Fonction qui ferme les remerciements avec le bouton fermer et la croix
 *  Selection du bouton pour fermer les remerciements
*/
let closeValidation = document.querySelector(".btn-close");
closeValidation.addEventListener("click", closeModalValidation);
let crossCloseValidation = document.querySelector(".close");
crossCloseValidation.addEventListener("click", closeModalValidation);


let closeBground = document.querySelector(".bground");
function closeModalValidation() {
  modalValidation.style.display = "none";
  document.querySelector(".bground").innerHTML = "";
  closeBground.style.display = "none";
  window.location.reload();
}







/**
 * @description Récupération des champs
*/
const birthValid = document.getElementById('birthdate');
const concoursValid = document.getElementById('quantity');
const condButtonRequiredv = document.getElementById('checkbox1');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birth = document.getElementById('birth');
const mail = document.getElementById('mail');
const cup = document.getElementById('cup');
const town = document.getElementById('location');
const conditions = document.getElementById('conditions');
const submit = document.getElementById('btn-modalsubmit');


/**
 * @description Champs d'erreur masqué
*/
firstName.innerHTML = "";
lastName.innerHTML = "";
birth.innerHTML = "";
mail.innerHTML = "";
town.innerHTML = "";
cup.innerHTML = "";
conditions.innerHtml = "";
modalValidation.style.display = "none";
condButtonRequiredv.checked === false;
let firstNamesubmit = "";


/**
 * @description Création de l'objet qui contiendra toute les données saisies par l'utilisateur
 * Affichage de l'objet dans la console
*/

let doc = {};
const docu = Object.create(doc);
console.log(docu)



/**
 * @function checkFirstName
 * @ description Fonction qui vérifie qu'un prénom a été saisi.
 * Le regex permet de s'assurer qu'il comporte bien deux lettres minimum sans chiffre ni caractères spéciaux.
 * Sinon la zone est entourée en rouge
 */
function checkFirstName() {

  const firstNameValid = document.getElementById('first');
  const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;
  if (nameRegex.test(firstNameValid.value) === true) {
    firstName.style.display = "none";
    firstNameValid.style.border = "2px solid #279e7a";
    doc.firstName = firstNameValid.value;
    return true
  }
  else {
    firstName.style.display = "block";
    firstName.innerHTML = "Veuillez rentrer deux caractères minimum et/ou un prénom valide";
    firstNameValid.style.border = "2px solid red";
    return false
  }
}


/**
 * @function checkName
 * @description Fonction qui vérifie qu'un nom a été saisi.
 * Le regex permet de s'assurer qu'il comporte bien deux lettres minimum sans chiffre ni caractères spéciaux.
 * Sinon la zone est entourée en rouge
 */

function checkName() {
  const nameValid = document.getElementById('last');
  const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;

  if (nameRegex.test(nameValid.value) === true) {
    lastName.style.display = "none";
    nameValid.style.border = "2px solid #279e7a";
    doc.lastName = nameValid.value;
    return true
  } else {

    lastName.style.display = "block";
    lastName.innerHTML = "Veuillez rentrer deux caractères minimum et/ou un nom valide";
    nameValid.style.border = "2px solid red";
    return false
  }
}


/**
 * @function checkMail
 * @description Fonction qui vérifie qu'un mail a été saisi.
 * Le regex permet de s'assurer que c'est une date au bon format.
 * Sinon la zone est entourée en rouge
 */

function checkMail() {

  const mailValid = document.getElementById('email');
  const mailRegex = /^\S+@\S+\.\S+$/;

  if (mailRegex.test(mailValid.value) === true) {
    mail.style.display = "none";
    mailValid.style.border = "2px solid #279e7a";
    doc.mail = mailValid.value;
    return true
  } else {
    mail.style.display = "block";
    mail.innerHTML = "Veuillez rentrer un mail valide";
    mailValid.style.border = "2px solid red";
    return false
  }
}



/**
 * @function checkBirth
 * @description Fonction qui vérifie qu'il y a une date qui a été rentré et qui correspond à l'age de 10 ans minimum
 *
 * Le regex permet de s'assurer que c'est une date au bon format
 * Sinon la zone est entourée en rouge
 */
function checkBirth() {
  const birthValid = document.getElementById('birthdate');

  const birthDate = birthValid.value;
  const birthDateValid = new Date(birthDate).getTime();
  const nowDate = Date.now();
  const tenYearsEarliest = nowDate - 10 * 360 * 24 * 60 * 60 * 1000;
  const birthRegex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

  if (birthRegex.test(birthValid.value) === true && birthDateValid <= tenYearsEarliest) {
    birth.style.display = "none"
    birthValid.style.border = "2px solid #279e7a";
    doc.birth = birthValid.value;
    return true
  } else {
    birth.style.display = "block";
    birth.innerHTML = "Veuillez rentrer une date de naissance valide";
    birthValid.style.border = "2px solid red";
    return false
  }
}




/**
 * @function checkCup
 * @description Fonction qui vérifie qu'il y a bien un nombre qui a été entré et pas plus de 99
 * Le regex permet de s'assurer que c'est un nombre
 * Sinon la zone est entourée en rouge
 */
function checkCup() {
  const competitionRegex = /^[0-9]+$/;

  if (competitionRegex.test(concoursValid.value) === true && concoursValid.value <= 99) {
    cup.style.display = "block";
    concoursValid.style.border = "2px solid #279e7a";
    doc.cup = concoursValid.value;
    return true
  } else {
    cup.style.display = "block";
    cup.innerHTML = "Nombre ou donnée incorrecte";
    concoursValid.style.border = "2px solid red";
    return false
  }

}



/**
 * @function checkButtons
 * @description Fonction qui vérifie qu'il y a bien une ville qui a été coché
 */
function checkButtons() {
  const buttons = document.querySelectorAll('input[name="location"]');
  const buttonsDiv = document.querySelector('.locationChoice');
  let nbrbuttons = buttons.length;
  let buttonSelection = false;
  if (nbrbuttons > 0) {
    let i = 0;
    buttonSelection = false;
    while (i < nbrbuttons) {

      if (buttons[i].checked) {
        doc.location = buttons[i].value;
        buttonsDiv.style.border = "2px solid #279e7a";
        buttonSelection = true;
      }
      i = i + 1;
    }
  }

  if (!buttonSelection) {
    town.style.display = "block";
    town.innerHTML = "Veuillez choisir une ville";
    buttonsDiv.style.border = "2px solid red";
    return false;

  }
  else {
    town.innerHTML = "";
    return true;

  }
}


/**
 * @function checkConditions
 * @description
 * Fonction qui vérifie si les conditions d'utilisation sont bien cochées ce qui est impératif
 * Sinon il y a une indication comme quoi il faut accepter les conditions d'utilisation
 */
function checkConditions() {

  const conditions = document.getElementById('conditions');


  if (condButtonRequiredv.checked) {
    conditions.style.display = "none";
    return true
  } else {
    conditions.style.display = "block ";
    conditions.innerHTML = "Vous devez accepter les conditions d'utilisation";
    return false
  }
}



/** 
 * @function validate
 * @description Fonction de validation du formulaire
 *  Celle ci utilise toutes les fonctions précédentes pour vérifier si tout les champs sont valables
*/
function validate(event) {
  event.preventDefault();
  if (checkCup() && checkFirstName() && checkName() && checkMail() && checkBirth() && checkButtons() && checkConditions()) {
    launchThanks();
  } else {
    alert("Votre formulaire est incomplet ou des données sont incorrectes");

  }
  event.stopPropagation();
}



/** 
 * @function launchThanks
 * @description Fonction qui fait apparaitre le remerciement pour l'inscription
*/
function launchThanks() {
  modalValidation.style.display = "flex";
  document.querySelector(".modal-body").innerHTML = "";

}





/**
 * @function setListeners
 * @description Fonction pour récupérer/écouter les évènements
 */
function setListeners() {
  const firstNameValid = document.getElementById('first');
  firstNameValid.addEventListener('change', checkFirstName);
  const nameValid = document.getElementById('last');
  nameValid.addEventListener('change', checkName);
  const mailValid = document.getElementById('email');
  mailValid.addEventListener('change', checkMail);
  const birthValid = document.getElementById('birthdate');
  birthValid.addEventListener('change', checkBirth);
  const concoursValid = document.getElementById('quantity');
  concoursValid.addEventListener('change', checkCup);
  const buttons = document.querySelectorAll('input[name="location"]');
  buttons.forEach((button) => button.addEventListener('click', checkButtons));
  condButtonRequiredv.addEventListener("click", checkConditions);
  const submit = document.getElementById('btn-modalsubmit');
  submit.addEventListener("click", validate);
}

/**
 * @description Appel de la fonction 
 */
setListeners();


