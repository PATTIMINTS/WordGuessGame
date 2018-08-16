// create an array of words
const word = ['Dennis', 'Dee', 'Charlie', 'Mac', 'McDonald', 'Frank', 'Cricket'];
// choose word randomely
let randNum = Math.floor(Math.random() * word.length);
let wordChosen = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underscore');
// create underscores based on words
 console.log(wordChosen);
let generateUnderscore = () => {
    for(let i = 0; i < wordChosen.length; i++) {
        underScore.push('__');

    }
    return underScore;
}


// guess word
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if guessed right
    if (wordChosen.indexOf(keyword) > -1) {    
    
    // right word array
    rightWord.push(keyword);
    docUnderScore.innerHTML = underScore.join(' ');
    
    underScore[wordChosen.indexOf(keyword)] = keyword;
    
    if (underScore.join('') == wordChosen) {
        alert('You Win');
    }
}
else {
    wrongWord.push(keyword);

}

docUnderScore[0].innerHTML = generateUnderscore().join(' ');
    
});
// check if guess is correct
// if correct push to correct array
// if wrong push to wrong array
