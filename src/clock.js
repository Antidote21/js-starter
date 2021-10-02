

function getTimeTable(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const result = {
        hour,
        minutes,
        seconds,
    };
    if(hour < 10) result.hour = `0${hour}`;
    if(minutes < 10) result.minutes = `0${minutes}`;
    if(seconds < 10) result.seconds = `0${seconds}`;

    return `${result.hour}:${result.minutes}:${result.seconds}`;
}

function paintClock(){
    const clockElement = document.querySelector('#clock');
    clockElement.textContent = getTimeTable();
}


function clockInitialize(){
  setInterval(paintClock, 1000);
}

clockInitialize();