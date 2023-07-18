const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score=0;
   }
   scoreEl.innerText = `Score:${score}`;

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
questionEl.innerText = `What is ${num1} + ${num2} ?`;
const correctAns = num1 + num2;

formEl.addEventListener("submit",()=>{
    let userAns= +inputEl.value;
    if(userAns===correctAns){
        score++;
        JSON.stringify(localStorage.setItem("score",score));
    }else{
        score--;
        JSON.stringify(localStorage.setItem("score",score));
    }
});




