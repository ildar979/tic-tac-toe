let cells = document.querySelector(".cells");
let res = document.querySelector(".res");
const bigWindow = document.querySelector(".container");
let count = 0;
let btn = document.createElement("button");
btn.className = "button";
btn.innerText = "New game";
bigWindow.appendChild(btn);  
let step = false;
 const circle = `<svg class="circle">
       <circle r="80" cx="125" cy="125" stroke="blue" stroke-width="10"
               fill="none" stroke-linecap="round" />
               </svg>`;
 const cross = `<svg class="cross">
      <line class="first-line" x1="45" y1="45" x2="200" y2="200" 
      stroke="red" stroke-width="10" stroke-linecap="round" />
      <line class="second-line" x1="200" y1="45" x2="45" y2="200" 
      stroke="red" stroke-width="10" stroke-linecap="round" />
              </svg>`;

function stepCross(target) {
if(target.tagName == "svg" || target.tagName == "line" || target.tagName == "circle") {
    return;
 }
target.innerHTML = cross;
target.classList.add("x");
let crossAudio = new Audio("audio/cross.mp3");
crossAudio.play();
  count++;
};

function stepCircle(target) {
if(target.tagName == 'svg' || target.tagName == 'line' || target.tagName == 'circle') {
  return;
}
target.innerHTML = circle;
target.classList.add("o");
let circleAudio = new Audio("audio/zero.mp3");
circleAudio.play();  
count++;
}

  for (let i = 1; i < 9; i++) {    
    let newCell = document.createElement("div");
    newCell.className = "cell";    
    cells.appendChild(newCell); 

    function init(elem) {
      if (!step) stepCross(elem.target);
      else stepCircle(elem.target);
      step = !step;
      win();
    }

    

function win() {
  let comb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
for (let i = 0; i < comb.length; i++) {  
  let field = document.querySelectorAll(".cell");
  if (field[comb[i][0]].classList.contains("x") &&
  field[comb[i][1]].classList.contains("x") && 
  field[comb[i][2]].classList.contains("x")) {
     setTimeout(() => {
      field[comb[i][0]].classList.add("active");
      field[comb[i][1]].classList.add("active");
      field[comb[i][2]].classList.add("active");  
      res.innerText = "Выиграли X";    
     }, 1500);
     cells.removeEventListener("click", init);
   }

   else if (field[comb[i][0]].classList.contains("o") &&
  field[comb[i][1]].classList.contains("o") && 
  field[comb[i][2]].classList.contains("o")) {
     setTimeout(() => {
      field[comb[i][0]].classList.add("active");
      field[comb[i][1]].classList.add("active");
      field[comb[i][2]].classList.add("active");  
      res.innerText = "Выиграли O";    
     }, 1500);
     cells.removeEventListener("click", init);
   }
   else if(count === 9) {
     setTimeout(() => {
     res.innerText = "Ничья";
    }, 1500);
     cells.removeEventListener("click", init);
   } 
  }
 }

 function newGame() {
  
  let field = document.querySelectorAll(".cell");
  step = false;
  count = 0;
  res.innerText = "";
  field.forEach(item => {
    item.innerText = "";
    item.classList.remove("x", "o", "active")
  });  
cells.addEventListener("click", init);  
}
  } 

btn.addEventListener("click", newGame); 
   
cells.addEventListener("click", init);



