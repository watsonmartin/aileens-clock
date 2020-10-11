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

     var toggleCounterButton = document.createElement("button"); 
     toggleCounterButton.id = "togglebutton"; 
     toggleCounterButton.innerHTML = getToggleCounterText(); 
     controls.appendChild(toggleCounterButton); 

     toggleCounterButton.addEventListener("click", function() { 
             toggleCounter();  
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

function setCounterActive(active){
    document.cookie = "pomodoro_counter_active=" + active + "; SameSite=Lax"; 
}

function startPomodoro(){
    var now = new Date().getTime(); 
    var pomodoroEnd = new Date(now+(25*60*1000));
    setPomodoroEnd(pomodoroEnd);
    setCurrentPomdoroCounted(false);  
}

function counterActive(){
    if(cookieSet("pomodoro_counter_active")){
        return getCookie("pomodoro_counter_active") == "true"; 
    }
    return true; 
}

function getToggleCounterText(){
    if(counterActive()){
        return "Deactivate pomodoro counter";
    }
    return "Activate pomodoro counter"; 
}

function toggleCounter(){
    if(counterActive()){
        setCounterActive("false");
        document.getElementById("togglebutton").innerHTML = getToggleCounterText(); 
    } else {
        setCounterActive("true"); 
        document.getElementById("togglebutton").innerHTML = getToggleCounterText(); 
    }
}