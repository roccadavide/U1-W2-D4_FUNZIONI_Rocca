/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(12, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(numInt1, numInt2) {
  if (numInt1 !== numInt2) {
    return numInt1 + numInt2;
  } else if (numInt1 === numInt2) {
    return (numInt1 + numInt2) * 3;
  }
}

console.log(crazySum(7, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(valDiff, Val19 = 19) {
  if (valDiff <= 19) {
    return Math.abs(valDiff - 19);
  } else if (valDiff > 19) {
    return Math.abs(valDiff - 19) * 3;
  }
}

console.log(crazyDiff(23));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(NumIntN) {
  if ((NumIntN > 20 && NumIntN <= 100) || NumIntN === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(401));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

console.log(epify(" è crazy"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(posNum) {
  if (posNum % 3 === 0 && posNum % 7 === 0) {
    console.log(posNum, "è divisibile per 3 e per 7");
  } else if (posNum % 3 === 0) {
    console.log(posNum, "è divisibile per 3");
  } else if (posNum % 7 === 0) {
    console.log(posNum, "è divisibile per 7");
  } else {
    console.log(posNum, "non è divisibile né per 7 né per 3");
  }
}

console.log(check3and7(24));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(revStr) {
  let splitStr = revStr.split("");
  let splitStrRev = splitStr.reverse();
  let finalStr = splitStrRev.join("");
  return finalStr;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(phrase) {
  let wordOnly = phrase.split(" ");
  for (i = 0; i < wordOnly.length; i++) {
    let firstLett = wordOnly[i].slice(0, 1);
    let upperFirstLett = firstLett.toUpperCase();
    wordOnly[i] = upperFirstLett + wordOnly[i].slice(1);
  }
  return wordOnly.join(" ");
}

console.log(upperFirst("i cani sono belli"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  let cutted = str.slice(1, -1);
  return cutted;
}

console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(aNum) {
  let randomNumbers = [];
  for (let j = 0; j < aNum; j++) {
    let randomNum = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNum);
  }
  return randomNumbers;
}

console.log(giveMeRandom(5));
