function loadPage(){ 

    var controls = document.getElementsByClassName("controls")[0];

     var resetPomodoroCountButton = document.createElement("button"); 
     resetPomodoroCountButton.innerHTML = "Reset pomodoro count"; 
     controls.appendChild(resetPomodoroCountButton); 

     resetPomodoroCountButton.addEventListener("click", function() { 
             setPomodoroCount(0); 
     })


     var startPomodoroButton = document.createElement("button"); 
     startPomodoroButton.innerHTML = "Start pomodoro"; 
     controls.appendChild(startPomodoroButton); 

     startPomodoroButton.addEventListener("click", function() { 
             startPomodoro(); 
     })
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

function setPomodoroCount(count){
    document.cookie =  "pomodoro_count=" + count; 
}

function setPomodoroEnd(end){
    document.cookie = "pomodoro_end=" + end;
}

function setCurrentPomdoroCounted(counted){
    document.cookie = "curpomodoro_counted=" + counted;
}

function startPomodoro(){
    var now = new Date().getTime(); 
    var pomodoroEnd = new Date(now+(25*60*1000));
    setPomodoroEnd(pomodoroEnd);
    setCurrentPomdoroCounted(false);  
}