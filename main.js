//* DEMANDE UN CHIFFRE EN 1 ET 100
//* CREER UN CHIFFRE ALEATOIRE A DEVINER ENTRE 1 ET 100
//*SI UTILISATEUR DEPASSER 10 TRY ALORS MSG ALERTE POUR DIRE QU'IL A PERDU

let randomNumber = Math.floor(Math.random() * 100 + 1);
let userTries = 0;
let tryMax = 10;

function guesser() {
  let chosenNumber = parseInt(document.getElementById("userGuess").value);
  let restTry = tryMax - userTries - 1;
  // On retire 1 à chaque essaie et écrit le nbre d'essais
  userTries++;
  document.getElementById("try").textContent = "Nombres d'essais restant : " + restTry;

  // Vérifie si le nombre est trouvé, trop petit ou trop grand
  if (isNaN(chosenNumber)) {
    document.getElementById("results").textContent = "Vous devez indiquer un nombre";
  } else if (chosenNumber === randomNumber) {
    document.getElementById("results").textContent = "Vous avez trouvé en " + userTries + " essais !";
    document.getElementById("btnSubmit").disabled = true;
    document.getElementById("userGuess").disabled = true;
  } else if (chosenNumber < randomNumber) {
    document.getElementById("results").textContent = "C'est plus !";
  } else {
    document.getElementById("results").textContent = "C'est moins !";
  }

  // Vérifie si le nombre maximal de tentatives est atteint
  // Si tries arrive à 0 alors désactive btn et rend dynamique les textes en conséquence
  if (userTries === tryMax) {
    document.getElementById("try").textContent = "Désolé, vous n'avez plus d'essais";
    document.getElementById("results").textContent = "Le nombre était : " + randomNumber;
    document.getElementById("btnSubmit").disabled = true;
    document.getElementById("userGuess").disabled = true;
  }
}

console.log(randomNumber);
//////////////////////////////////////////////////////////////////////////////
