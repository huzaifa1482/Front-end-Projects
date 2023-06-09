setInterval(()=>{
    var time = document.getElementById('time');
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    time.textContent = hours + ":" + minutes + ":" + seconds;
});