// for sounds 

var button = document.querySelectorAll(".btn").length;



for(var i = 0; i < button; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",play)
}

function bloom(){   

    var bloom = new Audio('./bloop-4.mp3');
    bloom.play();
}

function play(){
    var audio = new Audio('./bloop-3.mp3');
    audio.play();
}

document.querySelector( ".btn-ac").addEventListener("click", bloom)






// for taking value via buttons and displays on input 

const buttons = document.querySelectorAll("button");

const display = document.querySelector(".display");


buttons.forEach(buttons => {
    buttons.addEventListener("click", function() {
        const value = this.value;

        let CurrentValue = display.value;

        CurrentValue += value;

        display.value = CurrentValue;
    })
})

document.querySelector(".btnc").addEventListener("click", function(){
    display.value = display.value.toString().slice(0,-1);
})
document.querySelector(".btn-e").addEventListener("click", function(){
    display.value = eval(display.value);
})



