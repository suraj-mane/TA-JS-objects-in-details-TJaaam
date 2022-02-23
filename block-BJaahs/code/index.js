function quizApp(title, options, correctAnswerIndex){
  let player = {};
  player.title = title;
  player.options = options;
  player.correctAnswerIndex = correctAnswerIndex;
  player.isAnswerCorrenct = function (value) {
    return value === this.correctAnswerIndex;
  };
  player.getCorrectAnswer = function() {
    return this.options[this.correctAnswerIndex]; 
  };
  return player;
}

const fq = quizApp(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1,
);
