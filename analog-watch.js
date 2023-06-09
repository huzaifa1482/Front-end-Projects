var hr = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

function DisplayTime(){
    var date = new Date();

    // Getting Hours, Minutes & Seconds from Date
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    var hRotation = 30*hh + mm/2;
    var mRotation = 6*mm;
    var sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(DisplayTime, 1000);