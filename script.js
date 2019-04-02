/*global JSLint*/

var myCanvas = document.getElementById("clock"),
    myContext = myCanvas.getContext("2d");


myContext.strokeStyle = "#00ff00";
myContext.shadowColor = "#00ff00";
myContext.lineWidth = 16;
myContext.shadowBlur = 16;


function degToRad(deg) {
    "use strict";
    
    var res = Math.PI / 180;
    
    return deg * res;
}

function Time() {
    "use strict";
    
    var now = new Date(),
        today = now.toDateString(),
        time = now.toLocaleTimeString(),
        hours = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        milleSecond = now.getMilliseconds(),
        ultSecond = second + (milleSecond / 1000),
        ultMinute = minute + (ultSecond / 60),
        gradient = myContext.createRadialGradient(250, 250, 5, 250, 250, 300);
    
    
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "#000");
    
    myContext.fillStyle = gradient;
    myContext.fillRect(0, 0, 500, 500);
    
    //Seconds
    myContext.beginPath();
    myContext.arc(250, 250, 140, degToRad(270), degToRad((ultSecond * 6) - 90));
    myContext.stroke();
    
    //Minutes
    myContext.beginPath();
    myContext.arc(250, 250, 170, degToRad(270), degToRad((ultMinute * 6) - 90));
    myContext.stroke();
    
    //Hours
    myContext.beginPath();
    myContext.arc(250, 250, 200, degToRad(270), degToRad((hours * 30) - 90));
    myContext.stroke();
    
    // Time Words Shape
    myContext.font = "30px Tahoma";
    myContext.fillStyle = "white";
    myContext.shadowBlur = 10;
    myContext.fillText(today, 138, 252);
    
    myContext.font = "30px Tahoma";
    myContext.fillStyle = "white";
    myContext.fillText(time + ":" + milleSecond, 138, 282);
    
}

setInterval(Time, 40);