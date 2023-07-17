const num1 = Math.round(Math.random() * 10);
const num2 = Math.round(Math.random() * 10);

const scoreEl=document.getElementById("score");
const questionEl=document.getElementById("question");
const inputEl=document.getElementById("input");
const formEl= document.getElementById("form");

let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}
scoreEl.innerText=`Score: ${score}`;
questionEl.innerText=`${num1} X ${num2}?`;

const correctAns=num1*num2;

formEl.addEventListener("submit",()=>{
    const userAns= +inputEl.value;

    if(userAns===correctAns){
        score++;
        localStorage.setItem("score",JSON.stringify(score));
    }else{
        score--;
        localStorage.setItem("score",JSON.stringify(score));
        
    }
})


