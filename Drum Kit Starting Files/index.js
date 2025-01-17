var numberofdrumesbuttons = document.querySelectorAll(".drum").lenght;

for (var i=0; i<numberofdrumesbuttons; i++)  {

document.querySelectorAll(".drum")[i].addeventlistener("click", function(){ var audio = new Audio('sounds/crash.mp3');
audio.play();





});

}
