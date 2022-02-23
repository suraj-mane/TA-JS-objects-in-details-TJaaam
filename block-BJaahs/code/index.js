function quizApp(title, options, correctAnswerIndex){
  let player = {};
  title: title;
  options: options;
  correctAnswerIndex: correctAnswerIndex;
  player.isAnswerCorrenct = function (value) {
    this.correctAnswerIndex == value;
  }
  player.getCorrectAnswer = function (){
    return  this.options[index] == this.correctAnswerIndex; 
  }
}

let player1 = quizApp ({
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
});