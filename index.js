

function stopWatch (){
    var miliseconds = 00;
    var seconds = 00;
    var getmiliSeconds = document.getElementById("miliseconds");
    var getSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    let interval;

    buttonStart.onclick = () => {
        
      clearInterval(interval);
          interval = setInterval(startTimer,10);
      
    };
    buttonStop.onclick = () => {
        clearInterval(interval);

    };

    buttonReset.onclick = () => {
        clearInterval(interval);
        miliseconds = "00";
        seconds = "00";
        getmiliSeconds.innerHTML = miliseconds;
        getSeconds.innerHTML = seconds;

    };

    function startTimer() {
        miliseconds ++;
        if (miliseconds < 9){
            getmiliSeconds.innerHTML = "0" + miliseconds;
        }
        if (miliseconds > 9){
            getmiliSeconds.innerHTML = miliseconds;
        }
        if (miliseconds > 99){
            seconds++;
            console.log(seconds);
            miliseconds = 0;
            getSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 9){
            getSeconds.innerHTML = seconds;
        }
    };
};

stopWatch();