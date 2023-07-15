const hoursEl= document.getElementById("hours");
const minutesEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function runClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm= "AM";

    if (h>12){
        h=h-12;
        ampm="PM";
    }

    h= h<10 ? "0"+h:h;
    m= m<10 ? "0"+m:m;
    s= s<10 ? "0"+s:s;

    hoursEl.innerHTML=h;
    minutesEl.innerHTML=m;
    secondsEl.innerHTML=s;
    ampmEl.innerHTML=ampm;
    setTimeout(()=>{
        runClock();
    },1000);

    
}
runClock();
