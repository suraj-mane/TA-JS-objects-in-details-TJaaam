let form = document.querySelector('.form');
let root = document.querySelector('.question-form');

const ans = form.elements.book;

function handle(event){
  event.preventDefault();
  const b = ans.value;
  console.log(b);
}

class Quiz {
  constructor(allQuestion = []){
    let allQuestion = [];
    this.score = 0;
    this.activeIndex = 0; 
  }
  nextQustion(){
    this.activeIndex = this.activeIndex + 1;
    return this.activeIndex;
  }
  createUI(){}
  updateScore(){
    this.score = this.score + 1;
    return this.score;
  }
}

class Question {
  constructor(Title, options, CurrectAnswer){
    this.Title = Title;
    this.options  = options;
    this.CurrectAnswer = CurrectAnswer;
  }
  isCorrect(answer){
    this.CurrectAnswer = answer;
  }
  get CurrectAnswer() {
    return this.CurrectAnswer;
  }
  createUI(){
    let li = document.createElement('li');
    li.classList.add("main-que");
    let span = document.createElement('span');
    span.classList.add("question");
    let p = document.createElement('p');
    p.classList.add("question");
    let p2 = document.createElement('p');
    p2.classList.add("option");
    let input = document.createElement('input');
    input.classList.add("selecet");
    let button = document.createElement('button');

  }
}



form.addEventListener("submit", handle);