var cls = document.getElementById("location");
var count = 0;



function showExactPosition(position){

cls.innerHTML = "latitude:" + position.coords.latitude + "<br> longutude:" + position.coords.longitude + "<br> longutude:" + count;
}

setInterval(function getLocation(){
    count++;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showExactPosition);
    }
    
}, 10);

