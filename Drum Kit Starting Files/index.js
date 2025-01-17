var numberofdrumesbuttons = document.querySelectorAll(".drum").lenght;

for (var i=0; i<numberofdrumesbuttons; i++)  {

document.querySelectorAll(".drum")[i].addeventlistener("click", function(){ var audio = new Audio('sound/drum');
audio.play();





});

}
