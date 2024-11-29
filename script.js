/*
// Gestion des clics sur les boutons
accueilButton.addEventListener('click', function() {
    
});
*/
var nbToGuess = getRandomInt(1, 100)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertUnit(event) {
    // On ne rafraîchit pas la page
    event.preventDefault();

    // Récupérer les résultats
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const value = parseFloat(document.getElementById('value').value);
    let result = 0;

    if (isNaN(value)) {
      document.getElementById('result').innerText = "Enter a valid number !";
      return null; // Interrompre la fonction
    }

    const conversionRatesDistance = {
      meters: {
        kilometers: 0.001,
        miles: 0.000621371
      },
      kilometers: {
        meters: 1000,
        miles: 0.621371
      },
      miles: {
        meters: 1609.34,
        kilometers: 1.60934
      }
    };

    // Convertir la valeur
    if (fromUnit === toUnit) {
      result = value;
    } else {
      result = value * conversionRatesDistance[fromUnit][toUnit];
    }

    // Afficher le résultat
    document.getElementById('result').innerText = `${value} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}.`;
}

function countWords(event) {
  event.preventDefault()

  // Mes valeurs
  const textToCount = document.getElementById('textToCount').value
  // Stratégie de comptage des mots
  var nbWord = 0
  if (textToCount.length != 0) {
    // Code pour compter les mots
    nbWord = 1
    for (let i = 0; i < textToCount.length; i++) {
      if (textToCount[i] === " ") {
        nbWord++
      }
    }
    console.log(nbWord)
  }
    // Afficher le résultat
  if (nbWord < 10) {
    document.getElementById('wordCounted').innerText = `You've written ${nbWord} words, can do better !`;
  } else if (nbWord < 100) {
    document.getElementById('wordCounted').innerText = `You've written ${nbWord} words, on your way to write a good story !`;
  } else if (nbWord < 500) {
    document.getElementById('wordCounted').innerText = `You've written ${nbWord} words, a very mindful, demure, and cutesy text !`;
  } else if (nbWord < 1000) {
    document.getElementById('wordCounted').innerText = `You've written ${nbWord} words, on your way to write a novel !`;
  }
}

function guessNumber(event) {
  // OK
  event.preventDefault();

  var prop = document.getElementById('IguessNumber').value;

  if (prop == 0) {
    document.getElementById('moreOrLess').innerText += `More than 0 !\n`;
  } else if (prop < nbToGuess) {
    document.getElementById('moreOrLess').innerText += `More than ${prop} !\n`;
  } else if (prop > nbToGuess) {
    document.getElementById('moreOrLess').innerText += `Less than ${prop} !\n`;
  } else if (prop == nbToGuess) {
    document.getElementById('moreOrLess').innerText += `You found the number: ${prop} !\n`;
    document.getElementById('moreOrLess').innerText += `Refresh the page to play again !\n`;
    alert(`You got it ! The number was ${nbToGuess} `)
  }
}

