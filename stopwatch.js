let sec = 0;
let min = 0;
let hour = 0;
let t = null;
function run(){
function timer(){
    let fhour = hour.toString().padStart(2, '0');
    let fmin = min.toString().padStart(2, '0');
    let fsec = sec.toString().padStart(2, '0');
    const newtime = `${fhour} : ${fmin} : ${fsec}`
    document.getElementById('stp').innerHTML = newtime;
    sec++;
    if(sec==60){
        sec = sec - 60;
        min++;
    }
    if(min==60){
        min = min - 60;
        hour++;
    }
}
t = setInterval(timer, 1000);
timer();
document.getElementById("Btn").disabled = true;
}
function reset(){
clearInterval(t);
t = null;
sec = 0;
min = 0;
hour = 0;
 const newtime = `00 : 00 : 00`;
document.getElementById('stp').innerHTML = newtime;
document.getElementById("Btn").disabled = false;
}
function stop(){
    clearInterval(t);
    t = null;
}
