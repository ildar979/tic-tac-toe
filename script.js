const cells = document.querySelector(".cells");

const bigWindow = document.querySelector(".container");
const head = document.createElement("div");
head.className = "head";
bigWindow.appendChild(head);

  for (let i = 1; i < 9; i++) {
    let newCell = document.createElement("div");
    newCell.className = "cell";
    newCell.id = `${i}`;
    cells.appendChild(newCell);
  }

const bash = document.querySelector(".head");
const selector = document.createElement("select");
selector.id = "values";
const option1 = document.createElement("option");
option1.value = "x";
option1.innerText = "x";
selector.appendChild(option1);
const option2 = document.createElement("option");
option2.value = "0";
option2.innerText = "0";
selector.appendChild(option2);

const input = document.createElement("input");
input.className = "input";
input.placeholder = "введите ячеку...";
//input.innerText = input.value

const btn = document.createElement("button");
btn.className = "button";
btn.innerText = "ввод";

bash.appendChild(selector);
bash.appendChild(input);
bash.appendChild(btn);


let celll = document.querySelectorAll(".cell");




btn.addEventListener("click", function ticTac(input, celll) {
 
//   for (let i = 0; i <= celll.length; i++) {
//     if (input.value === i) {
//       console.log(input.value);
//     }
//   }
console.log(input.innerText);
}
)
//ticTac(input)


