const body = document.querySelector('body');
const startBtn = document.querySelector('.start-btn');
const cover = document.querySelector('.q0');
const next1 = document.querySelector('.next1');
const next2 = document.querySelector('.next2');
const next3 = document.querySelector('.next3');
const choices = document.querySelectorAll('input');

let count = 0;
let selectedValue;
let score = -1;
let answerArr = ['1995', 'Bredan', 'Mocha'];

function nextQuestion() {
  if (count <= 3 && count >= 0) {
    document.querySelector(`.q${count}`).style.display = 'block';
  }
  if (count <= 4 && count > 0) {
    document.querySelector(`.q${count-1}`).style.display = 'none';
  }
  if (selectedValue === answerArr[count-2]) {
    score ++;
  }
  if (count == 4) {
    document.querySelector('.score').style.display = 'block';
    document.querySelector('.final-score').innerText = score;
  }
}

function renderQuiz() {
  cover.style.display = 'none';
  count++;
  nextQuestion();
}

function selectChoice(e) {
  const sel = e.target.value;
  selectedValue = sel;
  const ele = document.querySelectorAll(`.${(e.target).getAttribute('class')}`);
  for (let i=0; i<ele.length; i++) {
    if (ele[i].value !== sel) {
      ele[i].checked = false;
    }    
  }  
}

choices.forEach(choice => choice.addEventListener('click', function(e){
  selectChoice(e);
}))

next1.addEventListener('click', function() {
  count++;
  nextQuestion();
});
next2.addEventListener('click', function() {
  count++;
  nextQuestion();
});
next3.addEventListener('click', function() {
  count++;
  nextQuestion();
});
startBtn.addEventListener('click', renderQuiz);