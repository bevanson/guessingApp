var containerDiv = document.getElementById('theDiv');
var movieTitles = ['Lion King','Bohemian rhapsody','Tarzan','Batman'];
var randomTitle = Math.floor(Math.random()*movieTitles.length);
var movieLetters = movieTitles[randomTitle].split('');
var buttonDiv = document.getElementById('qwerty');

// for loop to display letters on screen
for (var i = 0; i < movieLetters.length; i++) {
    var tile = document.createElement('p');
    var creative = document.createTextNode(movieLetters[i]);
    tile.appendChild(creative);
    containerDiv.appendChild(tile);
    tile.classList = 'invisible';

// Make spaces invisible
    if (movieLetters[i] === ' ') {
      tile.style.backgroundColor = '#B1B1F0';
      tile.style.display = 'block';
      tile.style.height = '5px';
      tile.classList.remove('invisible');
    }
}
// guess entire movie in input box


let letter = document.querySelectorAll("p");
letter.classList = 'letter';
function checkLetter(target) {

  const clickedLetter = target.textContent;
  let letterFound = null;

  for (let i = 0; i < letter.length; i++) {
    if (letter[i].textContent.toLocaleLowerCase() === clickedLetter) {
      letter[i].classList.remove('invisible');
      letter[i].classList.add('show');
      letterFound = letter[i].textContent;
    } else {

    }
  }
  return letterFound;
}


qwerty.addEventListener("click", (e) => {
  const selectedButton = e.target;
  if (selectedButton.tagName === "BUTTON") {
     selectedButton.classList = "chosen";
  }


  checkLetter(selectedButton);

  let letterShown = document.getElementsByClassName('invisible');
  // let afterClicked = document.getElementsByClassName('chosen');
  if (letterShown.length == 0) {
      let congrats = document.getElementById('congrats');
      congrats.textContent = 'Congratulations you win!  Click refresh to play again!';
  }
  // if (afterClicked.length == 5) {
  //   let congrats = document.getElementById('congrats');
  //   congrats.textContent = 'Sorry you lose.  Click refresh to play again!';
  // }
});
