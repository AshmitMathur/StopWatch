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
    sec=sec+2;
    if(sec==60){
        sec = sec - 60;
        min++;
    }
    if(min==60){
        min = min - 60;
        hour++;
    }
}
setInterval(timer, 1000);
timer();
document.getElementById("Btn").disabled = true;
 }
