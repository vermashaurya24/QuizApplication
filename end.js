const username = document.getElementById('username'); 
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const MAX_HIGH = 5;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// localStorage.setItem('highScores', JSON.stringify([]));
// console.log(JSON.parse(localStorage.getItem('highScores')));
// console.log(highScores);

finalScore.innerText = mostRecentScore; 

username.addEventListener('keyup', () => {
   saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
   e.preventDefault();
   const score = {
      score: mostRecentScore,
      name: username.value,
   };
   highScores.push(score);
   highScores.sort((a,b) => {
      return b.score - a.score;
   })
   highScores.splice(5);
   
   localStorage.setItem('highScores', JSON.stringify(highScores));
   window.location.assign('/');
};