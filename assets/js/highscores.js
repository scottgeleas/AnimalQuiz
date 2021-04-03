let scoresArray = localStorage.getItem('highscores');

if (scoresArray === null) {
    scoresArray = [];
}else {
    scoresArray = JSON.parse(scoresArray)
    }






for (let score of scoresArray) {
    let listEL = document.querySelector('ul');
    let scores = document.createElement("li");
    scores.textContent = score.initials + score.score;
    listEl.append(scores);
     }
     