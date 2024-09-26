const typedText = document.querySelector('.typed-text');
const phrases = ["Web Developer", "Python Enthusiast", "Designer"];
let phraseIndex = 0;
let letterIndex = 0;

function typePhrase() {
    if (letterIndex < phrases[phraseIndex].length) {
        typedText.innerHTML += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typePhrase, 100);
    } else {
        setTimeout(deletePhrase, 2000);
    }
}

function deletePhrase() {
    if (letterIndex > 0) {
        typedText.innerHTML = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deletePhrase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typePhrase, 1000);
});
