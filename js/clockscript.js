function realtimeClock(){
    
    var t = setTimeout(realtimeClock, 500);

    displayClock(); 
    displayPomodoroCounter(); 
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1); 
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); 
        }
    }
    return ""; 
}

function cookieSet(cname) {
    var c = getCookie(cname);
    if(c != ""){
        return true;
    }
    return false; 
}

function incrementPomodoroCount(){
    if(cookieSet("pomodoro_count")){
        var count = parseInt(getCookie("pomodoro_count")) + 1; 
        document.cookie = "pomodoro_count=" + count; 
    } else {
        document.cookie = "pomodoro_count=1"; 
    }
}

function displayPomodoroCounter(){
    var pomodoro_count; 

    if(cookieSet("pomodoro_count")){
        pomodoro_count = getCookie("pomodoro_count"); 
    } else {
        pomodoro_count = 0; 
    }

    if(cookieSet("pomodoro_end")){

        var pomodoroEnd = new Date(getCookie("pomodoro_end")); 
        var distance = pomodoroEnd - new Date().getTime();
        if(distance < 0){
            if(!cookieSet("curpomodoro_counted") || getCookie("curpomodoro_counted") == 'false'){
                incrementPomodoroCount(); 
                document.cookie = "curpomodoro_counted=true"; 
            }
            document.getElementById('currentpomodoro').innerHTML = 
            "On break!"
        } else {
            var pomodoroMinutes = Math.floor(distance  / (1000 * 60)); 
            var pomodoroSeconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2); 
            document.getElementById('currentpomodoro').innerHTML = 
            "Pomodoro time remaining: " + pomodoroMinutes + " : " + pomodoroSeconds; 
        }

    } else {
        document.getElementById('currentpomodoro').innerHTML = 
        "On break!"
    }

    document.getElementById('counter').innerHTML =
        "Number of pomodoros: " + pomodoro_count;
    if(!counterActive()){
        document.getElementById('currentpomodoro').hidden = true;
    } else {
        document.getElementById('currentpomodoro').hidden = false;
    }
}

function displayClock(){
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12 ) ?  "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
}

function counterActive(){
    if(cookieSet("pomodoro_counter_active")){
        return getCookie("pomodoro_counter_active") == "true";
    }
    return false; 
}