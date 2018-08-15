// create an array of words
const words = ['Dennis', 'Dee', 'Charlie', 'Mac', 'McDonald', 'Frank', 'Cricket'];
// choose word randomely
let ranNumber = Math.floor(Math.random() * words.length);
let wordChosen = words[ranNumber];
let underScore = [];
console.log(wordChosen)
// create underscores based on words

let generateUnderscore = () => {
    for(let i = 0; i < wordChosen.length; i++) {
        underScore.push('__');

    }
    return underScore;
}
console.log(generateUnderscore());

// guess word
document.addEventListener('keypress', (event) => {
    console.log(event);
});
// check if guess is correct
// if correct push to correct array
// if wrong push to wrong array
