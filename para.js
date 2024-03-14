var button = document.querySelectorAll(".btn").length;

for(var i = 0; i < button; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",play)
}

function play(){
    var audio = new Audio('./bloop-3.mp3');
    audio.play();
}

document.querySelector( ".btn-ac").addEventListener("click", bloom)

function bloom(){
    var bloom = new Audio('./bloop-4.mp3');
    bloom.play();
}


document.querySelector(".btn6").addEventListener("click", print)
function print(){
    document.querySelector("#display").innerHTML = "laaa";
}